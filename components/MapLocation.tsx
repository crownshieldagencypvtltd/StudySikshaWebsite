"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function MapLocation() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-8"
    >
      <h3 className="text-xl font-semibold mb-4">Our Location</h3>
      <div className="relative rounded-lg overflow-hidden h-[300px] bg-navy-800">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-800">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
          </div>
        )}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14744.846842277644!2d88.32145562219547!3d22.52167326631969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279c91a8d2d49%3A0xc6ee508c74cf031d!2sTaratala%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1645536248000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={isLoaded ? "opacity-100" : "opacity-0"}
        ></iframe>
      </div>
    </motion.div>
  )
}

