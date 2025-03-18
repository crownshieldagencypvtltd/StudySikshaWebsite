"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react"

export default function ContactInfo() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
        <h3 className="text-xl font-semibold mb-6 text-brand-800">Contact Information</h3>
        <ul className="space-y-4">
          <li className="flex items-center">
            <Phone className="w-5 h-5 text-brand-600 mr-3" />
            <a href="tel:+919876543210" className="text-gray-600 hover:text-brand-600 transition-colors duration-300">
              +91 98765 43210
            </a>
          </li>
          <li className="flex items-center">
            <Mail className="w-5 h-5 text-brand-600 mr-3" />
            <a
              href="mailto:info@shikshayogya.com"
              className="text-gray-600 hover:text-brand-600 transition-colors duration-300"
            >
              info@shikshayogya.com
            </a>
          </li>
          <li className="flex items-start">
            <MapPin className="w-5 h-5 text-brand-600 mr-3 mt-1" />
            <span className="text-gray-600">
              Shiksha Yogya Pvt. Ltd., 123 Education Street, New Delhi, India 110001
            </span>
          </li>
          <li className="flex items-center">
            <Clock className="w-5 h-5 text-brand-600 mr-3" />
            <span className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</span>
          </li>
          <li className="flex items-center">
            <Globe className="w-5 h-5 text-brand-600 mr-3" />
            <a
              href="https://www.shikshayogya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brand-600 transition-colors duration-300"
            >
              www.shikshayogya.com
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-brand-800">Our Branches</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-brand-700">New Delhi (Head Office)</h4>
            <p className="text-gray-600">123 Education Street, New Delhi, India 110001</p>
          </div>
          <div>
            <h4 className="font-medium text-brand-700">Mumbai</h4>
            <p className="text-gray-600">456 Knowledge Avenue, Mumbai, India 400001</p>
          </div>
          <div>
            <h4 className="font-medium text-brand-700">Bangalore</h4>
            <p className="text-gray-600">789 Education Park, Bangalore, India 560001</p>
          </div>
          <div>
            <h4 className="font-medium text-brand-700">Chennai</h4>
            <p className="text-gray-600">321 Learning Road, Chennai, India 600001</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

