"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services does Shiksha Yogya provide?",
    answer:
      "Shiksha Yogya offers comprehensive education consultancy services including university admissions, visa assistance, study abroad programs, scholarship guidance, career counseling, and pre-departure orientation for students looking to study overseas.",
  },
  {
    question: "Which countries can I study in through Shiksha Yogya?",
    answer:
      "We provide consultancy services for studying in various countries including the UK, USA, Canada, Australia, New Zealand, Germany, France, Italy, Ireland, Singapore, and many more destinations across Europe and Asia.",
  },
  {
    question: "How do I start the application process?",
    answer:
      "The first step is to book a free consultation with our education experts. During this session, we'll assess your academic background, career goals, and preferences to recommend suitable universities and courses. Once you decide on your options, we'll guide you through the entire application process.",
  },
  {
    question: "Do you provide scholarship assistance?",
    answer:
      "Yes, we provide comprehensive scholarship guidance. Our experts help you identify scholarship opportunities based on your profile, assist with application preparation, and guide you through the scholarship interview process to maximize your chances of securing financial aid.",
  },
  {
    question: "How long does the visa process take?",
    answer:
      "Visa processing times vary by country and individual circumstances. Generally, student visas can take anywhere from 2 weeks to 3 months. We recommend starting the visa application process at least 3-4 months before your intended departure to allow for any unforeseen delays.",
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 brand-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-800">Frequently Asked Questions</h2>
          <p className="text-xl text-brand-700 max-w-3xl mx-auto">
            Find answers to common questions about our services and the study abroad process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-all duration-300 ${
                  activeIndex === index ? "bg-white border-brand-500" : "bg-white/80 hover:bg-white border-gray-200"
                } border`}
              >
                <span className="font-semibold text-lg text-brand-800">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-600 transition-transform duration-300 ${activeIndex === index ? "transform rotate-180" : ""}`}
                />
              </button>
              {activeIndex === index && (
                <div className="overflow-hidden">
                  <div className="p-6 bg-white/50 rounded-b-lg border border-t-0 border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
