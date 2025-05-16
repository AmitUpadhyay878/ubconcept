import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomeAbout() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                UBConcept
              </span>
            </h2>

            <p className="text-gray-300 text-lg mb-6">
              UBConcept is a forward-thinking product development studio dedicated to transforming innovative ideas into
              market-ready products. With our team of experienced designers, engineers, and strategists, we bridge the
              gap between concept and reality.
            </p>

            <p className="text-gray-300 text-lg mb-8">
              Founded in 2025, we've helped startups and established companies alike bring their visions to life through
              our comprehensive approach to product development, prototyping, and market validation.
            </p>

            <Link href="/about-us">
              <Button variant="outline" className="text-white border-amber-500 hover:bg-amber-500/20">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
                <div className="text-gray-300">Products Launched</div>
              </div>

              <div className="text-center p-6">
                <div className="text-4xl font-bold text-amber-400 mb-2">12+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>

              <div className="text-center p-6">
                <div className="text-4xl font-bold text-amber-400 mb-2">30+</div>
                <div className="text-gray-300">Team Members</div>
              </div>

              <div className="text-center p-6">
                <div className="text-4xl font-bold text-amber-400 mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
