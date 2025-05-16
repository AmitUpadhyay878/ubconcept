import { OgImage } from "@/components/og-image"

export const runtime = "edge"
export const alt = "About UBConcept - Our Story and Approach"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return OgImage({
    title: "About UBConcept",
    subtitle: "Learn about our team, approach, and vision",
  })
}
