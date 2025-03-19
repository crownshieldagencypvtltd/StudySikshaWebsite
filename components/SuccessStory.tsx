"use client"

import { Lens } from "@/components/ui/lens"
import Image from "next/image"
import { useState } from "react"

interface SuccessStoryProps {
  name: string
  photo: string
  achievement: string
  testimonial: string
}

export default function SuccessStory({ name, photo, achievement, testimonial }: SuccessStoryProps) {
  const [hovering, setHovering] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        <Lens hovering={hovering} setHovering={setHovering}>
          <Image
            src={photo || "/placeholder.svg"}
            alt={name}
            width={200}
            height={200}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        </Lens>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-purple-600 font-medium mb-3">{achievement}</p>
        <p className="text-gray-600 italic">{testimonial}</p>
      </div>
    </div>
  )
}

