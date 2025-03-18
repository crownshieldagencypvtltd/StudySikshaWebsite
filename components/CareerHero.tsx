"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CareerHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-navy-950/80 z-10" />
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.43_eb6e73e6.jpg-Hh18mtQmI8vt5AvFuc4mBynGIUE0Ha.jpeg"
          alt="Crown Shield Agency Careers"
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-white/80 mb-8">
            Build your career with Crown Shield Agency and be part of a team dedicated to excellence in manpower
            solutions.
          </p>
          <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-medium">
            <Link href="#openings">View Current Openings</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

