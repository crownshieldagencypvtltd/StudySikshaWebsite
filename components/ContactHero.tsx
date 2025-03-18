"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-brand-600" />,
    title: "Call Us",
    content: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: <Mail className="w-6 h-6 text-brand-600" />,
    title: "Email Us",
    content: "info@shikshayogya.com",
    link: "mailto:info@shikshayogya.com",
  },
  {
    icon: <MapPin className="w-6 h-6 text-brand-600" />,
    title: "Visit Us",
    content: "123 Education Street, New Delhi",
    link: "https://goo.gl/maps/123",
  },
]

export default function ContactHero() {
  return (
    <section className="relative py-20 brand-gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-800">Contact Us</h1>
          <p className="text-xl text-brand-700">
            Get in touch with Shiksha Yogya for expert guidance on your study abroad journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {contactInfo.map((item, index) => (
            <a
              key={item.title}
              href={item.link}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-full mb-4 group-hover:bg-brand-200 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brand-800">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

