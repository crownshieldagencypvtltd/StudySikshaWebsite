import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    country: "USA",
    image: "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb",
    description: "Home to world-renowned universities like Harvard, MIT, and Stanford.",
    features: ["Diverse course options", "Cutting-edge research", "Vibrant campus life"],
  },
  {
    country: "UK",
    image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb",
    description: "Prestigious education system with universities like Oxford and Cambridge.",
    features: ["Rich academic heritage", "Shorter course duration", "Global recognition"],
  },
  {
    country: "Canada",
    image: "https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg?auto=compress&cs=tinysrgb",
    description: "Known for quality education, safety, and post-study work opportunities.",
    features: ["Affordable tuition", "Work while studying", "Immigration pathways"],
  },
  {
    country: "Australia",
    image: "https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb",
    description: "High-quality education with a focus on research and innovation.",
    features: ["Excellent quality of life", "Part-time work allowed", "Post-study work visa"],
  },
  {
    country: "Italy",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_a9007c31.jpg-UVu45iVwPh1LoIWzYZupp2ofgLHHYm.jpeg",
    description: "Rich cultural heritage combined with excellent academic programs.",
    features: ["Affordable education", "Historic universities", "Art and design excellence"],
  },
  {
    country: "Germany",
    image: "https://images.pexels.com/photos/20097688/pexels-photo-20097688/free-photo-of-back-view-of-a-woman-walking-in-a-library.jpeg",
    description: "Tuition-free education at public universities with strong industry connections.",
    features: ["No tuition fees", "Strong engineering programs", "Work opportunities"],
  },
]

export default function StudyDestinations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1, duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-800">Popular Study Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore top study destinations around the world and find the perfect place to pursue your academic goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-105 will-change-transform"
            >
              <div className="relative h-48">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={`Study in ${destination.country}`}
                  fill
                  priority={index === 0} // Load only the first image eagerly
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover"
                  placeholder="empty"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">Study in {destination.country}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <ul className="space-y-2 mb-6">
                  {destination.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 mr-2 text-brand-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/destinations/${destination.country.toLowerCase()}`}
                  className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-md transition-all duration-300"
          >
            <Link href="/destinations">View All Destinations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

