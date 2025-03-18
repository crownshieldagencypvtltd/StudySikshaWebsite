import Hero from "@/components/Hero"
import ServicesOverview from "@/components/ServicesOverview"
import StudyDestinations from "@/components/StudyDestinations"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import Stats from "@/components/Stats"
import CallToAction from "@/components/CallToAction"
import FaqSection from "@/components/FaqSection"
import WobbleCardDemo from "@/components/wobble-card-demo"
import WorldMapDemo from "@/components/world-map-demo"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <StudyDestinations />
      <WhyChooseUs />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-brand-800">Featured Programs</h2>
          <WobbleCardDemo />
        </div>
      </div>
      <Stats />
      <Testimonials />
      <WorldMapDemo />
      <FaqSection />
      <CallToAction />
    </>
  )
}

