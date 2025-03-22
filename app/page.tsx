"use client";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import dynamic from "next/dynamic";
import { Suspense } from "react"

const StudyDestinations = dynamic(
  () => import("@/components/StudyDestinations"),
  { ssr: true }
);
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  ssr: true,
});
const Stats = dynamic(() => import("@/components/Stats"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: true,
});
const WorldMapDemo = dynamic(() => import("@/components/world-map-demo"), {
  ssr: true,
});
const FaqSection = dynamic(() => import("@/components/FaqSection"), {
  ssr: true,
});
const CallToAction = dynamic(() => import("@/components/CallToAction"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Suspense fallback={<div>Loading...</div>}>
      <StudyDestinations />
      <WhyChooseUs />
      <Stats />
      </Suspense>
      <Testimonials />
      <WorldMapDemo />
      <FaqSection />
      <CallToAction />
    </>
  );
}
