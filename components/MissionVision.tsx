"use client"

import { motion } from "framer-motion"
import { Target, Eye, Award, Users, BookOpen, Globe } from "lucide-react"

const values = [
  {
    icon: <BookOpen className="w-12 h-12 text-brand-600" />,
    title: "Excellence",
    description: "We strive for excellence in every service we provide to our students.",
  },
  {
    icon: <Users className="w-12 h-12 text-brand-600" />,
    title: "Integrity",
    description: "We conduct our business with the highest standards of honesty and transparency.",
  },
  {
    icon: <Globe className="w-12 h-12 text-brand-600" />,
    title: "Global Perspective",
    description: "We embrace diversity and foster a global mindset in all our endeavors.",
  },
]

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-lg border border-gray-100"
          >
            <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-full mb-6">
              <Target className="w-8 h-8 text-brand-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-brand-800">Our Mission</h2>
            <p className="text-gray-600">
              To empower students to achieve their global education dreams by providing expert guidance, personalized
              support, and comprehensive services that ensure successful academic journeys abroad. We are committed to
              excellence, integrity, and student success in every aspect of our service.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-lg border border-gray-100"
          >
            <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-full mb-6">
              <Eye className="w-8 h-8 text-brand-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-brand-800">Our Vision</h2>
            <p className="text-gray-600">
              To be the most trusted and respected education consultancy in India, known for our commitment to student
              success, ethical practices, and innovative solutions. We aim to create a global community of successful
              professionals who contribute positively to society through quality education.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-full mb-6">
            <Award className="w-8 h-8 text-brand-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-brand-800">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide us in delivering excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg text-center border border-gray-100 hover:border-brand-500/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-brand-800">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

