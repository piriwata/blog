import "./styles/globals.css"
import React from "react"
import Link from "next/link"

export const metadata = {
  title: "piriwata blog",
  description:
    "just focus on maximizing happiness within a three-meter radius.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <header>
          <Link href={"/"}>piriwata</Link>
        </header>
        <main>{children}</main>
        <footer>copyright 2023 piriwata</footer>
      </body>
    </html>
  )
}
