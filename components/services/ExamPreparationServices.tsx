"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BookOpen, Check } from "lucide-react"

const examPrepFeatures = [
  "Personalized study plans",
  "Expert coaching referrals",
  "Mock tests & practice papers",
  "Time management strategies",
  "Doubt resolution sessions",
  "One-on-one mentoring",
  "Exam-specific preparation (JEE, NEET, IELTS, etc.)",
  "Last-minute revision techniques",
]

export default function ExamPreparationServices() {
  return (
    <section id="exam-prep" className="py-20 bg-navy-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-navy-900 rounded-full mb-4">
            <BookOpen className="w-6 h-6 text-gold-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exam Preparation Services</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Get expert guidance, personalized study plans, and coaching referrals to ace exams like JEE, NEET, IELTS, TOEFL, GRE, and more.
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
                src="https://images.pexels.com/photos/9572685/pexels-photo-9572685.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Students preparing for exams"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-block px-4 py-2 bg-gold-500 text-white font-semibold rounded-md mb-2">
                  Expert Coaching
                </div>
                <h3 className="text-2xl font-bold text-white">Personalized Study Plans</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-black">Ace Your Exams with Confidence</h3>
            <p className="text-black mb-8">
              Our tailored study plans, expert coaching, and strategic preparation techniques will help you maximize your scores and achieve your academic goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {examPrepFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1 bg-navy-800 rounded-full p-1">
                    <Check className="w-4 h-4 text-gold-500" />
                  </div>
                  <span className="text-black">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
