"use client"

import { GlowingEffect } from "@/components/ui/glowing-effect"
import Link from "next/link"

interface CountryCardProps {
  name: string
  flag: string
  description: string
  learnMoreLink: string
}

export default function CountryCard({ name, flag, description, learnMoreLink }: CountryCardProps) {
  return (
    <div className="relative h-full rounded-2xl border p-2">
      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
      <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
        <div className="flex items-center gap-3 mb-3">
          {/* Using regular <img> for faster rendering */}
          <img
            src={flag || "/placeholder.svg"}
            alt={`${name} flag`}
            width={40}
            height={30}
            className="rounded-md object-cover w-10 h-6"
          />
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <p className="text-sm text-gray-600 flex-grow">{description}</p>
      </div>
    </div>
  )
}
