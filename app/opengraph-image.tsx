import { OgImage } from "@/components/og-image"

export const runtime = "edge"
export const alt = "UBConcept - Transform Your Idea into Product"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return OgImage({
    title: "Transform Your Idea into Product",
    subtitle: "A forward-thinking product development studio",
  })
}
