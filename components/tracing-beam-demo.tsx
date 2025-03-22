"use client";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-brand-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

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
  );
}

const dummyContent = [
  {
    title: "Career Counseling",
    description: (
      <>
        <p>
          Personalized guidance to help students discover their strengths,
          explore career options, and make informed decisions.
        </p>
      </>
    ),
    badge: "Counseling",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_2b14d1ae.jpg-vwNAyRUKopMthgqGB1uJnjsJXeyXIF.jpeg",
  },
  {
    title: "College Admissions",
    description: (
      <>
        <p>
          Expert assistance with applications, documentation, and securing
          admissions in top Indian and international universities.
        </p>
        <p></p>
      </>
    ),
    badge: "Admissions",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.16_de0a15c9.jpg-59Uj8eywsTsgalkMXLuJ5YoQlwr1yD.jpeg",
  },
  {
    title: "Course Selection",
    description: (
      <>
        <p>
          Helping students choose the right course based on their interests,
          skills, and future career goals.
        </p>
        <p>
          These sessions cover important topics such as cultural adaptation,
          accommodation options, banking, transportation, health insurance, and
          safety tips. We ensure you're well-prepared for your international
          education experience.
        </p>
      </>
    ),
    badge: "Selection",
    image:
      "https://images.pexels.com/photos/4778662/pexels-photo-4778662.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: " Scholarships & Loans",
    description: (
      <>
        <p>
          Support in identifying and applying for scholarships, along with
          guidance on securing education loans.
        </p>
        <p>
          These sessions cover important topics such as cultural adaptation,
          accommodation options, banking, transportation, health insurance, and
          safety tips. We ensure you're well-prepared for your international
          education experience.
        </p>
      </>
    ),
    badge: "Assistance",
    image:
      "https://images.pexels.com/photos/5905489/pexels-photo-5905489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Study Abroad",
    description: (
      <>
        <p>
          Comprehensive assistance for international education, including
          university selection, visa processing, and travel support.
        </p>
        <p>
          These sessions cover important topics such as cultural adaptation,
          accommodation options, banking, transportation, health insurance, and
          safety tips. We ensure you're well-prepared for your international
          education experience.
        </p>
      </>
    ),
    badge: "Study Abroad",
    image:
      "https://images.pexels.com/photos/7092351/pexels-photo-7092351.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Exam Preparation",
    description: (
      <>
        <p>
          Coaching referrals and personalized study plans for exams like JEE,
          NEET, IELTS, TOEFL, GRE, GMAT, CAT, and more.
        </p>
      </>
    ),
    badge: "Preparation",
    image:
      "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Internship & Job Assistance",
    description: (
      <>
        <p>
          Placement support with internship and job opportunities, enhancing
          students' employability and career growth.
        </p>
      </>
    ),
    badge: "Internships",
    image:
      "https://images.pexels.com/photos/8553947/pexels-photo-8553947.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
