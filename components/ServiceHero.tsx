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
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.16_de0a15c9.jpg-59Uj8eywsTsgalkMXLuJ5YoQlwr1yD.jpeg"
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

