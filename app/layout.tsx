import "@/styles/globals.css"
import * as React from "react"
import { Metadata } from "next"
import { Footer } from "@/app/footer"
import { Header } from "@/app/header"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

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
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
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
