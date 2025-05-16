import { Users, Zap, Lightbulb, MessageSquare, Compass, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product Consulting Services | UBConcept",
  description: "Expert guidance throughout your product journey, from concept to market success.",
  openGraph: {
    title: "Product Consulting Services | UBConcept",
    description: "Expert guidance throughout your product journey, from concept to market success.",
    type: "website",
  },
}

export default function ConsultingPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Product{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
              Consulting
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert guidance throughout your product journey, from concept to market success.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-80 bg-gradient-to-r from-blue-900/20 to-amber-900/20 rounded-xl mb-12 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Users className="w-32 h-32 text-amber-500/30" />
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Strategic Product Consulting</h2>
          <p className="text-gray-300 mb-6">
            UBConcept provides expert product consulting services to help you navigate the complex journey from initial
            concept to market success. Our team of experienced product strategists, designers, and engineers offers
            guidance at every stage of your product development process.
          </p>
          <p className="text-gray-300">
            Whether you're a startup launching your first product or an established company expanding your product line,
            our consulting services provide the strategic insights and tactical expertise you need to make informed
            decisions and achieve your product goals.
          </p>
        </div>

        {/* Consulting Services */}
        <h2 className="text-2xl font-bold text-white mb-6">Our Consulting Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Lightbulb className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Product Strategy</h3>
            </div>
            <p className="text-gray-300">
              We help you define a clear product vision and strategy aligned with your business goals, market
              opportunities, and customer needs.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Compass className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Product Roadmapping</h3>
            </div>
            <p className="text-gray-300">
              We work with you to create a strategic product roadmap that outlines the evolution of your product,
              prioritizing features and capabilities based on business value and market needs.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <MessageSquare className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Product Validation</h3>
            </div>
            <p className="text-gray-300">
              We help you validate your product concept through market research, user testing, and prototype evaluation
              to ensure product-market fit before significant investment.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Users className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Go-to-Market Strategy</h3>
            </div>
            <p className="text-gray-300">
              We provide guidance on launching your product effectively, including positioning, pricing, marketing, and
              sales strategies to maximize market impact and adoption.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Benefits of Our Consulting Services</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Expert Guidance</h3>
                <p className="text-gray-300">
                  Access to experienced product professionals who have successfully guided numerous products from
                  concept to market.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Accelerated Development</h3>
                <p className="text-gray-300">
                  Avoid common pitfalls and accelerate your product development timeline with proven methodologies and
                  best practices.
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
                  Make informed decisions based on market insights, user feedback, and industry expertise rather than
                  assumptions.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Optimized Resource Allocation</h3>
                <p className="text-gray-300">
                  Focus your resources on the most impactful aspects of your product development, maximizing return on
                  investment.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready for Expert Product Guidance?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's work together to develop a winning product strategy and bring your vision to market successfully.
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
