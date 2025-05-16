"use client"

import { Button } from "@/components/ui/button"
import { Menu, Lightbulb, ChevronDown, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation" // Added import
import { useState, useEffect, useRef } from "react"
import { useAppStore } from "@/lib/store"

// Define services for the dropdown
const services = [
  {
    title: "Product Design",
    description: "User-centered design solutions for innovative products",
    href: "/services/product-design",
  },
  {
    title: "Prototyping",
    description: "Rapid prototyping to validate concepts and ideas",
    href: "/services/prototyping",
  },
  {
    title: "Manufacturing",
    description: "End-to-end manufacturing solutions for your products",
    href: "/services/manufacturing",
  },
  {
    title: "Market Research",
    description: "In-depth market analysis and competitive research",
    href: "/services/market-research",
  },
  {
    title: "Consulting",
    description: "Expert guidance throughout your product journey",
    href: "/services/consulting",
  },
]

export default function Navbar() {
  const pathname = usePathname() // Get current path
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, width: 0 })
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const servicesButtonRef = useRef<HTMLButtonElement>(null)
  const servicesMenuRef = useRef<HTMLDivElement>(null)

  // Get the global state setter for dropdown open state
  const setDropdownOpen = useAppStore((state) => state.setDropdownOpen)

  // Update global state when services dropdown opens/closes
  // But only affect animation behavior, not cause animation restart
  useEffect(() => {
    if (servicesOpen !== useAppStore.getState().isDropdownOpen) {
      setDropdownOpen(servicesOpen)
    }
  }, [servicesOpen, setDropdownOpen])

  // Calculate dropdown position when it opens
  useEffect(() => {
    if (servicesOpen && servicesButtonRef.current) {
      const buttonRect = servicesButtonRef.current.getBoundingClientRect()
      setDropdownPosition({
        left: buttonRect.left,
        width: buttonRect.width,
      })
    }
  }, [servicesOpen])

  // Track scroll position to update navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close mobile menu when clicking outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }

      // Close services dropdown when clicking outside
      if (
        servicesOpen &&
        servicesButtonRef.current &&
        servicesMenuRef.current &&
        !servicesButtonRef.current.contains(event.target as Node) &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [servicesOpen])

  // Recalculate dropdown position on window resize
  useEffect(() => {
    const handleResize = () => {
      if (servicesOpen && servicesButtonRef.current) {
        const buttonRect = servicesButtonRef.current.getBoundingClientRect()
        setDropdownPosition({
          left: buttonRect.left,
          width: buttonRect.width,
        })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [servicesOpen])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-amber-500 rounded-md transform rotate-45"></div>
          <Lightbulb className="w-5 h-5 text-white relative z-10" />
        </div>
        <span className={`text-white font-medium text-xl ${pathname === '/' ? 'text-amber-400' : ''}`}>UBConcept</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/about-us"
          className={`text-gray-300 hover:text-white transition-colors ${
            pathname === "/about-us" ? "text-amber-600 font-semibold" : ""
          }`}
        >
          About Us
        </Link>

        {/* Services Menu Button */}
        <button
          ref={servicesButtonRef}
          onClick={() => setServicesOpen(!servicesOpen)}
          className={`flex items-center hover:text-white transition-colors focus:outline-none ${
            pathname.startsWith("/services")
              ? "text-amber-600 font-semibold"
              : "text-gray-300"
          }`}
        >
          Services
          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
        </button>

        <Link
          href="/portfolio"
          className={`text-gray-300 hover:text-white transition-colors ${
            pathname === "/portfolio" ? "text-amber-600 font-semibold" : ""
          }`}
        >
          Portfolio
        </Link>
        <Link
          href="/blogs"
          className={`text-gray-300 hover:text-white transition-colors ${
            pathname === "/blogs" ? "text-amber-600 font-semibold" : ""
          }`}
        >
          Blogs
        </Link>

        <Link
          href="/contact-us"
          className={`text-gray-300 hover:text-white transition-colors ${
            pathname === "/contact-us" ? "text-amber-600 font-semibold" : ""
          }`}
        >
          Contact Us
        </Link>
      </div>

      {/* Services Dropdown - Positioned dynamically based on button position */}
      {servicesOpen && (
        <div
          ref={servicesMenuRef}
          className="fixed bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg z-[100] w-72"
          style={{
            top: "76px", // Height of the navbar
            left: `${dropdownPosition.left - 100}px`, // Center the dropdown under the button
          }}
        >
          <div className="py-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={`flex flex-col px-4 py-2 hover:bg-white/5 transition-colors ${
                  pathname === service.href ? "bg-white/10" : ""
                }`}
                onClick={() => setServicesOpen(false)}
              >
                <span className={`font-medium ${pathname === service.href ? 'text-amber-600' : 'text-white'}`}>{service.title}</span>
                <span className="text-gray-400 text-sm mt-1">{service.description}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu className="w-6 h-6" />
      </Button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-full right-0 mt-2 w-64 bg-black/95 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden border border-white/10 md:hidden z-50"
        >
          <div className="p-4">
            <Link
              href="/about-us"
              className={`block py-2 px-4 hover:text-white hover:bg-white/5 rounded-md transition-colors ${
                pathname === "/about-us"
                  ? "text-amber-600 bg-white/10 font-semibold"
                  : "text-gray-300"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <div className={`py-2 px-4 hover:text-white hover:bg-white/5 rounded-md transition-colors cursor-pointer group ${
                pathname.startsWith("/services")
                  ? "text-amber-600 bg-white/10 font-semibold"
                  : "text-gray-300"
              }`}>
              <div className="flex items-center justify-between">
                <span>Services</span>
                <ChevronDown className="h-4 w-4 group-hover:hidden" />
                <ChevronRight className="h-4 w-4 hidden group-hover:block" />
              </div>
              <div className="hidden group-hover:block pl-4 mt-2 border-l border-white/10 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className={`block py-1 text-sm hover:text-amber-400 transition-colors ${
                      pathname === service.href
                        ? "text-amber-600 font-semibold"
                        : "text-gray-400"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/portfolio"
              className={`block py-2 px-4 hover:text-white hover:bg-white/5 rounded-md transition-colors ${
                pathname === "/portfolio"
                  ? "text-amber-600 bg-white/10 font-semibold"
                  : "text-gray-300"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/blogs" // Added Blogs link to mobile menu
              className={`block py-2 px-4 hover:text-white hover:bg-white/5 rounded-md transition-colors ${
                pathname === "/blogs"
                  ? "text-amber-600 bg-white/10 font-semibold"
                  : "text-gray-300"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>

            <Link
              href="/contact-us"
              className={`block py-2 px-4 hover:text-white hover:bg-white/5 rounded-md transition-colors ${
                pathname === "/contact-us"
                  ? "text-amber-600 bg-white/10 font-semibold"
                  : "text-gray-300"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  )
}
