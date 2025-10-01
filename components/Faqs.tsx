'use client'
import React from 'react'

interface FaqItem {
  question: string
  answer: string
}

interface FaqsProps {
  title?: string
  description?: string
  faqs: FaqItem[]
}

const Faqs = ({ title = "Frequently asked questions", description, faqs }: FaqsProps) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
            Questions
          </span>
        </h2>

        {description && (
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-12">
            {description}
          </p>
        )}

        <div className="relative max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-start justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-display text-lg font-medium text-white">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg
                      className={`h-6 w-6 transform text-amber-400 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-45' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
