import { Factory, Zap, Truck, Settings, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Manufacturing Solutions | UBConcept",
  description: "End-to-end manufacturing services to transform your prototypes into market-ready products at scale.",
  openGraph: {
    title: "Manufacturing Solutions | UBConcept",
    description: "End-to-end manufacturing services to transform your prototypes into market-ready products at scale.",
    type: "website",
  },
}

export default function ManufacturingPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
              Manufacturing
            </span>{" "}
            Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end manufacturing services to transform your prototypes into market-ready products at scale.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-80 bg-gradient-to-r from-blue-900/20 to-amber-900/20 rounded-xl mb-12 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Factory className="w-32 h-32 text-amber-500/30" />
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Manufacturing Excellence</h2>
          <p className="text-gray-300 mb-6">
            UBConcept provides comprehensive manufacturing solutions that help you transition seamlessly from prototype
            to production. We handle all aspects of the manufacturing process, ensuring your products are built to the
            highest standards of quality and efficiency.
          </p>
          <p className="text-gray-300">
            Our team works with a network of trusted manufacturing partners across various industries, allowing us to
            select the optimal production approach for your specific product requirements. Whether you need small batch
            production or large-scale manufacturing, we have the expertise to deliver exceptional results.
          </p>
        </div>

        {/* Process */}
        <h2 className="text-2xl font-bold text-white mb-6">Our Manufacturing Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Settings className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Production Planning</h3>
            </div>
            <p className="text-gray-300">
              We develop detailed manufacturing plans, including material selection, production methods, and quality
              control processes tailored to your product specifications.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Factory className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Production Setup</h3>
            </div>
            <p className="text-gray-300">
              Our team sets up the manufacturing environment, including tooling, fixtures, and assembly processes,
              ensuring efficient and consistent production.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Shield className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Quality Assurance</h3>
            </div>
            <p className="text-gray-300">
              We implement rigorous quality control measures throughout the manufacturing process, ensuring every
              product meets our high standards before reaching your customers.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Truck className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Logistics & Distribution</h3>
            </div>
            <p className="text-gray-300">
              We handle packaging, warehousing, and distribution logistics, ensuring your products reach their
              destination efficiently and in perfect condition.
            </p>
          </div>
        </div>

        {/* Manufacturing Services */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Our Manufacturing Services</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Small Batch Production</h3>
                <p className="text-gray-300">
                  Ideal for initial market testing or limited edition products, our small batch manufacturing ensures
                  high quality with lower upfront investment.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Mass Production</h3>
                <p className="text-gray-300">
                  Scale your product with efficient, high-volume manufacturing that maintains consistent quality while
                  optimizing costs.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Assembly Services</h3>
                <p className="text-gray-300">
                  Our skilled assembly teams ensure your products are put together with precision, whether they require
                  simple or complex assembly processes.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Packaging & Fulfillment</h3>
                <p className="text-gray-300">
                  Complete packaging solutions that protect your product, enhance your brand, and optimize the unboxing
                  experience for your customers.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Manufacture Your Product?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's bring your product to market with manufacturing solutions that ensure quality, efficiency, and
            scalability.
          </p>
          <Link href="/contact-us">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6">
              Start Manufacturing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
