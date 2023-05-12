import "@/styles/prism-darcula.css"
import { Suspense } from "react"

import { prisma } from "@/lib/prisma"
import { MDX } from "@/components/mdx"

const getArticle = async (slug: string) => {
  return prisma.posts.findUnique({
    where: { slug },
  })
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params
  const article = await getArticle(slug)

  return {
    title: article?.slug,
  }
}

export default async function Article({ params }: Props) {
  const { slug } = params
  const article = await getArticle(slug)

  return (
    <article>
      <Suspense fallback={<></>}>
        {/* @ts-expect-error Server Component */}
        <MDX content={article?.content || ""} />
      </Suspense>
    </article>
  )
}
