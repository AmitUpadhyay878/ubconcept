import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import JsonLd from "@/components/json-ld"
import { organizationData, localBusinessData, getWebpageData } from "@/lib/structured-data"

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
  alternates: {
    canonical: "https://ubconcept.vercel.app",
  },
  authors: [
    {
      name: "UBConcept",
      url: "https://ubconcept.vercel.app",
    },
  ],
  publisher: "UBConcept",
  category: "website",
  verification: {
    google: "google-site-verification=google.html",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "UBConcept - Transform Your Idea into Product",
    description: "Transform innovative ideas into market-ready products with our comprehensive approach.",
    images: ["https://ubconcept.vercel.app/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      
      <body className={`${inter.className} min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <JsonLd
          organizationData={organizationData}
          localBusinessData={localBusinessData}
          webpageData={getWebpageData(
            "https://ubconcept.vercel.app/",
            "UBConcept - Transform Your Idea into Product",
            "UBConcept helps transform innovative ideas into market-ready products with our comprehensive approach to product development."
          )}
        />
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
