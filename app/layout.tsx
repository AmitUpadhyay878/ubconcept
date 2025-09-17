import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import JsonLd from "./json-ld"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"

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
  keywords: ["ubconcept","UBConcept","Web Development","Web Development company","Web Development Company in Ahmedabad","product development", "innovation", "startup", "technology"],
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
  metadataBase: new URL("https://ubconcept.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href={`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`}
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Analytics />
      </head>
      <body className={`${inter.className} min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <JsonLd />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Script
          id="font-optimization"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Font optimization
              (function() {
                const fonts = document.querySelectorAll('link[as="font"]');
                fonts.forEach(font => {
                  font.setAttribute('crossorigin', 'anonymous');
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
