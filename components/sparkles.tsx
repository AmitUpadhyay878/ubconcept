"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { useMousePosition } from "@/lib/hooks/use-mouse-position"
import { useAppStore } from "@/lib/store"

interface SparklesProps {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
  containerRef?: React.RefObject<HTMLElement> // Add containerRef prop
}

export const SparklesCore = ({
  id = "tsparticles",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  className = "h-full w-full",
  particleColor = "#FFFFFF",
  containerRef, // Use containerRef
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useMousePosition(containerRef) // Pass containerRef to useMousePosition
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  // Get the dropdown open state from global store
  const isDropdownOpen = useAppStore((state) => state.isDropdownOpen)

  // Create a ref to avoid recreating particles when dropdown state changes
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    if (typeof window === "undefined") return

    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particles: Particle[] = []
    let animationFrameId: number

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * (maxSize - minSize) + minSize
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
      }

      update() {
        // Skip updates if dropdown is open
        if (isDropdownOpen) return

        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        // Mouse interaction - only if mousePosition is valid (mouse is in container) and dropdown is not open
        if (!isDropdownOpen && mousePosition.x !== 0 && mousePosition.y !== 0) {
          const dx = mousePosition.x - this.x
          const dy = mousePosition.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 100) {
            const angle = Math.atan2(dy, dx)
            this.x -= Math.cos(angle) * 1
            this.y -= Math.sin(angle) * 1
          }
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      // Only initialize particles if they don't exist yet or if dimensions changed
      if (particlesRef.current.length === 0) {
        particlesRef.current = []
        for (let i = 0; i < particleDensity; i++) {
          particlesRef.current.push(new Particle())
        }
      }
    }

    const animate = () => {
      if (!ctx) return

      // Clear canvas even if dropdown is open (to prevent ghosting)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = () => {
      if (typeof window === "undefined") return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      // Clear the current particles on resize and reinitialize
      particlesRef.current = []
      init()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [maxSize, minSize, particleColor, particleDensity, mousePosition.x, mousePosition.y, isDropdownOpen])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{
        background,
        width: dimensions.width,
        height: dimensions.height,
      }}
    />
  )
}
