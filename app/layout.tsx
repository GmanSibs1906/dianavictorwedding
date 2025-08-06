import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Bodoni_Moda, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni" })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Diana & Victor - An Editorial Wedding",
  description: "A sophisticated celebration of love and elegance",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${bodoni.variable} ${cormorant.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
