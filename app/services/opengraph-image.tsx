import { OgImage } from "@/components/og-image"

export const runtime = "edge"
export const alt = "UBConcept Services - Comprehensive Product Development"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return OgImage({
    title: "Our Services",
    subtitle: "Comprehensive product development services",
  })
}
