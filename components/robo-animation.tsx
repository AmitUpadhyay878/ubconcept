"use client"

import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"

export function RoboAnimation() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          // Use less CPU-intensive animation settings
          type: "tween",
        }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              // Use less CPU-intensive animation settings
              type: "tween",
            }}
          />
          <Lightbulb className="w-32 h-32 text-amber-500" />
        </div>
      </motion.div>
    </div>
  )
}
