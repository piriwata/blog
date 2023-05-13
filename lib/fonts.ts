import { JetBrains_Mono, Kosugi_Maru } from "next/font/google"

export const kosugiMaru = Kosugi_Maru({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kosugi",
  display: "block",
})

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet",
  display: "block",
})
