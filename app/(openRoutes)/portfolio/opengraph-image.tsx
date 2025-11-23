import { OgImage } from "@/components/og-image"

export const runtime = "edge"
export const alt = "UBConcept Portfolio - Our Featured Projects"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return OgImage({
    title: "Our Portfolio",
    subtitle: "Explore our diverse range of innovative products and projects",
  })
}
