import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Admitted to Delhi University with 100% Scholarship! The program's guidance was instrumental in helping me achieve my academic goals.",
      name: "Ananya Sharma",
      designation: "Delhi University Scholar",
      src: "/placeholder.svg?height=500&width=500",
    },
    {
      quote:
        "Placed in a top MNC after completing the internship program! The skills I gained gave me a competitive edge in the job market.",
      name: "Rohan Gupta",
      designation: "Software Engineer at TechCorp",
      src: "/placeholder.svg?height=500&width=500",
    },
    {
      quote:
        "Secured admission to Canada for higher studies! The mentorship and application support made all the difference in my journey.",
      name: "Megha Verma",
      designation: "International Student, Canada",
      src: "/placeholder.svg?height=500&width=500",
    },
    {
      quote:
        "Received a full-ride scholarship to my dream university! I couldn't have done it without the dedicated support from the team.",
      name: "Arjun Patel",
      designation: "Engineering Student",
      src: "/placeholder.svg?height=500&width=500",
    },
    {
      quote:
        "Successfully transitioned to a new career in tech after completing the certification program. It changed my life!",
      name: "Priya Singh",
      designation: "UX Designer",
      src: "/placeholder.svg?height=500&width=500",
    },
  ]
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
}
