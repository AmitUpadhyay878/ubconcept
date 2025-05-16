"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AvatarFallback } from "./avatar-fallback"

type Testimonial = {
  id: number
  name: string
  position: string
  company: string
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStart Inc.",
    content:
      "UBConcept transformed our rough idea into a market-ready product in record time. Their attention to detail and user-focused approach resulted in a product that exceeded our expectations and delighted our customers.",
    image: "/placeholder.svg?height=100&width=100&text=SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Director",
    company: "InnovateLabs",
    content:
      "Working with UBConcept was a game-changer for our business. Their team's technical expertise and creative problem-solving helped us overcome complex challenges and deliver a revolutionary product to market.",
    image: "/placeholder.svg?height=100&width=100&text=MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder",
    company: "GreenTech Solutions",
    content:
      "The team at UBConcept brought both technical excellence and strategic thinking to our project. They did not just build what we asked for—they improved upon our vision and delivered a product that truly stands out in the market.",
    image: "/placeholder.svg?height=100&width=100&text=ER",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageError, setImageError] = useState<Record<number, boolean>>({})

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleImageError = (id: number) => {
    setImageError((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Client{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
            Testimonials
          </span>
        </h2>

        <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-12">
          Hear what our clients have to say about working with us
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12">
            <div className="absolute top-8 left-8 text-amber-400 opacity-30">
              <Quote className="w-16 h-16" />
            </div>

            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-gray-300 text-lg md:text-xl italic mb-8">{`"${testimonials[currentIndex].content}"`}</p>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-amber-500">
                    {imageError[testimonials[currentIndex].id] ? (
                      <AvatarFallback name={testimonials[currentIndex].name} className="w-full h-full" />
                    ) : (
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(testimonials[currentIndex].id)}
                      />
                    )}
                  </div>

                  <h4 className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-amber-400">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-amber-500 text-white hover:bg-amber-500/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-amber-500 text-white hover:bg-amber-500/20"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
