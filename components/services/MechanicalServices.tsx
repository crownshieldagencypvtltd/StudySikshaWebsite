"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { PenToolIcon as Tool, Check } from "lucide-react"

const mechanicalServices = [
  "Equipment installation and setup",
  "Preventive maintenance programs",
  "Emergency repair services",
  "System troubleshooting and diagnostics",
  "Performance optimization",
  "Equipment upgrades and retrofits",
  "Safety inspections and compliance",
  "Technical consultation and support",
]

export default function MechanicalServices() {
  return (
    <section id="mechanical" className="py-20 bg-navy-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-navy-900 rounded-full mb-4">
            <Tool className="w-6 h-6 text-gold-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mechanical Services</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Expert mechanical technicians providing comprehensive repair and maintenance services for all your equipment
            needs.
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.43_eb6e73e6.jpg-Hh18mtQmI8vt5AvFuc4mBynGIUE0Ha.jpeg"
                alt="Professional mechanic in safety gear"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-block px-4 py-2 bg-gold-500 text-navy-950 font-semibold rounded-md mb-2">
                  Skilled Technicians
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Mechanical Services</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Comprehensive Mechanical Solutions</h3>
            <p className="text-white/70 mb-8">
              Our mechanical services team consists of highly skilled technicians with expertise in various mechanical
              systems and equipment. We provide reliable solutions for industrial, commercial, and residential clients,
              ensuring optimal performance and longevity of your mechanical assets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mechanicalServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1 bg-navy-800 rounded-full p-1">
                    <Check className="w-4 h-4 text-gold-500" />
                  </div>
                  <span className="text-white/80">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

