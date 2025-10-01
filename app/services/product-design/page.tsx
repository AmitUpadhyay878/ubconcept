import { Lightbulb, Zap, Users, PenTool, Layers, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import Faqs from "@/components/Faqs"
import { ProductDesignFAQs } from "@/data/FAQsData"
import { getFaqData, getWebpageData } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Product Design Services | UBConcept",
  description: "User-centered design solutions that transform ideas into innovative, market-ready products. Our expert team delivers exceptional product experiences.",
  keywords: ["product design", "user experience", "UI/UX", "industrial design", "concept development","Transforming innovative ideas into market-ready products with our comprehensive approach to product development."],
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
  alternates: {
    canonical: "https://ubconcept.vercel.app/services/product-design",

  },
  authors: [
    {
      name: "UBConcept",
      url: "https://ubconcept.vercel.app",
    },
  ],
  publisher: "UBConcept",
  category: "Product Design",
  verification: {
   google: "google-site-verification=google2f44b44c882c1b38.html",
  },
  openGraph: {
    title: "Product Design Services | UBConcept",
    description: "User-centered design solutions that transform ideas into innovative, market-ready products.",
    type: "website",
    url: "https://ubconcept.com/services/product-design",
    siteName: "UBConcept",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Design Services | UBConcept",
    description: "User-centered design solutions that transform ideas into innovative, market-ready products."
  },
  metadataBase: new URL("https://ubconcept.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "UBConcept",
  },
}

export default function ProductDesignPage() {

  return (
    <div className="container mx-auto px-6 py-16">
            <script
                    id="ProductDesign-FAQs-json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        "@graph": [
                          getWebpageData(
                            "https://ubconcept.vercel.app/",
                            "UBConcept - Transform Your Idea into Product",
                            "UBConcept helps transform innovative ideas into market-ready products with our comprehensive approach to product development."
                          ),
                          getFaqData(ProductDesignFAQs)
                        ]
                      })
                    }}
                  />
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Product{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Design</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            User-centered design solutions that transform ideas into innovative, market-ready products.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-80 bg-gradient-to-r from-blue-900/20 to-amber-900/20 rounded-xl mb-12 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <PenTool className="w-32 h-32 text-amber-500/30" />
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Our Design Approach</h2>
          <p className="text-gray-300 mb-6">
            At UBConcept, we believe that great product design is the foundation of successful products. Our
            user-centered design process focuses on creating products that not only look beautiful but also provide
            exceptional user experiences that solve real problems.
          </p>
          <p className="text-gray-300">
            We combine aesthetics with functionality, ensuring that every design decision is purposeful and contributes
            to the overall success of your product. From initial concept sketches to detailed design specifications, our
            team works closely with you to bring your vision to life.
          </p>
        </div>

        {/* Process */}
        <h2 className="text-2xl font-bold text-white mb-6">Our Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Lightbulb className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Research & Discovery</h3>
            </div>
            <p className="text-gray-300">
              We begin by understanding your business goals, target audience, and market landscape. This research phase
              helps us identify opportunities and constraints for your product design.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Users className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">User Experience Design</h3>
            </div>
            <p className="text-gray-300">
              We create user personas, journey maps, and wireframes to define the optimal user experience. This ensures
              your product is intuitive, accessible, and meets user needs effectively.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <PenTool className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Visual Design</h3>
            </div>
            <p className="text-gray-300">
              Our designers create stunning visual interfaces that align with your brand identity. We focus on creating
              cohesive design systems that can scale with your product.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Layers className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Prototyping & Testing</h3>
            </div>
            <p className="text-gray-300">
              We create interactive prototypes to validate design decisions and gather user feedback. This iterative
              process ensures the final design meets both user needs and business objectives.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Benefits of Our Design Services</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Increased User Satisfaction</h3>
                <p className="text-gray-300">
                  User-centered design leads to products that people love to use, resulting in higher satisfaction and
                  loyalty.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Reduced Development Costs</h3>
                <p className="text-gray-300">
                  Identifying and fixing design issues early in the process saves significant development time and
                  resources.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Competitive Advantage</h3>
                <p className="text-gray-300">
                  Well-designed products stand out in the market, giving you a significant edge over competitors.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Brand Consistency</h3>
                <p className="text-gray-300">
                  Our design systems ensure your product maintains consistent branding across all touchpoints.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <Faqs 
        title="FAQs"
        description="Here’s a set of FAQs to help you discover more about UBConcept"
        faqs={ProductDesignFAQs}
      />

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Design Your Next Product?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's collaborate to create a product design that delights users and achieves your business goals.
          </p>
          <Link href="/contact-us">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
