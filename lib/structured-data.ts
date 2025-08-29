export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "UBConcept",
  "logo": "https://ubconcept.vercel.app/placeholder-logo.svg",
  "url": "https://ubconcept.vercel.app/",
  "description": "UBConcept is a forward-thinking product development studio dedicated to transforming innovative ideas into market-ready products.",
  "founder": [
    {
      "@type": "Person",
      "name": "Amit Upadhyay"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Innovation Drive",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94103",
    "addressCountry": "USA"
  },
  "sameAs": [
    "https://www.facebook.com/UBConcept/",
    "https://twitter.com/UBConcept/",
    "https://www.linkedin.com/company/ubconcept/",
    "https://github.com/UBConcept/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8511546616",
    "contactType": "Customer Service",
    "email": "info@ubconcept.com",
    "areaServed": ["IN","US", "CA", "UK"]
  }
}

export const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "UBConcept",
  "image": "https://ubconcept.vercel.app/placeholder-logo.svg",
  "@id": "https://ubconcept.vercel.app/#localbusiness",
  "url": "https://ubconcept.vercel.app/",
  "telephone": "+91-8511546616",
  "priceRange": "$$",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "403,Sumeet Apartment,Mansi Circle,Vastrapur",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380015",
      "addressCountry": "IN"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/UBConcept",
    "https://twitter.com/UBConcept",
    "https://www.linkedin.com/company/ubconcept",
    "https://github.com/UBConcept/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8511546616",
    "contactType": "Customer Service",
    "email": "info@ubconcept.vercel.app",
    "areaServed": ["IN","US", "CA", "UK"],
    "url": "https://ubconcept.vercel.app/contact",
    // "contactUrl": "https://ubconcept.vercel.app/contact"
  }
}

export const getWebpageData = (url: string, title: string, description: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "inLanguage": "en-US",
    "name": title,
    "isPartOf": {
      "@id": "https://ubconcept.vercel.app/#website"
    },
    "description": description
  }
}