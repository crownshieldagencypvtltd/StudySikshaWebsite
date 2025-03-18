"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-800">
            Ready to Begin Your Global Education Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact Shiksha Yogya today for a free consultation and discover how our services can help you achieve your
            study abroad dreams.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

