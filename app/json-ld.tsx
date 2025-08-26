import { organizationData, localBusinessData, getWebpageData } from "@/lib/structured-data"

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebpageData(
            "https://ubconcept.vercel.app/",
            "UBConcept - Transform Your Idea into Product",
            "UBConcept helps transform innovative ideas into market-ready products with our comprehensive approach to product development."
          ))
        }}
      />
    </>
  )
}