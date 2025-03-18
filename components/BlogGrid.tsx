"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogs = [
  {
    title: "The Future of Security Services in the Digital Age",
    excerpt: "Explore how technology is transforming the security industry and what it means for businesses.",
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 25, 2024",
    readTime: "5 min read",
    category: "Security",
  },
  {
    title: "Best Practices for Electrical Safety in Commercial Buildings",
    excerpt: "Learn about essential electrical safety measures and maintenance protocols for commercial properties.",
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 20, 2024",
    readTime: "4 min read",
    category: "Electrical",
  },
  {
    title: "The Impact of Professional Manpower Solutions on Business Growth",
    excerpt: "Discover how quality manpower solutions can drive business success and operational efficiency.",
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 15, 2024",
    readTime: "6 min read",
    category: "Business",
  },
  {
    title: "Training and Development in the Security Industry",
    excerpt: "Insights into modern training methods and professional development for security personnel.",
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 10, 2024",
    readTime: "4 min read",
    category: "Training",
  },
  {
    title: "Maintaining Work-Life Balance for Domestic Staff",
    excerpt: "Guidelines for creating healthy work environments and schedules for domestic help professionals.",
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 5, 2024",
    readTime: "3 min read",
    category: "Lifestyle",
  },
  {
    title: "Industry Trends: The Evolution of Manpower Solutions",
    excerpt: "Analysis of current trends and future predictions in the manpower solutions industry.",
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 1, 2024",
    readTime: "5 min read",
    category: "Industry",
  },
]

export default function BlogGrid() {
  return (
    <section className="py-20 bg-navy-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-900 rounded-lg overflow-hidden border border-navy-700 hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className="relative h-48">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold-500 text-navy-950 text-sm font-medium rounded">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold-500 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-white/70 mb-4">{blog.excerpt}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

