import * as React from "react"
import { SerializeOptions } from "next-mdx-remote/dist/types"
import { MDXRemote } from "next-mdx-remote/rsc"
import rehypePrism from "rehype-prism-plus"
import remarkGfm from "remark-gfm"

import { H1, H2, H3, HR, LI, OL, P, UL } from "@components/ui/typography"

const mdxOptions: SerializeOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
    format: "md",
  },
  parseFrontmatter: false,
}

const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  hr: HR,
  ul: UL,
  ol: OL,
  li: LI,
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
