"use client"
import Image from "next/image"
import React from "react"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ))

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-6">
        Explore Success Pathways
      </h2>
      <Carousel items={cards} />
    </div>
  )
}

const SuccessPathwayContent = ({ title }: { title: string }) => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {title}
          </span>{" "}
          Our comprehensive program provides personalized guidance, expert mentorship, and practical resources to help you achieve your goals. With our proven methodology, you'll gain the skills and confidence needed to succeed.
        </p>
        <div className="flex justify-center mt-8">
          <Image
            src="/placeholder.svg?height=300&width=500"
            alt="Success pathway illustration"
            height="300"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </>
  )
}

const data = [
  {
    category: "Academic Excellence",
    title: "Scholarship Programs",
    src: "/placeholder.svg?height=500&width=500",
    content: <SuccessPathwayContent title="Scholarship Programs" />,
  },
  {
    category: "Career Development",
    title: "Industry Internships",
    src: "/placeholder.svg?height=500&width=500",
    content: <SuccessPathwayContent title="Industry Internships" />,
  },
  {
    category: "Global Education",
    title: "Study Abroad Opportunities",
    src: "/placeholder.svg?height=500&width=500",
    content: <SuccessPathwayContent title="Study Abroad Opportunities" />,
  },
  {
    category: "Skill Enhancement",
    title: "Professional Certifications",
    src: "/placeholder.svg?height=500&width=500",
    content: <SuccessPathwayContent title="Professional Certifications" />,
  },
  {
    category: "Skill Enhancement",
    title: "Professional Certifications",
    src: "/placeholder.svg?height=500&width=500",
    content: <SuccessPathwayContent title="Professional Certifications" />,
  },
  {
    category: "Entrepreneurship",
    title: "Startup Incubation",
    src: "/placeholder.svg?height=500&width=500",
    content: <SuccessPathwayContent title="Startup Incubation" />,
  },
]
