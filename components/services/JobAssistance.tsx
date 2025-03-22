"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BriefcaseIcon as Career, Check } from "lucide-react"

const jobAssistanceServices = [
  "Resume building and optimization",
  "Mock interviews with industry experts",
  "Job placement assistance",
  "Internship opportunities",
  "Career counseling and mentorship",
  "Networking with top recruiters",
  "Skill development workshops",
  "LinkedIn profile enhancement",
]

export default function JobAssistance() {
  return (
    <section id="job-assistance" className="py-20 brand-gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-navy-900 rounded-full mb-4">
            <Career className="w-6 h-6 text-gold-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Internship & Job Assistance</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Placement support with internship and job opportunities, enhancing students' employability and career growth.
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
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Career growth opportunities"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-block px-4 py-2 bg-gold-500 text-navy-950 font-semibold rounded-md mb-2 text-white">
                  Career Support
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Career Assistance</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-black">Comprehensive Career Solutions</h3>
            <p className="text-black mb-8">
              Our job assistance program is designed to equip students with the necessary skills and connections to kickstart
              their careers. From resume building to job placements, we provide a holistic approach to career development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {jobAssistanceServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1 bg-navy-800 rounded-full p-1">
                    <Check className="w-4 h-4 text-gold-500" />
                  </div>
                  <span className="text-black">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
