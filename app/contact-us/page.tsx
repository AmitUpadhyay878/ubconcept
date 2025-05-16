import type { Metadata } from "next"
import ContactUsClient from "./ContactUsClient"

export const metadata: Metadata = {
  title: "Contact Us | UBConcept",
  description:
    "Get in touch with UBConcept to discuss your product development needs and transform your ideas into reality.",
  openGraph: {
    title: "Contact Us | UBConcept",
    description:
      "Get in touch with UBConcept to discuss your product development needs and transform your ideas into reality.",
    type: "website",
  },
}

export default function ContactUs() {
  return <ContactUsClient />
}
