"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"

const testimonials = [
  {
    name: "Priya Sharma",
    position: "Studying at University of Toronto",
    content:
      "Shiksha Yogya made my dream of studying in Canada come true. Their counselors guided me through every step of the application and visa process. I'm now pursuing my Master's degree at the University of Toronto!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Rahul Mehta",
    position: "Studying at University of Melbourne",
    content:
      "I was confused about which country and course to choose. The career counseling at Shiksha Yogya helped me identify my strengths and interests. Their scholarship guidance also helped me secure partial funding for my studies in Australia.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Ananya Patel",
    position: "Studying at Imperial College London",
    content:
      "The visa assistance provided by Shiksha Yogya was exceptional. They prepared me thoroughly for the visa interview and handled all the documentation perfectly. I highly recommend their services to anyone looking to study in the UK.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Arjun Singh",
    position: "Studying at MIT, USA",
    content:
      "Getting into MIT was a dream come true, and Shiksha Yogya played a crucial role in making it happen. Their personalized approach and attention to detail in my application made all the difference. Forever grateful!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  // Pause autoplay when not in view to save resources
  useEffect(() => {
    if (!isInView) {
      setAutoplay(false)
      return
    }

    setAutoplay(true)
  }, [isInView])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-800">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who have successfully achieved their study abroad dreams with Shiksha Yogya.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-gradient-to-r from-brand-50 to-white rounded-lg p-8 border border-gray-100 shadow-sm">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonials[current].rating ? "text-brand-500 fill-brand-500" : "text-gray-400"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg italic mb-6">"{testimonials[current].content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-200 rounded-full mr-4 flex items-center justify-center text-brand-700 font-bold">
                      {testimonials[current].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-800">{testimonials[current].name}</p>
                      <p className="text-gray-500 text-sm">{testimonials[current].position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-brand-700 rounded-full p-2 shadow-lg transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-brand-700 rounded-full p-2 shadow-lg transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-brand-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

