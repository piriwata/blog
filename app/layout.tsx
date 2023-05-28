import "./globals.css"
import * as React from "react"
import { Metadata } from "next"

import { jetBrainsMono, kosugiMaru } from "@lib/fonts"
import { ThemeProvider } from "@components/theme-provider"
import { Footer } from "./footer"
import { Header } from "./header"

export const metadata: Metadata = {
  title: {
    default: "piriwata blog",
    template: "%s | piriwata blog",
  },
  description:
    "just focus on maximizing happiness within a three-meter radius.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${kosugiMaru.variable} ${jetBrainsMono.variable} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
          <div className={"relative flex min-h-screen flex-col"}>
            <Header />
            <main className={"container mt-6 flex-1"}>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
