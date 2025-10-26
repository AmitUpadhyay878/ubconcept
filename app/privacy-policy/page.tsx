import { Metadata } from 'next'
import React from 'react'



export const metadata: Metadata = {
  title: "Privacy Policy - UBConcept",
  description:
    "UBConcept helps transform innovative ideas into market-ready products with our comprehensive approach to product development.",
  // Add viewport metadata for better mobile experience
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  // Add additional metadata for better SEO
  keywords: ["ubconcept","UBConcept","Web Development","Web Development company","Web Development Company in Ahmedabad","product development", "innovation", "startup", "technology","Transforming innovative ideas into market-ready products with our comprehensive approach to product development."],
  openGraph: {
    title: "Privacy Policy - UBConcept",
    description: "UBConcept helps transform innovative ideas into market-ready products with our comprehensive approach to product development.",
    type: "website",
  },
  alternates: {
    canonical: "https://ubconcept.vercel.app/privacy-policy",
  },
  authors: [
    {
      name: "UBConcept",
      url: "https://ubconcept.vercel.app",
    },
  ],
  publisher: "UBConcept",
  category: "website",
  verification: {
    google: "google-site-verification=google2f44b44c882c1b38.html",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "UBConcept - Transform Your Idea into Product",
    description: "Transform innovative ideas into market-ready products with our comprehensive approach.",
    images: ["https://ubconcept.vercel.app/og-image.png"],
  },
  metadataBase: new URL("https://ubconcept.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/site.webmanifest",
}


const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Privacy Policy -{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">UBConcept</span>
        </h1>

        <div className="space-y-8">
          {/* Introduction Section */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                UBConcept understands the importance of privacy and is committed to safeguarding your personal information and maintaining the trust of our consumers. This document outlines how we process your information when you browse and interact with our site as well as when you use our software development services. By utilizing our website and services, you accordingly undertake the provisions of this policy.
              </p>
              <p>
                We may use personally identifiable information (such as your name and e-mail address) subject to the conditions specified under this privacy policy. Like you, we strongly oppose spam and therefore will not sell, lease, or rent your e-mail address to any third party.
              </p>
              <p>
                It is expected to clarify how we collect, store, and use your Personal Information. Kindly make sure that by navigating ubconcept.com and by using its services you are consenting to the provisions enumerated in this Privacy Policy.
              </p>
            </div>
          </section>

          {/* Information We Collect Section */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-medium text-white mb-2">(1) Personal Information</h3>
                <p>
                  This includes data that can directly relate you to, for example, your name, email address, phone number, and payment information. We capture this information when you communicate with us, subscribe to our newsletter, seek our quote, or engage in any transaction with us.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">(2) Usage Data</h3>
                <p>
                  We use website analytics, tracking user behavior, preferences, and other information without necessarily identifying any users. It might include, your IP address, browser type and version, the operating system used, the pages visited, the amount of time spent on the website, or other related activities. The outcome of this data is to study its patterns and enhance our services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">(3) Cookies</h3>
                <p>
                  We use cookies and any other related tracking technologies to improve your experience on our website. These help us remember your preferences, and usage details to offer your personalize content. Cookies may be turned on or off using the browser settings with the understanding that turning off cookies could impact the functionality of our website.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information Section */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>To deliver and sustain software development services</li>
              <li>To enhance your experience with our website and services and meet your preferences more accurately</li>
              <li>To notify you about any change in service, new products, special offers, or assistance (where required)</li>
              <li>For various transactions such as payment for services provided</li>
              <li>To understand website usage and the trends within visitors for the improvement of the services we offer</li>
              <li>For the security and capability of our Website and service provision</li>
              <li>To meet legal requirements and address any issues arising from the compliance</li>
            </ul>
          </section>

          {/* Additional sections following the same pattern... */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300">
              If you have any concerns or queries regarding our Privacy Policy or how we handle your personal information, please contact us at{' '}
              <a href="mailto:info@ubconcept.com" className="text-blue-400 hover:text-blue-300">
                info.ubconcept@gmail.com
              </a>
            </p>
          </section>

          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Consent</h2>
            <p className="text-gray-300">
              By using our website, you hereby agree to our privacy policy and its terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
