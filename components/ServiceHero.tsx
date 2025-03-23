"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ServiceHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-brand-gradient opacity-80 z-10" />
      <div className="absolute inset-0">
        <Image
          src="https://i.pinimg.com/736x/2f/54/bb/2f54bbfc53cd40fcc71ad9b191c30ec0.jpg"
          alt="Student with global landmarks"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-xl text-white/80">
            Comprehensive education consultancy services tailored to meet your specific requirements with excellence and
            reliability.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

