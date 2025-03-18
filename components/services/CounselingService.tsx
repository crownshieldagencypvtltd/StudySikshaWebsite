"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Star } from "lucide-react"

const counselingServices = [
  {
    title: "Career Assessment",
    rating: 5,
    description: "Comprehensive assessment to identify your strengths, interests, and suitable career paths.",
  },
  {
    title: "Course Selection",
    rating: 5,
    description:
      "Expert guidance on selecting the right course aligned with your career goals and academic background.",
  },
  {
    title: "University Selection",
    rating: 5,
    description:
      "Personalized recommendations for universities based on your preferences, budget, and career aspirations.",
  },
  {
    title: "Post-Study Options",
    rating: 4,
    description:
      "Information on post-study work opportunities, further education, and career prospects in different countries.",
  },
]

export default function CounselingService() {
  return (
    <section id="counseling" className="py-20 brand-gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-white rounded-full mb-4">
            <Users className="w-6 h-6 text-brand-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-800">Career Counseling</h2>
          <p className="text-xl text-brand-700 max-w-3xl mx-auto">
            Professional career counseling to help you choose the right course and university aligned with your career
            goals.
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
            <h3 className="text-2xl font-bold mb-6 text-brand-800">Expert Career Guidance</h3>
            <p className="text-brand-700 mb-8">
              Our career counseling service provides personalized guidance to help you make informed decisions about
              your education and career path. Our experienced counselors assess your strengths, interests, and goals to
              recommend suitable courses and universities.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {counselingServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-5 border border-brand-100"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg font-semibold text-brand-800">{service.title}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < service.rating ? "text-brand-500 fill-brand-500" : "text-gray-400"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.16_12882850.jpg-X98ascXl0M0gGloHthYQGGxGdMHgwT.jpeg"
                alt="Graduation ceremony"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-block px-4 py-2 bg-brand-600 text-white font-semibold rounded-md mb-2">
                  Expert Counselors
                </div>
                <h3 className="text-2xl font-bold text-white">Personalized Guidance</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

