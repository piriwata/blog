import * as React from "react"
import { SerializeOptions } from "next-mdx-remote/dist/types"
import { MDXRemote } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"

import { cn } from "@/lib/utils"

const mdxOptions: SerializeOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypePrettyCode, { theme: "one-dark-pro", keepBackground: true }],
    ],
    format: "md",
  },
  parseFrontmatter: false,
}

const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-heading mt-2 scroll-m-20 text-4xl font-bold",
        className
      )}
      {...props}
    />
  ),
}

type Props = {
  content: string
}

export const MDX = async (props: Props) => {
  return (
    /* @ts-expect-error Server Component */
    <MDXRemote
      source={props.content}
      options={mdxOptions}
      components={mdxComponents}
    />
  )
}
