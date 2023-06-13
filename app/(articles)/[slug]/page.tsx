import "./prism-darcula.css"
import { Suspense, cache } from "react"
import matter from "gray-matter"

import { prisma } from "@lib/prisma"
import { H1 } from "@components/ui/typography"
import { MDX } from "./mdx"

// set revalidation frequency of page to (in seconds).
export const revalidate = 3600

type Article = {
  title: string
  body: string
  date: string
}

const getArticle = cache(async (slug: string): Promise<Article> => {
  const post = await prisma.posts.findUnique({
    where: { slug },
  })
  const { data, content } = matter(post!.content)
  return {
    title: data.title,
    body: content,
    date: post!.updatedAt.toLocaleDateString(),
  }
})

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params
  const article = await getArticle(slug)

  return {
    title: article?.title,
  }
}

export default async function Article({ params }: Props) {
  const { slug } = params
  const article = await getArticle(slug)

  return (
    <article>
      <Suspense fallback={<></>}>
        <H1>{article.title}</H1>
        {/* @ts-expect-error Server Component */}
        <MDX content={article.body || ""} />
      </Suspense>
    </article>
  )
}
