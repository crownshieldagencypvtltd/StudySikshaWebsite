"use client"

import { GraduationCap, Globe, FileText, Building, Plane, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <GraduationCap className="w-12 h-12 text-brand-600" />, 
    title: "University Admissions",
    description: "Expert guidance on university selection, application process, and securing admissions to top institutions worldwide.",
    link: "/services#admissions",
  },
  {
    icon: <FileText className="w-12 h-12 text-brand-600" />,
    title: "Visa Assistance",
    description: "Comprehensive support for student visa applications, documentation, and interview preparation with high success rates.",
    link: "/services#visa",
  },
  {
    icon: <Globe className="w-12 h-12 text-brand-600" />,
    title: "Study Abroad Programs",
    description: "Tailored study abroad programs in UK, USA, Canada, Australia, Europe and other popular destinations for various courses.",
    link: "/services#programs",
  },
  {
    icon: <Plane className="w-12 h-12 text-brand-600" />,
    title: "Travel & Accommodation",
    description: "Assistance with travel arrangements, accommodation options, and pre-departure orientation for a smooth transition.",
    link: "/services#travel",
  },
  {
    icon: <Building className="w-12 h-12 text-brand-600" />,
    title: "Scholarship Guidance",
    description: "Information and application support for scholarships, grants, and financial aid opportunities to fund your education.",
    link: "/services#scholarship",
  },
  {
    icon: <Users className="w-12 h-12 text-brand-600" />,
    title: "Career Counseling",
    description: "Professional career counseling to help you choose the right course and university aligned with your career goals.",
    link: "/services#counseling",
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
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
