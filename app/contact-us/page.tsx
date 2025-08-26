import type { Metadata } from "next"
import ContactUsClient from "./ContactUsClient"

export const metadata: Metadata = {
  title: "Contact Us | UBConcept",
  description:
    "Get in touch with UBConcept to discuss your product development needs and transform your ideas into reality.",
  keywords: ["contact UBConcept", "product development inquiry", "get in touch", "project consultation"],
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
    google: "google-site-verification=google.html",
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
  }
}

export default function ContactUs() {
  return <ContactUsClient />
}
