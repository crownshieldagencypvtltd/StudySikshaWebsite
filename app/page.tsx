"use client";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import dynamic from "next/dynamic";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import CallToAction from "@/components/CallToAction";
import FaqSection from "@/components/FaqSection";
import WorldMapDemo from "@/components/world-map-demo";

const WobbleCardDemo = dynamic(() => import("@/components/wobble-card-demo"), { ssr: true });
const StudyDestinations = dynamic(() => import("@/components/StudyDestinations"), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), { ssr: true });

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
  );
}
