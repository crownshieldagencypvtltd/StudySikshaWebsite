"use client"
import Image from "next/image"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-brand-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">{item.badge}</h2>

            <p className="text-xl mb-4 font-bold">{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}

const dummyContent = [
  {
    title: "Study Abroad Process Guide",
    description: (
      <>
        <p>
          The journey to studying abroad begins with understanding the application process. At Shiksha Yogya, we guide
          you through each step to ensure a smooth transition to your dream university.
        </p>
        <p>
          First, we help you identify suitable universities and programs based on your academic background, career
          goals, and budget. Our counselors provide personalized recommendations tailored to your specific needs.
        </p>
        <p>
          Next, we assist with application preparation, including statement of purpose, letters of recommendation, and
          resume. Our experts review your documents to ensure they meet the standards of international universities.
        </p>
      </>
    ),
    badge: "Process",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_2b14d1ae.jpg-vwNAyRUKopMthgqGB1uJnjsJXeyXIF.jpeg",
  },
  {
    title: "Visa Application Support",
    description: (
      <>
        <p>
          Securing a student visa is a critical step in your study abroad journey. Our visa experts provide
          comprehensive support to maximize your chances of visa approval.
        </p>
        <p>
          We guide you through document preparation, financial requirements, and interview preparation. Our team stays
          updated with the latest visa regulations to provide accurate guidance.
        </p>
      </>
    ),
    badge: "Visa",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.16_de0a15c9.jpg-59Uj8eywsTsgalkMXLuJ5YoQlwr1yD.jpeg",
  },
  {
    title: "Pre-Departure Orientation",
    description: (
      <>
        <p>
          Before you leave for your study destination, we conduct thorough pre-departure orientation sessions to prepare
          you for life abroad.
        </p>
        <p>
          These sessions cover important topics such as cultural adaptation, accommodation options, banking,
          transportation, health insurance, and safety tips. We ensure you're well-prepared for your international
          education experience.
        </p>
      </>
    ),
    badge: "Preparation",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_a9007c31.jpg-UVu45iVwPh1LoIWzYZupp2ofgLHHYm.jpeg",
  },
]

