"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Globe } from "lucide-react"

const studyAbroadServices = [
  {
    icon: "🏛️",
    title: "University Selection",
    description: "Expert guidance on choosing the right university based on your goals and qualifications.",
  },
  {
    icon: "🛂",
    title: "Visa Processing",
    description: "Step-by-step assistance in securing your student visa with necessary documentation.",
  },
  {
    icon: "✈️",
    title: "Travel Support",
    description: "Guidance on travel arrangements, accommodation, and pre-departure preparations.",
  },
  {
    icon: "💼",
    title: "Post-Arrival Assistance",
    description: "Help with settling in, part-time job searches, and local orientation.",
  },
]

export default function StudyAbroad() {
  return (
    <section id="study-abroad" className="py-20 brand-gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-white rounded-full mb-4">
            <Globe className="w-6 h-6 text-brand-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-800">Study Abroad</h2>
          <p className="text-xl text-brand-700 max-w-3xl mx-auto">
            Comprehensive assistance for international education, including university selection, visa processing, and travel support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-800">Your Global Education Partner</h3>
            <p className="text-brand-700 mb-8">
              Our experts provide end-to-end support for studying abroad, ensuring a smooth transition from application to arrival.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {studyAbroadServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-5 border border-brand-100"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 text-brand-800">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.16_de0a15c9.jpg-59Uj8eywsTsgalkMXLuJ5YoQlwr1yD.jpeg"
                alt="Student with global landmarks"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-block px-4 py-2 bg-brand-600 text-white font-semibold rounded-md mb-2">
                  Study Abroad Experts
                </div>
                <h3 className="text-2xl font-bold text-white">Your Future Awaits</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
