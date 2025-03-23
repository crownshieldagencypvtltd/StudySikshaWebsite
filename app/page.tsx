"use client"
import Hero from "@/components/Hero"
import ServicesOverview from "@/components/ServicesOverview"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

// Critical components loaded immediately
const StudyDestinations = dynamic(() => import("@/components/StudyDestinations"), {
  loading: () => <div className="min-h-[200px] flex items-center justify-center">Loading destinations...</div>,
})

// Non-critical components with improved loading strategy
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  loading: () => <div className="min-h-[150px] flex items-center justify-center">Loading...</div>,
})

const Stats = dynamic(() => import("@/components/Stats"), {
  loading: () => <div className="min-h-[100px] flex items-center justify-center">Loading stats...</div>,
})

// Components that can be deferred until needed
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false, // Disable SSR for this non-critical component
  loading: () => <div className="min-h-[200px] flex items-center justify-center">Loading testimonials...</div>,
})

const WorldMapDemo = dynamic(() => import("@/components/world-map-demo"), {
  ssr: false, // Maps are typically heavy, load client-side only
  loading: () => <div className="min-h-[300px] flex items-center justify-center">Loading map...</div>,
})

const FaqSection = dynamic(() => import("@/components/FaqSection"), {
  loading: () => <div className="min-h-[150px] flex items-center justify-center">Loading FAQs...</div>,
})

const CallToAction = dynamic(() => import("@/components/CallToAction"), {
  loading: () => <div className="min-h-[100px] flex items-center justify-center">Loading...</div>,
})

export default function Home() {
  const isMobile = useIsMobile()

  return (
    <>
      <Hero />
      <ServicesOverview />

      <Suspense
        fallback={<div className="min-h-[200px] flex items-center justify-center">Loading destinations...</div>}
      >
        <StudyDestinations />
      </Suspense>

      <Suspense fallback={<div className="min-h-[150px] flex items-center justify-center">Loading...</div>}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<div className="min-h-[100px] flex items-center justify-center">Loading stats...</div>}>
        <Stats />
      </Suspense>

      {/* Defer loading of less critical components */}
      {!isMobile ? (
        <Testimonials />
      ) : (
        <Suspense
          fallback={<div className="min-h-[200px] flex items-center justify-center">Loading testimonials...</div>}
        >
          <Testimonials />
        </Suspense>
      )}

      {/* Load map component only when needed */}
      <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center">Loading map...</div>}>
        <WorldMapDemo />
      </Suspense>

      <Suspense fallback={<div className="min-h-[150px] flex items-center justify-center">Loading FAQs...</div>}>
        <FaqSection />
      </Suspense>

      <CallToAction />
    </>
  )
}

