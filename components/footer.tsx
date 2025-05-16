import Link from "next/link"
import { Lightbulb, Mail, Phone, MapPin } from "lucide-react"

// Define services for the footer
const services = [
  { title: "Product Design", href: "/services/product-design" },
  { title: "Prototyping", href: "/services/prototyping" },
  { title: "Manufacturing", href: "/services/manufacturing" },
  { title: "Market Research", href: "/services/market-research" },
  { title: "Consulting", href: "/services/consulting" },
]

export default function Footer() {
  return (
    <footer className="bg-black/[0.98] border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-amber-500 rounded-md transform rotate-45"></div>
                <Lightbulb className="w-5 h-5 text-white relative z-10" />
              </div>
              <span className="text-white font-medium text-xl">UBConcept</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming innovative ideas into market-ready products with our comprehensive approach to product
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-400 hover:text-amber-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
                <span className="text-gray-400">info@ubconcept.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
                <span className="text-gray-400">+91 8511546616</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  403, Sumeet Apartment,
                  <br />
                  Near Mansi Circle, Vastrapur,
                  <br />
                  Ahmedabad - 380015
                  <br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} UBConcept. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
