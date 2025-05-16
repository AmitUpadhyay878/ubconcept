import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Use 'swap' to prevent invisible text during font loading
  preload: true,
  variable: "--font-inter", // Add variable for better CSS control
})

export const metadata: Metadata = {
  title: "UBConcept - Transform Your Idea into Product",
  description:
    "UBConcept helps transform innovative ideas into market-ready products with our comprehensive approach to product development.",
  // Add viewport metadata for better mobile experience
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  // Add additional metadata for better SEO
  openGraph: {
    title: "UBConcept - Transform Your Idea into Product",
    description: "Transform innovative ideas into market-ready products with our comprehensive approach.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
