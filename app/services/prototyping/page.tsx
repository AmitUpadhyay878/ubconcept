import { Layers, Zap, Code, Cpu, Hammer, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prototyping Services | UBConcept",
  description: "Rapidly transform concepts into functional prototypes to validate ideas and accelerate development.",
  openGraph: {
    title: "Prototyping Services | UBConcept",
    description: "Rapidly transform concepts into functional prototypes to validate ideas and accelerate development.",
    type: "website",
  },
}

export default function PrototypingPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
              Prototyping
            </span>{" "}
            Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Rapidly transform concepts into functional prototypes to validate ideas and accelerate development.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-80 bg-gradient-to-r from-blue-900/20 to-amber-900/20 rounded-xl mb-12 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Layers className="w-32 h-32 text-amber-500/30" />
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Rapid Prototyping Solutions</h2>
          <p className="text-gray-300 mb-6">
            At UBConcept, we specialize in creating high-quality prototypes that help validate your product concepts
            before investing in full-scale development. Our prototyping services bridge the gap between idea and
            implementation, allowing you to test, refine, and perfect your product vision.
          </p>
          <p className="text-gray-300">
            Whether you need a simple proof-of-concept or a sophisticated functional prototype, our team has the
            expertise to bring your ideas to life quickly and efficiently. We use the latest prototyping tools and
            technologies to create realistic models that accurately represent your final product.
          </p>
        </div>

        {/* Process */}
        <h2 className="text-2xl font-bold text-white mb-6">Our Prototyping Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Layers className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Concept Development</h3>
            </div>
            <p className="text-gray-300">
              We work with you to refine your initial concept, identifying key features and functionality that need to
              be validated through prototyping.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Code className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Prototype Design</h3>
            </div>
            <p className="text-gray-300">
              Our team creates detailed designs and specifications for your prototype, ensuring it accurately represents
              your product vision while focusing on the key aspects to be tested.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Hammer className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Prototype Development</h3>
            </div>
            <p className="text-gray-300">
              Using the appropriate technologies and materials, we build your prototype with the right level of fidelity
              to effectively validate your concept and gather meaningful feedback.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700/20 p-3 rounded-lg mr-4">
                <Cpu className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Testing & Iteration</h3>
            </div>
            <p className="text-gray-300">
              We help you test your prototype with real users, gathering valuable feedback that informs refinements and
              iterations to improve your product before full-scale development.
            </p>
          </div>
        </div>

        {/* Types of Prototypes */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Types of Prototypes We Create</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Low-Fidelity Prototypes</h3>
                <p className="text-gray-300">
                  Quick, simple representations of your product that help validate basic concepts and workflows early in
                  the development process.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Interactive Prototypes</h3>
                <p className="text-gray-300">
                  Clickable, interactive models that simulate the user experience and interface of your product, perfect
                  for testing usability and user flows.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Functional Prototypes</h3>
                <p className="text-gray-300">
                  Working models that implement core functionality of your product, allowing you to test technical
                  feasibility and performance.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-700/20 p-2 rounded-lg mr-4 mt-1">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Physical Prototypes</h3>
                <p className="text-gray-300">
                  3D-printed or fabricated models of physical products, allowing you to test ergonomics, form factor,
                  and manufacturing feasibility.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Prototype Your Idea?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's bring your concept to life with a prototype that validates your vision and accelerates your product
            development.
          </p>
          <Link href="/contact-us">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6">
              Start Prototyping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
