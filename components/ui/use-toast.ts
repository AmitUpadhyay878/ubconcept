"use client"

// Simplified version of the toast hook
import { useState } from "react"

type ToastProps = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    setToasts((prev) => [...prev, props])

    // In a real implementation, this would handle displaying and removing toasts
    console.log("Toast:", props)

    // For this example, we'll just log the toast
    if (typeof window !== "undefined") {
      alert(`${props.title}: ${props.description}`)
    }
  }

  return { toast, toasts }
}

export { useToast as toast }
