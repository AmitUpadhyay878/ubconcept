'use client'

import { useState } from 'react'

interface BlogPostImageProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
}

export default function BlogPostImage({
  src,
  alt,
  className = '',
  fallbackSrc = '/placeholder.svg?height=400&width=600&text=UBConcept+Blog'
}: BlogPostImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  const handleError = () => {
    setImgSrc(fallbackSrc)
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  )
}