"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Home, Star } from "lucide-react"

const domesticStaff = [
  {
    title: "Housekeepers",
    rating: 5,
    description: "Professional housekeeping staff for cleaning, organizing, and maintaining your home.",
  },
  {
    title: "Cooks & Chefs",
    rating: 5,
    description: "Skilled culinary professionals who can prepare a variety of cuisines according to your preferences.",
  },
  {
    title: "Nannies & Caretakers",
    rating: 4,
    description: "Experienced childcare providers and caretakers for elderly or special needs family members.",
  },
  {
    title: "Drivers",
    rating: 5,
    description: "Professional drivers with excellent knowledge of local routes and safety protocols.",
  },
]

export default function DomesticServices() {
  return (
    <section id="domestic" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-navy-800 rounded-full mb-4">
            <Home className="w-6 h-6 text-gold-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Domestic Help Services</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Reliable and trustworthy domestic staff including maids, cooks, and caretakers to maintain your home with
            care.
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
            <h3 className="text-2xl font-bold mb-6 text-white">Trusted Domestic Staff</h3>
            <p className="text-white/70 mb-8">
              Our domestic help services provide thoroughly vetted and trained staff for your home. We understand the
              importance of trust and reliability when it comes to household staff, which is why we maintain rigorous
              standards in our recruitment and training processes.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {domesticStaff.map((staff, index) => (
                <motion.div
                  key={staff.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-navy-800 rounded-lg p-5 border border-navy-700"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg font-semibold">{staff.title}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < staff.rating ? "text-gold-500 fill-gold-500" : "text-gray-400"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">{staff.description}</p>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.44_bae11465.jpg-ab5wpYMB1gkD6zXwwBekREF2Th9cL2.jpeg"
                alt="Professional domestic help staff"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-block px-4 py-2 bg-gold-500 text-navy-950 font-semibold rounded-md mb-2">
                  Reliable Staff
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Domestic Help</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

