import React from 'react'

interface PageHeadingProps {
  title: string
  description?: string
}

const PageHeading = ({ title, description }: PageHeadingProps) => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-gray-600">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default PageHeading