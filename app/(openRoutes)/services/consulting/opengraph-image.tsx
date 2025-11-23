import { OgImage } from "@/components/og-image"

export const runtime = "edge"
export const alt = "UBConcept Product Consulting Services"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return OgImage({
    title: "Product Consulting",
    subtitle: "Expert guidance throughout your product journey",
  })
}
