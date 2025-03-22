"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Phone } from "lucide-react"

const leaders = [
  {
    name: "Rajiv Kumar",
    position: "Chief Executive Officer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over 15 years of experience in international education, Rajiv leads Shiksha Yogya with a vision for excellence and innovation.",
    contact: {
      email: "rajiv.kumar@shikshayogya.com",
      phone: "+91 7319367046",
      linkedin: "https://linkedin.com/in/rajiv-kumar",
    },
  },
  {
    name: "Priya Sharma",
    position: "Director of Admissions",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Priya oversees all university admissions processes, ensuring students secure placements in top institutions worldwide.",
    contact: {
      email: "priya.sharma@shikshayogya.com",
      phone: "+91 98765 43211",
      linkedin: "https://linkedin.com/in/priya-sharma",
    },
  },
  {
    name: "Amit Patel",
    position: "Head of Visa Services",
    image: "/placeholder.svg?height=400&width=400",
    bio: "A visa expert with extensive knowledge of immigration policies, Amit ensures high success rates for student visa applications.",
    contact: {
      email: "amit.patel@shikshayogya.com",
      phone: "+91 98765 43212",
      linkedin: "https://linkedin.com/in/amit-patel",
    },
  },
  {
    name: "Meera Singh",
    position: "Career Counseling Head",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Meera specializes in helping students identify the right courses and universities aligned with their career goals.",
    contact: {
      email: "meera.singh@shikshayogya.com",
      phone: "+91 98765 43213",
      linkedin: "https://linkedin.com/in/meera-singh",
    },
  },
]

export default function Leadership() {
  return (
    <section className="py-20 brand-gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-800">Our Leadership Team</h2>
          <p className="text-xl text-brand-700 max-w-3xl mx-auto">
            Meet the experienced professionals who guide Shiksha Yogya towards excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-100 group hover:border-brand-500/50 transition-all duration-300"
            >
              <div className="relative h-64 bg-brand-100">
                <div className="absolute inset-0 flex items-center justify-center text-brand-600 text-6xl font-bold">
                  {leader.name.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-brand-800">{leader.name}</h3>
                <p className="text-brand-600 text-sm mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${leader.contact.email}`}
                    className="text-gray-500 hover:text-brand-600 transition-colors duration-300"
                    aria-label={`Email ${leader.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={`tel:${leader.contact.phone}`}
                    className="text-gray-500 hover:text-brand-600 transition-colors duration-300"
                    aria-label={`Call ${leader.name}`}
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href={leader.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-brand-600 transition-colors duration-300"
                    aria-label={`${leader.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

