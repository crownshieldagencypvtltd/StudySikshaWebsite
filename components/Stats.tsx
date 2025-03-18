"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 10, label: "Years of Experience" },
  { value: 5000, label: "Students Placed" },
  { value: 500, label: "Partner Universities" },
  { value: 50, label: "Countries Covered" },
]

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts]
          if (newCounts[index] < stat.value) {
            const increment = Math.ceil(stat.value / 50)
            newCounts[index] = Math.min(newCounts[index] + increment, stat.value)
          }
          return newCounts
        })
      }, 30)
    })

    return () => {
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-16 brand-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-800 mb-2">
                {counts[index].toLocaleString()}
                {stat.label === "Countries Covered" ? "+" : "+"}
              </div>
              <div className="text-brand-700">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

