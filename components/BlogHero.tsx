"use client"

import { motion } from "framer-motion"

export default function BlogHero() {
  return (
    <section className="relative py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Industry Insights</h1>
          <p className="text-xl text-white/80">
            Stay updated with the latest trends, news, and expert perspectives in manpower solutions and security
            services.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

