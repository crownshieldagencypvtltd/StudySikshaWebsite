"use client"
import WorldMap from "@/components/ui/world-map"
import { motion } from "framer-motion"

export default function WorldMapDemo() {
  return (
    <div className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-brand-800">
          Global{" "}
          <span className="text-brand-600">
            {"Connections".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto py-4">
          Shiksha Yogya has helped students from across India connect with prestigious universities around the world.
          Our global network ensures you receive the best education opportunities.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 20.5937,
              lng: 78.9629,
            }, // India
            end: {
              lat: 51.5074,
              lng: -0.1278,
            }, // London
          },
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India
            end: { lat: 40.7128, lng: -74.006 }, // New York
          },
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India
            end: { lat: 43.6532, lng: -79.3832 }, // Toronto
          },
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney
          },
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India
            end: { lat: 52.52, lng: 13.405 }, // Berlin
          },
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India
            end: { lat: 41.9028, lng: 12.4964 }, // Rome
          },
        ]}
        lineColor="#0ea5e9"
      />
    </div>
  )
}

