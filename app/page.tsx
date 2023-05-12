import Link from "next/link"

import { prisma } from "@/lib/prisma"

const getLatestArticles = async () => {
  const posts = await prisma.posts.findMany({
    take: 4,
  })
  return posts.map((post) => ({
    title: post.content.slice(0, 30),
    date: post.updatedAt.toLocaleDateString(),
    ...post,
  }))
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
            <p>{article.content}</p>
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
