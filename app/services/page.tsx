import { Lightbulb, Layers, Factory, BarChart, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | UBConcept",
  description: "Comprehensive product development services to transform your ideas into market-ready solutions.",
  openGraph: {
    title: "Our Services | UBConcept",
    description: "Comprehensive product development services to transform your ideas into market-ready solutions.",
    type: "website",
  },
}

// Define services
const services = [
  {
    title: "Product Design",
    description: "User-centered design solutions for innovative products",
    icon: <Lightbulb className="h-10 w-10 text-amber-400" />,
    href: "/services/product-design",
  },
  {
    title: "Prototyping",
    description: "Rapid prototyping to validate concepts and ideas",
    icon: <Layers className="h-10 w-10 text-amber-400" />,
    href: "/services/prototyping",
  },
  {
    title: "Manufacturing",
    description: "End-to-end manufacturing solutions for your products",
    icon: <Factory className="h-10 w-10 text-amber-400" />,
    href: "/services/manufacturing",
  },
  {
    title: "Market Research",
    description: "In-depth market analysis and competitive research",
    icon: <BarChart className="h-10 w-10 text-amber-400" />,
    href: "/services/market-research",
  },
  {
    title: "Consulting",
    description: "Expert guidance throughout your product journey",
    icon: <Users className="h-10 w-10 text-amber-400" />,
    href: "/services/consulting",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive product development services to transform your ideas into market-ready solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full transition-all group-hover:bg-white/10 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-lg">
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="flex items-center text-amber-400 font-medium group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Our End-to-End Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-700/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-amber-400 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Discovery & Strategy</h3>
              <p className="text-gray-300">
                We begin by understanding your vision, conducting market research, and developing a strategic roadmap.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-700/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-amber-400 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Design & Development</h3>
              <p className="text-gray-300">
                Our team designs and develops your product, from initial concepts to functional prototypes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-700/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-amber-400 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Production & Launch</h3>
              <p className="text-gray-300">
                We handle manufacturing, quality assurance, and support you through market launch and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Bring Your Idea to Life?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's collaborate to transform your vision into a successful product that delights users and achieves your
            business goals.
          </p>
          <Link href="/contact-us">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
