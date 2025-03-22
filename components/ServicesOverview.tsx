"use client"

import { GraduationCap, Globe, FileText, Building, Plane, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <Users className="w-12 h-12 text-brand-600" />, 
    title: "Career Counseling",
    description: "Personalized guidance to help students discover their strengths, explore career options, and make informed decisions.",
    link: "/services#counseling",
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-brand-600" />, 
    title: "College Admissions",
    description: "Expert assistance with applications, documentation, and securing admissions in top Indian and international universities.",
    link: "/services#admissions",
  },
  {
    icon: <FileText className="w-12 h-12 text-brand-600" />,
    title: "Course Selection",
    description: "Helping students choose the right course based on their interests, skills, and future career goals.",
    link: "/services#courses",
  },
  {
    icon: <Building className="w-12 h-12 text-brand-600" />,
    title: "Scholarships & Loans",
    description: "Support in identifying and applying for scholarships, along with guidance on securing education loans.",
    link: "/services#scholarships",
  },
  {
    icon: <Globe className="w-12 h-12 text-brand-600" />,
    title: "Study Abroad",
    description: "Comprehensive assistance for international education, including university selection, visa processing, and travel support.",
    link: "/services#study-abroad",
  },
  {
    icon: <Plane className="w-12 h-12 text-brand-600" />,
    title: "Exam Preparation",
    description: "Coaching referrals and personalized study plans for exams like JEE, NEET, IELTS, TOEFL, GRE, GMAT, CAT, and more.",
    link: "/services#exam-prep",
  },
]


export default function ServicesOverview() {
  return (
    <section className="py-20 brand-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-800">Our Premium Services</h2>
          <p className="text-xl text-brand-700 max-w-3xl mx-auto">
            Shiksha Yogya provides comprehensive education consultancy services tailored to meet your specific
            requirements with excellence and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:border-brand-500/50 transition-all duration-300 group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="text-brand-600 hover:text-brand-700 inline-flex items-center font-medium transition-colors duration-300"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/services">Explore All Swinervices</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
