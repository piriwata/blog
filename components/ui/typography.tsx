import * as React from "react"

import { cn } from "@lib/utils"

export const H1 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={cn(
      "font-heading mb-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className
    )}
    {...props}
  />
)

export const H2 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={cn(
      "font-heading my-4 scroll-m-20 border-b text-3xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-4xl",
      className
    )}
    {...props}
  />
)

export const H3 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn(
      "font-heading mb-2 mt-4 scroll-m-20 text-xl font-semibold tracking-tight",
      className
    )}
    {...props}
  />
)

export const P = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn("mb-2 leading-6 [&:not(:first-child)]:mt-2", className)}
    {...props}
  />
)

export const UL = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
)

export const OL = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) => (
  <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
)

export const LI = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <li className={cn("mt-2", className)} {...props} />
)

export const HR = ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
  <hr className="my-4 md:my-8" {...props} />
)
