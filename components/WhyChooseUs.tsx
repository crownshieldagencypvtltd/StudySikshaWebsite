"use client"

import { motion } from "framer-motion"
import { Check, Award, Clock, Globe, Users, BookOpen } from "lucide-react"

const reasons = [
  {
    icon: <Check className="w-6 h-6 text-brand-600" />,
    title: "Expert Counselors",
    description:
      "Our counselors are certified education experts with extensive knowledge of international education systems and admission processes.",
  },
  {
    icon: <Award className="w-6 h-6 text-brand-600" />,
    title: "High Success Rate",
    description:
      "We maintain a high success rate for university admissions and visa approvals through our meticulous application process.",
  },
  {
    icon: <Clock className="w-6 h-6 text-brand-600" />,
    title: "Timely Assistance",
    description: "Our services are available round the clock to address your queries and concerns whenever they arise.",
  },
  {
    icon: <Globe className="w-6 h-6 text-brand-600" />,
    title: "Global Network",
    description:
      "We have partnerships with over 500 universities worldwide, giving you access to a wide range of options.",
  },
  {
    icon: <Users className="w-6 h-6 text-brand-600" />,
    title: "Personalized Approach",
    description:
      "We provide customized guidance based on your academic background, career goals, and personal preferences.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-brand-600" />,
    title: "Comprehensive Support",
    description: "From university selection to post-arrival assistance, we support you at every step of your journey.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-800">Why Choose Shiksha Yogya</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We pride ourselves on delivering exceptional education consultancy services that exceed expectations and
            build lasting relationships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-brand-500/30 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-brand-100 rounded-full p-2">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-800">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

