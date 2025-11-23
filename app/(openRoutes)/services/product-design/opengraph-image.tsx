import { OgImage } from "@/components/og-image"

export const runtime = "edge"
export const alt = "UBConcept Product Design Services"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return OgImage({
    title: "Product Design",
    subtitle: "User-centered design solutions for innovative products",
  })
}
