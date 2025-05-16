import { OgImage } from "@/components/og-image"

export const runtime = "edge"
export const alt = "UBConcept Manufacturing Solutions"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return OgImage({
    title: "Manufacturing Solutions",
    subtitle: "End-to-end manufacturing services for your products",
  })
}
