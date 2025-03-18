"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const jobs = [
  {
    title: "Security Supervisor",
    location: "Kolkata, West Bengal",
    type: "Full-time",
    experience: "5+ years",
    description: "Looking for an experienced security supervisor to oversee security operations and team management.",
    requirements: [
      "Previous experience in security management",
      "Strong leadership and communication skills",
      "Knowledge of security protocols and procedures",
      "Valid security certification",
    ],
  },
  {
    title: "Senior Electrician",
    location: "Kolkata, West Bengal",
    type: "Full-time",
    experience: "3+ years",
    description: "Seeking a skilled electrician with experience in industrial and commercial electrical systems.",
    requirements: [
      "ITI certification in electrical",
      "Experience with industrial electrical systems",
      "Knowledge of safety regulations",
      "Troubleshooting skills",
    ],
  },
  {
    title: "HR Coordinator",
    location: "Kolkata, West Bengal",
    type: "Full-time",
    experience: "2+ years",
    description: "Seeking an HR professional to handle recruitment and employee relations.",
    requirements: [
      "Bachelor's degree in HR or related field",
      "Experience in recruitment",
      "Strong interpersonal skills",
      "Knowledge of labor laws",
    ],
  },
]

export default function JobOpenings() {
  return (
    <section id="openings" className="py-20 bg-navy-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join our team of professionals and grow your career with Crown Shield Agency.
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-900 rounded-lg p-6 border border-navy-700"
            >
              <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <p className="text-white/70">{job.location}</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary">{job.type}</Badge>
                  <Badge variant="outline">{job.experience}</Badge>
                </div>
              </div>
              <p className="text-white/80 mb-4">{job.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-950">Apply Now</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

