"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaGlobeAmericas, FaUniversity, FaMapMarkerAlt, FaBook, FaGraduationCap, FaLandmark } from "react-icons/fa"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const destinations = [
  {
    country: "USA",
    icon: <FaGlobeAmericas size={48} />,
    description: "Home to world-renowned universities like Harvard, MIT, and Stanford.",
    features: ["Diverse course options", "Cutting-edge research", "Vibrant campus life"],
  },
  {
    country: "UK",
    icon: <FaUniversity size={48} />,
    description: "Prestigious education system with universities like Oxford and Cambridge.",
    features: ["Rich academic heritage", "Shorter course duration", "Global recognition"],
  },
  {
    country: "Canada",
    icon: <FaMapMarkerAlt size={48} />,
    description: "Known for quality education, safety, and post-study work opportunities.",
    features: ["Affordable tuition", "Work while studying", "Immigration pathways"],
  },
  {
    country: "Australia",
    icon: <FaBook size={48} />,
    description: "High-quality education with a focus on research and innovation.",
    features: ["Excellent quality of life", "Part-time work allowed", "Post-study work visa"],
  },
  {
    country: "Italy",
    icon: <FaLandmark size={48} />,
    description: "Rich cultural heritage combined with excellent academic programs.",
    features: ["Affordable education", "Historic universities", "Art and design excellence"],
  },
  {
    country: "Germany",
    icon: <FaGraduationCap size={48} />,
    description: "Tuition-free education at public universities with strong industry connections.",
    features: ["No tuition fees", "Strong engineering programs", "Work opportunities"],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function StudyDestinations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-800">Top Study Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore top study destinations around the world and find the perfect place to pursue your academic goals.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.country}
              variants={item}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-brand-300 p-6 text-center"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="text-brand-600 mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {destination.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Study in {destination.country}</h3>
              <p className="text-gray-600 mb-4">{destination.description}</p>
              <ul className="space-y-2 mb-6">
                {destination.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center text-gray-700">
                    <svg
                      className="w-4 h-4 mr-2 text-brand-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`/destinations/${destination.country.toLowerCase()}`}
                className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            asChild
            className="bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-md transition-all duration-300"
          >
            <Link href="/study-destinations">View All Destinations</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

