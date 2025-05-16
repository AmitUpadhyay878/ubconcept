import { BarChart, Zap, Search, Target, LineChart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Market Research Services | UBConcept",
  description:
    "In-depth market analysis and competitive research to inform your product strategy and maximize market potential.",
  openGraph: {
    title: "Market Research Services | UBConcept",
    description:
      "In-depth market analysis and competitive research to inform your product strategy and maximize market potential.",
    type: "website",
  },
}

export default function MarketResearchPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Market{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Research</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In-depth market analysis and competitive research to inform your product strategy and maximize market
            potential.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-80 bg-gradient-to-r from-blue-900/20 to-amber-900/20 rounded-xl mb-12 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <BarChart className="w-32 h-32 text-amber-500/30" />
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Data-Driven Insights</h2>
          <p className="text-gray-300 mb-6">
            At UBConcept, we believe that successful products are built on a foundation of thorough market research. Our
            comprehensive research services provide you with the insights needed to make informed decisions about your
            product strategy, target audience, and competitive positioning.
          </p>
          <p className="text-gray-300">
            We combine qualitative and quantitative research methodologies to deliver actionable insights that reduce
            risk and increase the likelihood of market success. Our research is tailored to your specific industry,
            product category, and business objectives.
          </p>
        </div>

        {/* Research Services */}
        <h2 className="text-2xl font-bold text-white mb-6">Our Research Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Search className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Market Analysis</h3>
            </div>
            <p className="text-gray-300">
              We analyze market size, growth trends, and dynamics to identify opportunities and challenges for your
              product. This includes segmentation analysis to pinpoint the most promising market segments.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Target className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Customer Research</h3>
            </div>
            <p className="text-gray-300">
              We conduct in-depth research to understand your target customers' needs, preferences, behaviors, and pain
              points. This includes surveys, interviews, focus groups, and user testing.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <BarChart className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Competitive Analysis</h3>
            </div>
            <p className="text-gray-300">
              We analyze your competitors' products, strategies, strengths, and weaknesses to identify opportunities for
              differentiation and competitive advantage in the marketplace.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <LineChart className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Trend Analysis</h3>
            </div>
            <p className="text-gray-300">
              We identify and analyze emerging trends in technology, consumer behavior, and industry developments that
              could impact your product's success and longevity in the market.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Benefits of Our Market Research</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Reduced Risk</h3>
                <p className="text-gray-300">
                  Thorough market research minimizes the risk of product failure by ensuring your product meets real
                  market needs and has a viable target audience.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Optimized Product-Market Fit</h3>
                <p className="text-gray-300">
                  Our research helps you refine your product features and positioning to achieve the best possible fit
                  with your target market's needs and preferences.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Strategic Decision Making</h3>
                <p className="text-gray-300">
                  Data-driven insights enable you to make informed decisions about product development, pricing,
                  marketing, and go-to-market strategies.
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
                  Understanding the competitive landscape helps you identify gaps and opportunities to differentiate
                  your product and gain a competitive edge.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Research Your Market?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's uncover the insights you need to develop a successful product strategy and maximize your market
            potential.
          </p>
          <Link href="/contact-us">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6">
              Start Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
