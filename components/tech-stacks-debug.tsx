"use client"

import { useEffect } from "react"

export default function TechStacksDebug() {
  useEffect(() => {
    console.log("TechStacks component mounted")
  }, [])

  return (
    <section className="py-20 bg-red-500">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Tech Stack Debug</h2>
        <p className="text-white text-center">
          This is a debug component to check if the tech stack section renders correctly.
        </p>
      </div>
    </section>
  )
}
