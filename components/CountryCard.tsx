"use client"

import { GlowingEffect } from "@/components/ui/glowing-effect"
import Image from "next/image"
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
          <Image
            src={flag || "/placeholder.svg"}
            alt={`${name} flag`}
            width={60}
            height={40}
            className="rounded-md object-cover"
          />
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <p className="text-sm text-gray-600 flex-grow">{description}</p>
        <Link
          href={learnMoreLink}
          className="mt-4 inline-flex items-center justify-center rounded-md bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-200 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

