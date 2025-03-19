"use client"

import { Check, Award, Clock, Globe, Users, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"

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
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-800">Why Choose Shiksha Yogya</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We pride ourselves on delivering exceptional education consultancy services that exceed expectations and
            build lasting relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-brand-500/30 transition-all duration-300 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              } delay-${index * 100}`}
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-brand-100 rounded-full p-2">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-800">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
