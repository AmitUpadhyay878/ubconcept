"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, Sparkles } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import { RoboAnimation } from "@/components/robo-animation"
import { SparklesCore } from "@/components/sparkles"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import non-critical components
const DynamicFloatingPaper = dynamic(() => import("@/components/floating-paper").then(mod => ({ default: mod.FloatingPaper })), { ssr: true })
const DynamicRoboAnimation = dynamic(() => import("@/components/robo-animation").then(mod => ({ default: mod.RoboAnimation })), { ssr: true })

export default function Hero() {
  // Create a ref for the hero section
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={heroRef} className="relative min-h-[calc(100vh-76px)] flex items-center pt-16">
      {/* Sparkles background with mouse interaction - only in hero section */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          containerRef={heroRef} // Pass the hero ref to limit mouse tracking
        />
      </div>

      {/* Floating papers background - reduced count for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        <DynamicFloatingPaper count={4} /> {/* Reduced from 6 to 4 */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 min-h-[60px] md:min-h-[80px] lg:min-h-[100px]" // Add explicit height to reduce CLS
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              Transform Your Idea into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                {" "}
                Product
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Transforming innovative ideas into market-ready products with our comprehensive approach to product
            development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact-us">
              <Button aria-label="Contact Us" size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button aria-label="See Portfolio"  size="lg" variant="outline" className="text-white border-amber-500 hover:bg-amber-500/20">
                <Sparkles className="mr-2 h-5 w-5" />
                See Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Animated robot - dynamically loaded */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <DynamicRoboAnimation />
      </div>
    </div>
  )
}
