"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Zap } from "lucide-react"

const electricalServices = [
  {
    icon: "🔌",
    title: "Installation",
    description: "Professional installation of electrical systems, wiring, and fixtures.",
  },
  {
    icon: "🔧",
    title: "Maintenance",
    description: "Regular maintenance to ensure optimal performance and safety.",
  },
  {
    icon: "🚨",
    title: "Emergency Repairs",
    description: "24/7 emergency electrical repair services for critical situations.",
  },
  {
    icon: "🔍",
    title: "Inspections",
    description: "Comprehensive electrical inspections and safety audits.",
  },
]

export default function ElectricalServices() {
  return (
    <section id="electrical" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-navy-800 rounded-full mb-4">
            <Zap className="w-6 h-6 text-gold-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Electrical Services</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Skilled electrical professionals for installations, repairs, and maintenance with a focus on safety and
            reliability.
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
            <h3 className="text-2xl font-bold mb-6 text-white">Expert Electrical Solutions</h3>
            <p className="text-white/70 mb-8">
              Our team of certified electricians provides comprehensive electrical services for residential, commercial,
              and industrial clients. We prioritize safety, quality workmanship, and customer satisfaction in every
              project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {electricalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-navy-800 rounded-lg p-5 border border-navy-700"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-white/70 text-sm">{service.description}</p>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.43_242e225e.jpg-OPdjVYNMgefSdEu5gXuLUEJX2QgmAb.jpeg"
                alt="Professional electrician working on electrical panel"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-block px-4 py-2 bg-gold-500 text-navy-950 font-semibold rounded-md mb-2">
                  Expert Electricians
                </div>
                <h3 className="text-2xl font-bold text-white">Safe & Reliable Service</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

