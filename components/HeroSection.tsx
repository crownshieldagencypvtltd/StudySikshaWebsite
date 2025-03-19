import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  headline: React.ReactNode
  subtext: string
  ctaText: string
  ctaLink: string
  className?: string
}

export default function HeroSection({ headline, subtext, ctaText, ctaLink, className }: HeroSectionProps) {
  return (
    <section className={cn("w-full py-12 md:py-24", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{headline}</h1>
            {subtext && <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">{subtext}</p>}
          </div>
          <div className="space-x-4">
            <Link
              href={ctaLink}
              className="inline-flex h-11 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700 disabled:pointer-events-none disabled:opacity-50"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

