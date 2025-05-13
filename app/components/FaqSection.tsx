'use client'

import { useState, useRef, useEffect } from 'react'

type FAQ = {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'What is Rustic AI – AI Design Studio?',
    answer:
      'Rustic AI – AI Design Studio is a powerful AI-driven design platform that helps you create stunning visuals effortlessly. Whether you’re designing social media posts, marketing materials, or product visuals, our AI tools assist with background removal, image enhancement, template-based designs, and more.',
  },
  {
    question: 'How does Rustic AI help with social media designs?',
    answer:
      'Rustic AI provides templates, auto-formatting, and intelligent suggestions to quickly create engaging social media content tailored to your brand.',
  },
  {
    question: 'Can I upscale and enhance images using Rustic AI?',
    answer:
      'Yes, Rustic AI includes image upscaling and enhancement tools that improve clarity, resolution, and visual appeal with one click.',
  },
  {
    question: 'Is Rustic AI suitable for e-commerce businesses?',
    answer:
      'Absolutely. Rustic AI is perfect for creating product visuals, banners, and promotional graphics that boost your e-commerce presence.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-[#f6f0fb] to-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Frequently Asked Questions
        </h2>
        <p className="text-center mt-4 text-xl text-gray-700">Everything You Need to Know</p>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`transition-all duration-300 rounded-xl border shadow-md hover:shadow-lg transform ${
                  isOpen ? 'border-blue-400 bg-blue-50 scale-[1.01]' : 'border-gray-200 bg-white'
                } hover:border-blue-300 hover:scale-[1.01]`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                >
                  <span
                    className={`text-lg font-semibold ${
                      isOpen ? 'text-blue-600' : 'text-gray-900'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-500' : 'text-gray-500'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AccordionContent isOpen={isOpen}>
                  <p className="text-gray-700 text-base leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Smooth height animation
function AccordionContent({
  isOpen,
  children,
}: {
  isOpen: boolean
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? ref.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div
      className="overflow-hidden transition-[max-height] duration-500 ease-in-out px-8"
      style={{ maxHeight: `${height}px` }}
    >
      <div ref={ref} className="pb-6 pt-0">
        {children}
      </div>
    </div>
  )
}
