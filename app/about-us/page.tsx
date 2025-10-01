import Testimonials from "@/components/testimonials"
import { Briefcase, Users, Award, Lightbulb } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | UBConcept",
  description:
    "Learn about UBConcept, a forward-thinking product development studio dedicated to transforming innovative ideas into market-ready products.",
  keywords: ["about UBConcept", "product development team", "innovation studio", "our mission", "our values","Transforming innovative ideas into market-ready products with our comprehensive approach to product development."],
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
    canonical: "https://ubconcept.vercel.app/about-us",
  },
  authors: [
    {
      name: "UBConcept",
      url: "https://ubconcept.vercel.app",
    },
  ],
  publisher: "UBConcept",
  category: "about-us",
  verification: {
google: "google-site-verification=google2f44b44c882c1b38.html",
  },
  openGraph: {
    title: "About Us | UBConcept",
    description:
      "Learn about UBConcept, a forward-thinking product development studio dedicated to transforming innovative ideas into market-ready products.",
    type: "website",
    url: "https://ubconcept.com/about-us",
    siteName: "UBConcept",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | UBConcept",
    description: "Learn about UBConcept, a forward-thinking product development studio."
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

export default function AboutUs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">UBConcept</span>
        </h1>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <p className="text-gray-300 text-lg mb-6">
            UBConcept is a forward-thinking product development studio dedicated to transforming innovative ideas into
            market-ready products. With our team of experienced designers, engineers, and strategists, we bridge the gap
            between concept and reality.
          </p>
          <p className="text-gray-300 text-lg">
            Founded in 2025, we have helped startups and established companies alike bring their visions to life through
            our comprehensive approach to product development, prototyping, and market validation.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Approach</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Lightbulb className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Ideation</h3>
            </div>
            <p className="text-gray-300">
              We work closely with you to refine your concept, conducting market research and feasibility studies to
              ensure your product has the best chance of success.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Briefcase className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Development</h3>
            </div>
            <p className="text-gray-300">
              Our skilled team transforms concepts into tangible prototypes, iterating based on feedback and
              continuously improving the design and functionality.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Award className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Refinement</h3>
            </div>
            <p className="text-gray-300">
              We polish every aspect of your product, from user experience to manufacturing details, ensuring it meets
              the highest standards of quality.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Users className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Launch</h3>
            </div>
            <p className="text-gray-300">
              We support you through the launch phase, helping with marketing strategies, production scaling, and
              post-launch improvements.
            </p>
          </div>
        </div>

        {/* Foundation of Success Section */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          The Foundation of Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
            Success
          </span>
        </h2>
        <p className="text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
          Each of these pillars is essential to our vision. They drive our commitment to excellence and continuous growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Row */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <svg className="h-6 w-6 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L1 7L12 12L23 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Innovation at the Core</h3>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <svg className="h-6 w-6 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12H15M12 9V15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Cutting-Edge Technology</h3>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <svg className="h-6 w-6 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Empowering Collaboration</h3>
            </div>
          </div>

          {/* Second Row */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <svg className="h-6 w-6 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Customer-Centric Focus</h3>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <svg className="h-6 w-6 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4V9H9M20 20V15H15M20 9H15V4M4 15H9V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Sustainability Commitment</h3>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <svg className="h-6 w-6 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Agility and Adaptability</h3>
            </div>
          </div>

          {/* Third Row */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <svg className="h-6 w-6 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Inclusive Culture</h3>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <svg className="h-6 w-6 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7H16.5C17.3284 7 18 6.32843 18 5.5V2.5C18 1.67157 17.3284 1 16.5 1H7.5C6.67157 1 6 1.67157 6 2.5V5.5C6 6.32843 6.67157 7 7.5 7H12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Personalized Support</h3>
            </div>
          </div>
        </div>

        <Testimonials />
      </div>
    </div>
  )
}
