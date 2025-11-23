import { OgImage } from "@/components/og-image"

export const runtime = "edge"
export const alt = "UBConcept Market Research Services"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return OgImage({
    title: "Market Research",
    subtitle: "In-depth market analysis and competitive research",
  })
}
