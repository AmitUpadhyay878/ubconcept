"use client"

import { useState, useEffect, type RefObject } from "react"

export function useMousePosition(containerRef?: RefObject<HTMLElement>) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === "undefined") return

    const updateMousePosition = (ev: MouseEvent) => {
      // If containerRef is provided, check if mouse is inside the container
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect()

        // Check if mouse is inside the container
        if (
          ev.clientX >= rect.left &&
          ev.clientX <= rect.right &&
          ev.clientY >= rect.top &&
          ev.clientY <= rect.bottom
        ) {
          // Mouse is inside container, update position
          setMousePosition({
            x: ev.clientX,
            y: ev.clientY,
          })
        } else {
          // Mouse is outside container, reset position
          setMousePosition({ x: 0, y: 0 })
        }
      } else {
        // No container specified, track mouse position everywhere
        setMousePosition({ x: ev.clientX, y: ev.clientY })
      }
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [containerRef])

  return mousePosition
}
