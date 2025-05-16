import { Briefcase, Users, Award, Lightbulb } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | UBConcept",
  description:
    "Learn about UBConcept, a forward-thinking product development studio dedicated to transforming innovative ideas into market-ready products.",
  openGraph: {
    title: "About Us | UBConcept",
    description:
      "Learn about UBConcept, a forward-thinking product development studio dedicated to transforming innovative ideas into market-ready products.",
    type: "website",
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
      </div>
    </div>
  )
}
