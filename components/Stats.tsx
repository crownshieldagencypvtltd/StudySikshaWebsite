"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 5, label: "Years of Experience" },
  { value: 500, label: "Students Placed" },
  { value: 250, label: "Partner Universities" },
  { value: 12, label: "Countries Covered" },
]

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    // Optimize animation with fewer intervals
    const duration = 1500 // ms
    const steps = 20
    const stepTime = duration / steps

    const finalValues = [...stats.map((stat) => stat.value)]
    const increments = finalValues.map((val) => val / steps)

    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        const newCounts = [...prevCounts]
        let allDone = true

        for (let i = 0; i < newCounts.length; i++) {
          if (newCounts[i] < finalValues[i]) {
            newCounts[i] = Math.min(newCounts[i] + increments[i], finalValues[i])
            allDone = false
          }
        }

        if (allDone) {
          clearInterval(interval)
        }

        return newCounts
      })
    }, stepTime)

    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-brand-50 to-brand-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-800 mb-2">
                {Math.round(counts[index]).toLocaleString()}
                {stat.label.includes("Countries") || stat.label.includes("Years") ? "+" : "+"}
              </div>
              <div className="text-brand-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

