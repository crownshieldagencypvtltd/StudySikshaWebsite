"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, Check } from "lucide-react"

const admissionsFeatures = [
  "University selection based on academic profile",
  "Application preparation and submission",
  "Personal statement and essay guidance",
  "Letter of recommendation assistance",
  "Interview preparation",
  "Admission follow-up",
  "Course and program selection",
  "Application fee waiver guidance",
]

export default function AdmissionsService() {
  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-brand-100 rounded-full mb-4">
            <GraduationCap className="w-6 h-6 text-brand-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-800">University Admissions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guidance on university selection, application process, and securing admissions to top institutions
            worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_2b14d1ae.jpg-vwNAyRUKopMthgqGB1uJnjsJXeyXIF.jpeg"
                alt="Graduate student with diploma"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-block px-4 py-2 bg-brand-600 text-white font-semibold rounded-md mb-2">
                  Premium Admissions
                </div>
                <h3 className="text-2xl font-bold text-white">Expert Guidance</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-800">Comprehensive Admissions Support</h3>
            <p className="text-gray-600 mb-8">
              Our university admissions service provides end-to-end support to help you secure admission to your dream
              university. We analyze your academic profile, identify suitable universities, and guide you through the
              entire application process.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {admissionsFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1 bg-brand-100 rounded-full p-1">
                    <Check className="w-4 h-4 text-brand-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

