"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen } from "lucide-react";

const courseSelectionServices = [
  {
    icon: "📚",
    title: "Personalized Guidance",
    description: "Expert advice tailored to your interests, strengths, and career aspirations.",
  },
  {
    icon: "🔍",
    title: "Course Research",
    description: "Comprehensive research on available courses and institutions worldwide.",
  },
  {
    icon: "📈",
    title: "Career Pathway Planning",
    description: "Helping you understand the long-term impact of your course choices.",
  },
  {
    icon: "✅",
    title: "Application Assistance",
    description: "Support in applying for the right courses at the best universities.",
  },
];

export default function CourseSelectionService() {
  return (
    <section id="course-selection" className="py-20 brand-gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-white rounded-full mb-4">
            <BookOpen className="w-6 h-6 text-brand-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-800">Course Selection</h2>
          <p className="text-xl text-brand-700 max-w-3xl mx-auto">
            Helping students choose the right course based on their interests, skills, and future career goals.
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
            <h3 className="text-2xl font-bold mb-6 text-brand-800">Find Your Perfect Course</h3>
            <p className="text-brand-700 mb-8">
              Our experts analyze your academic background, skills, and career aspirations to guide you towards the best 
              courses and universities suited to your goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {courseSelectionServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-5 border border-brand-100"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 text-brand-800">{service.title}</h4>
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
                src="https://images.pexels.com/photos/5905471/pexels-photo-5905471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students exploring courses"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-block px-4 py-2 bg-brand-600 text-white font-semibold rounded-md mb-2">
                  Course Experts
                </div>
                <h3 className="text-2xl font-bold text-white">Shape Your Future</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
