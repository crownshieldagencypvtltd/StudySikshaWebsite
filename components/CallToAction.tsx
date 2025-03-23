"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-800">
            Ready to Begin Your Global Education Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact Shiksha Yogya today for a free consultation and discover how our services can help you achieve your
            study abroad dreams.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-md transition-all duration-300"
            >
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

