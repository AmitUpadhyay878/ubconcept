"use client";
import Link from "next/link";
import { Lightbulb, Mail, Phone, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Define services for the footer
const services = [
  { title: "Product Design", href: "/services/product-design" },
  { title: "Prototyping", href: "/services/prototyping" },
  { title: "Manufacturing", href: "/services/manufacturing" },
  { title: "Market Research", href: "/services/market-research" },
  { title: "Consulting", href: "/services/consulting" },
];

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bg-black/[0.98] border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <motion.div
                  initial={{ rotate: 45 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-600 to-amber-500 rounded-xl"
                />
                <Lightbulb className="w-6 h-6 text-white relative z-10" />
              </div>
              <span className="text-white font-semibold text-2xl">
                UBConcept
              </span>
            </Link>

            <p className="text-gray-400 mb-6">
              Transforming innovative ideas into market-ready products with our
              comprehensive approach to product development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className={`text-gray-400 font-medium hover:text-amber-400 transition-colors`}
                 
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`hover:text-amber-400 transition-colors ${
                    pathname.includes("/about-us") ? "text-amber-400 font-semibold" : "text-gray-400 font-semibold"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className={`hover:text-amber-400 transition-colors ${
                    pathname.includes("/portfolio") ? "text-amber-400 font-semibold" : "text-gray-400 font-semibold"
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className={`hover:text-amber-400 transition-colors ${
                    pathname.includes("/blogs") ? "text-amber-400 font-semibold" : "text-gray-400 font-semibold"
                  }`}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={`hover:text-amber-400 transition-colors ${
                    pathname.includes("/contact-us") ? "text-amber-400 font-semibold" : "text-gray-400 font-semibold"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                   className={`hover:text-amber-400 transition-colors ${
                    pathname.includes("/privacy-policy") ? "text-amber-400 font-semibold" : "text-gray-400 font-semibold"
                  }`}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className={`hover:text-amber-400 transition-colors ${
                    pathname.includes("/sitemap") ? "text-amber-400 font-semibold" : "text-gray-400 font-semibold"
                  }`}
                >
                  Sitemap
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
                  <Link
                    href={service?.href}
                    className={`hover:text-amber-400 transition-colors
                    ${
                      pathname.includes(service?.href)
                        ? "text-amber-400 font-semibold" : "text-gray-400 font-semibold"
                    }
                    `}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
                <span className="text-gray-400">info.ubconcept@gmail.com</span>
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
          <p className="text-gray-500">
            © {new Date().getFullYear()} UBConcept. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
