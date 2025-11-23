import { OgImage } from "@/components/og-image"

export const runtime = "edge"
export const alt = "Contact UBConcept - Get in Touch"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return OgImage({
    title: "Get in Touch",
    subtitle: "Contact us to discuss your product development needs",
  })
}
