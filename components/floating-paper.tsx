"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export function FloatingPaper({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [papers, setPapers] = useState<Array<{ id: number; x: number[]; y: number[]; rotate: number[] }>>([])

  // Memoize paper generation to reduce unnecessary re-renders
  const generatePapers = useCallback(() => {
    const newPapers = Array.from({ length: count }).map((_, i) => {
      const width = typeof window !== "undefined" ? window.innerWidth : 1200
      const height = typeof window !== "undefined" ? window.innerHeight : 800

      return {
        id: i,
        x: [Math.random() * width, Math.random() * width, Math.random() * width],
        y: [Math.random() * height, Math.random() * height, Math.random() * height],
        rotate: [0, 180, 360],
      }
    })

    setPapers(newPapers)
  }, [count])

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Generate initial papers
    generatePapers()

    // Handle window resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      generatePapers()
    }

    // Throttle resize event for better performance
    let resizeTimer: NodeJS.Timeout
    const throttledResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(handleResize, 100)
    }

    window.addEventListener("resize", throttledResize)
    return () => window.removeEventListener("resize", throttledResize)
  }, [generatePapers])

  return (
    <div className="relative w-full h-full">
      {papers.map((paper) => (
        <motion.div
          key={paper.id}
          className="absolute"
          initial={{ x: paper.x[0], y: paper.y[0] }}
          animate={{
            x: paper.x,
            y: paper.y,
            rotate: paper.rotate,
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            // Use lower CPU/GPU usage animation settings
            type: "tween",
          }}
        >
          <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            <FileText className="w-8 h-8 text-amber-400/50" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
