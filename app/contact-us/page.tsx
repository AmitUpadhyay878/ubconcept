import type { Metadata } from "next"
import ContactUsClient from "./ContactUsClient"

export const metadata: Metadata = {
  title: "Contact Us | UBConcept",
  description:
    "Get in touch with UBConcept to discuss your product development needs and transform your ideas into reality.",
  keywords: ["contact UBConcept","UBConcept contact", "contact","product development inquiry", "get in touch", "project consultation","Transforming innovative ideas into market-ready products with our comprehensive approach to product development."],
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
  alternates: {
    canonical: "https://ubconcept.vercel.app/contact-us",
  },
  authors: [
    {
      name: "UBConcept",
      url: "https://ubconcept.vercel.app",
    },
  ],
  publisher: "UBConcept",
  category: "contact",
  verification: {
google: "google-site-verification=google2f44b44c882c1b38.html",
  },
  openGraph: {
    title: "Contact Us | UBConcept",
    description:
      "Get in touch with UBConcept to discuss your product development needs and transform your ideas into reality.",
    type: "website",
    url: "https://ubconcept.com/contact-us",
    siteName: "UBConcept",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | UBConcept",
    description: "Get in touch with UBConcept to discuss your product development needs."
  },
  metadataBase: new URL("https://ubconcept.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "UBConcept",
  },
}

export default function ContactUs() {
  return <ContactUsClient />
}
