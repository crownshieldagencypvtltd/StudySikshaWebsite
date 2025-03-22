"use client";

import { useState, useEffect, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const heroImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_2b14d1ae.jpg-vwNAyRUKopMthgqGB1uJnjsJXeyXIF.jpeg",
    alt: "Graduate student with diploma",
    title: "Study Abroad",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_a9007c31.jpg-UVu45iVwPh1LoIWzYZupp2ofgLHHYm.jpeg",
    alt: "Student in Italy with Leaning Tower of Pisa",
    title: "Study in Italy",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.16_12882850.jpg-X98ascXl0M0gGloHthYQGGxGdMHgwT.jpeg",
    alt: "Graduation ceremony with caps thrown in air",
    title: "Success Stories",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.16_de0a15c9.jpg-59Uj8eywsTsgalkMXLuJ5YoQlwr1yD.jpeg",
    alt: "Student with global landmarks",
    title: "Global Education",
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-brand-gradient opacity-80 z-10" />
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <Image
              priority={true}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.16_21b245d9.jpg-Wl3OUCBIC0swFiSSd9QWrhkjt7lPHK.jpeg"
              alt="Shiksha Yogya Logo"
              width={120}
              height={120}
              className="mx-auto mb-6"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            The Right Education{" "}
            <span className="text-brand-800">for a Worthy Future </span>
          </h1>

          <p className="text-xl text-white mb-8">
            Providing FREE career counseling, college admissions support, and
            study abroad guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 rounded-md transition-all duration-300"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImage === index ? "bg-brand-600 w-8" : "bg-white/50"
              }`}
              aria-label={`View ${heroImages[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
