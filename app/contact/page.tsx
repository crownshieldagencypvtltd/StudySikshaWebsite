"use client"
import ContactHero from "@/components/ContactHero"
import ContactForm from "@/components/ContactForm"
import ContactInfo from "@/components/ContactInfo"
import WorldMapDemo from "@/components/world-map-demo"

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <ContactForm />
        <div>
          <ContactInfo />
        </div>
      </div>
      {/* <WorldMapDemo /> */}
    </>
  )
}

