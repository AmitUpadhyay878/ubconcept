// Remove "use client" to make this a server component
import React from 'react'

interface JsonLdProps {
  organizationData: any
  localBusinessData: any
  webpageData: any
}

export default function JsonLd({ organizationData, localBusinessData, webpageData }: JsonLdProps) {
  return (
    <>
      <script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        id="localbusiness-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData)
        }}
      />
      <script
        id="webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageData)
        }}
      />
    </>
  )
}