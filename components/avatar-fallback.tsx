"use client"

import { useMemo } from "react"

interface AvatarFallbackProps {
  name: string
  className?: string
}

export function AvatarFallback({ name, className = "" }: AvatarFallbackProps) {
  const initials = useMemo(() => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }, [name])

  // Generate a consistent color based on the name
  const backgroundColor = useMemo(() => {
    let hash = 0
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }

    const hue = hash % 360
    return `hsl(${hue}, 70%, 60%)`
  }, [name])

  return (
    <div className={`flex items-center justify-center font-medium text-white ${className}`} style={{ backgroundColor }}>
      {initials}
    </div>
  )
}
