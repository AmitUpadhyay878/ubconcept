import { OgImage } from "@/components/og-image"

export const runtime = "edge"
export const alt = "UBConcept Prototyping Services"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return OgImage({
    title: "Prototyping Services",
    subtitle: "Rapidly transform concepts into functional prototypes",
  })
}
