import Link from "next/link"
import matter from "gray-matter"

import { prisma } from "@/lib/prisma"

type Article = {
  slug: string
  title: string
  description: string
  date: string
}

const getLatestArticles = async () => {
  const posts = await prisma.posts.findMany({
    take: 4,
  })
  return posts.map((post) => {
    const { data } = matter(post.content)
    return {
      slug: post.slug,
      title: data.title,
      description: data.description,
      date: post.updatedAt.toLocaleDateString(),
    } as Article
  })
}

export default async function Home() {
  const articles = await getLatestArticles()

  return (
    <div className={"gap-6 md:grid md:grid-cols-[1fr_20rem]"}>
      <div className={"mb-8 space-y-4"}>
        <h2 className="text-1xl scroll-m-20 font-semibold tracking-tight transition-colors">
          最近の記事
        </h2>
        {articles.map((article, index) => (
          <article key={index} className={"space-y-1"}>
            <h3 className={"scroll-m-20 text-2xl font-semibold"}>
              <Link href={`/${article.slug}`}>{article.title}</Link>
            </h3>
            <span className={"text-sm text-gray-500"}>{article.date}</span>
            <p>{article.description}</p>
          </article>
        ))}
      </div>
      <div className={"relative space-y-6"}>
        {/*
        <div className="max-h-[calc(var(--vh)-4rem)] overflow-y-auto md:sticky md:top-20">
          menu
        </div>
          */}
      </div>
    </div>
  )
}
