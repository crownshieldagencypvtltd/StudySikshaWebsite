"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-brand-600" />,
    title: "Call Us",
    content: "+91 7319367046",
    link: "tel:+917319367046",
  },
  {
    icon: <Mail className="w-6 h-6 text-brand-600" />,
    title: "Email Us",
    content: "shikshayogya@gmail.com",
    link: "mailto:shikshayogya@gmail.com",
  },
  {
    icon: <MapPin className="w-6 h-6 text-brand-600" />,
    title: "Visit Us",
    content: "Dimond Harbour Road, New Alipore Kolkata 700038",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4622.200440143541!2d88.26666735443844!3d22.35758627538683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02647188f2256b%3A0x3cdf636d6abc71f5!2sDiamond%20Harbour%20Rd%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1742630115259!5m2!1sen!2sin",
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

