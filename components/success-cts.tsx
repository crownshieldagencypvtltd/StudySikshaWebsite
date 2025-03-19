"use client"

import { Button } from "@/components/ui/button"
import VortexDemo from "@/components/vortex-demo"
import { motion } from "framer-motion"

export default function SuccessCallToAction() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <VortexDemo />

          <div className="mt-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Join our community of achievers and embark on your journey to success. We provide the guidance,
                resources, and support you need to reach your full potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="px-8 font-medium">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="px-8 font-medium">
                Schedule a Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

