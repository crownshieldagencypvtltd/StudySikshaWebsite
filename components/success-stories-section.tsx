"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Carousel } from "@/components/ui/apple-cards-carousel"
import BackgroundBoxesDemo from "@/components/background-boxes-demo"
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, GraduationCap, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Success stories data
const successStories = [
  {
    id: 1,
    name: "Ananya Sharma",
    emoji: "🎓",
    achievement: "Admitted to Delhi University with 100% Scholarship!",
    description:
      "After months of dedicated preparation and consistent effort, I secured admission to my dream university with a full scholarship. The guidance from my mentors was invaluable throughout this journey.",
    category: "Academic Excellence",
  },
  {
    id: 2,
    name: "Rohan Gupta",
    emoji: "💼",
    achievement: "Placed in a top MNC after completing our internship program!",
    description:
      "The skills I developed during the internship program were exactly what top companies were looking for. This opportunity opened doors I never thought possible for my career.",
    category: "Career Growth",
  },
  {
    id: 3,
    name: "Megha Verma",
    emoji: "🎓",
    achievement: "Secured admission to Canada for higher studies!",
    description:
      "Navigating the international education process was challenging, but with the right guidance and preparation, I'm now pursuing my dreams at a prestigious Canadian institution.",
    category: "International Education",
  },
  {
    id: 4,
    name: "Rajiv Kumar",
    emoji: "🚀",
    achievement: "Started a successful tech startup after completing our entrepreneurship program!",
    description:
      "The entrepreneurship program gave me the knowledge, network, and confidence to launch my own venture. Today, we're a team of 15 and growing rapidly.",
    category: "Entrepreneurship",
  },
  {
    id: 5,
    name: "Priya Patel",
    emoji: "🏆",
    achievement: "Won the National Coding Championship representing our institute!",
    description:
      "The rigorous training and practice sessions prepared me for the intense competition. Bringing home the trophy was a proud moment for me and my mentors.",
    category: "Competitions",
  },
]

// Success story card component
const SuccessStoryCard = ({ story, index }: { story: (typeof successStories)[0]; index: number }) => {
  const icons = {
    "Academic Excellence": <GraduationCap className="h-5 w-5" />,
    "Career Growth": <ArrowRight className="h-5 w-5" />,
    "International Education": <GraduationCap className="h-5 w-5" />,
    Entrepreneurship: <Trophy className="h-5 w-5" />,
    Competitions: <Award className="h-5 w-5" />,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <Badge variant="outline" className="flex gap-1 px-3 py-1 text-sm font-medium">
              {icons[story.category as keyof typeof icons]}
              {story.category}
            </Badge>
            <span className="text-4xl">{story.emoji}</span>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <h3 className="text-xl font-bold mb-2">{story.name}</h3>
          <p className="text-lg font-medium text-primary mb-4">{story.achievement}</p>
          <p className="text-muted-foreground">{story.description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Read Full Story
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function SuccessStoriesSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Custom card list for the apple carousel
  const carouselCards = successStories.map((story) => ({
    category: story.category,
    title: story.name,
    src: `/placeholder.svg?height=800&width=600`,
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {story.emoji} {story.achievement}
          </span>{" "}
          {story.description}
        </p>
      </div>
    ),
  }))

  // Custom testimonials for the animated testimonials component
  const testimonials = successStories.map((story) => ({
    quote: story.description,
    name: story.name,
    designation: story.category,
    src: `/placeholder.svg?height=500&width=500`,
  }))

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-1 text-lg font-medium">Success Stories</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Students Achieve Greatness</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each story represents dedication, perseverance, and the transformative power of education and mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.slice(0, 3).map((story, index) => (
            <SuccessStoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>

      <div className="my-32">
        <BackgroundBoxesDemo />
      </div>

      <div className="container mx-auto px-4 my-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of our most inspiring journeys through our interactive carousel.
          </p>
        </div>

        {mounted && (
          <Carousel
            items={carouselCards.map((card, index) => {
              const Card = require("@/components/ui/apple-cards-carousel").Card
              return <Card key={card.title} card={card} index={index} />
            })}
          />
        )}
      </div>

      <div className="my-32">
        {mounted && (
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">In Their Own Words</h2>
            <AnimatedTestimonialsDemo key="testimonials" />
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStories.slice(3, 5).map((story, index) => (
            <SuccessStoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

