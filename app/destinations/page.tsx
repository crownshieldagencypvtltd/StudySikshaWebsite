import HeroSection from "@/components/HeroSection"
import CountryCard from "@/components/CountryCard"
import WhyStudyAbroad from "@/components/WhyStudyAbroad"
import ProcessTimeline from "@/components/ProcessTimeline"
import SuccessStory from "@/components/SuccessStory"
import CTASection from "@/components/CTASection"
import { Spotlight } from "@/components/ui/spotlight-new"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

export default function DestinationsPage() {
  const countries = [
    {
      name: "USA",
      flag: "/placeholder.svg?height=40&width=60",
      description:
        "Home to world-renowned universities like Harvard, MIT, and Stanford with diverse programs and research opportunities.",
      learnMoreLink: "/destinations/usa",
    },
    {
      name: "Canada",
      flag: "/placeholder.svg?height=40&width=60",
      description:
        "Known for quality education, affordable tuition, and post-graduation work permits with a welcoming environment for international students.",
      learnMoreLink: "/destinations/canada",
    },
    {
      name: "UK",
      flag: "/placeholder.svg?height=40&width=60",
      description:
        "Prestigious institutions like Oxford and Cambridge offering shorter duration courses and rich cultural experiences.",
      learnMoreLink: "/destinations/uk",
    },
    {
      name: "Australia",
      flag: "/placeholder.svg?height=40&width=60",
      description:
        "High-quality education with a relaxed lifestyle, excellent research facilities, and post-study work opportunities.",
      learnMoreLink: "/destinations/australia",
    },
    {
      name: "Germany",
      flag: "/placeholder.svg?height=40&width=60",
      description:
        "Tuition-free public universities with strong engineering and technical programs in Europe's strongest economy.",
      learnMoreLink: "/destinations/germany",
    },
    {
      name: "France",
      flag: "/placeholder.svg?height=40&width=60",
      description:
        "Excellent education system with affordable tuition fees and a rich cultural heritage in the heart of Europe.",
      learnMoreLink: "/destinations/france",
    },
    {
      name: "Singapore",
      flag: "/placeholder.svg?height=40&width=60",
      description:
        "Asia's education hub with world-class universities, multicultural environment, and excellent career opportunities.",
      learnMoreLink: "/destinations/singapore",
    },
  ]

  const benefits = [
    {
      title: "World-Class Education",
      description: "Access to top-ranked universities and cutting-edge research facilities.",
    },
    {
      title: "Better Career Opportunities",
      description: "Global recognition of degrees and enhanced employability worldwide.",
    },
    {
      title: "Scholarships & Financial Aid",
      description: "Various funding options to make your education affordable.",
    },
    {
      title: "Cultural Exposure",
      description: "Experience diverse cultures and develop a global perspective.",
    },
    {
      title: "Internship & Job Support",
      description: "Work opportunities during and after your studies.",
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Free Consultation",
      description: "Meet with our experts to discuss your goals and preferences.",
    },
    {
      step: 2,
      title: "Course & University Selection",
      description: "Get personalized recommendations based on your profile and aspirations.",
    },
    {
      step: 3,
      title: "Application Assistance",
      description: "Complete guidance for university applications and documentation.",
    },
    {
      step: 4,
      title: "Scholarship & Visa Support",
      description: "Help with scholarship applications and visa processing.",
    },
    {
      step: 5,
      title: "Pre-Departure Guidance",
      description: "Comprehensive orientation to prepare you for life abroad.",
    },
  ]

  const successStories = [
    {
      name: "Priya Sharma",
      photo: "/placeholder.svg?height=200&width=200",
      achievement: "Secured full scholarship at MIT for Computer Science",
      testimonial:
        "Shiksha Yogya's guidance was instrumental in helping me secure a full scholarship at MIT. Their personalized approach and attention to detail made all the difference.",
    },
    {
      name: "Rahul Verma",
      photo: "/placeholder.svg?height=200&width=200",
      achievement: "Admitted to Oxford University for MBA",
      testimonial:
        "The team at Shiksha Yogya helped me navigate the complex application process for Oxford. Their expertise and support were invaluable.",
    },
    {
      name: "Ananya Patel",
      photo: "/placeholder.svg?height=200&width=200",
      achievement: "Received multiple offers from top Canadian universities",
      testimonial:
        "Thanks to Shiksha Yogya, I received offers from multiple top universities in Canada. Their comprehensive approach to applications and visa support made my dream come true.",
    },
  ]

  const words = [
    { text: "Explore" },
    { text: "Top" },
    { text: "Study" },
    { text: "Destinations" },
    { text: "Worldwide", className: "text-purple-500 dark:text-purple-400" },
  ]

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(90deg, rgba(205,255,218,1) 0%, rgba(176,219,235,1) 50%, rgba(148,185,255,1) 100%)",
      }}
    >
      {/* Hero Section with Spotlight Effect */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Spotlight
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(260, 100%, 85%, .08) 0, hsla(260, 100%, 55%, .02) 50%, hsla(260, 100%, 45%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(260, 100%, 85%, .06) 0, hsla(260, 100%, 55%, .02) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(260, 100%, 85%, .04) 0, hsla(260, 100%, 45%, .02) 80%, transparent 100%)"
          />
        </div>
        <HeroSection
          headline={
            <div className="flex flex-col items-center justify-center">
              <TypewriterEffectSmooth words={words} />
              <p className="mt-4 text-xl md:text-2xl text-center text-gray-700 -tracking-normal">
                Find the best universities, courses, and scholarships for your dream study destination.
              </p>
            </div>
          }
          subtext=""
          ctaText="Get Free Consultation"
          ctaLink="/consultation"
          className="relative z-10 py-20"
        />
      </div>

      {/* Popular Study Destinations */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Study Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <CountryCard
              key={index}
              name={country.name}
              flag={country.flag}
              description={country.description}
              learnMoreLink={country.learnMoreLink}
            />
          ))}
        </div>
      </section>

      {/* Why Study Abroad */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose to Study Abroad?</h2>
          <WhyStudyAbroad benefits={benefits} />
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your Study Abroad Journey with Us</h2>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Students' Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <SuccessStory
                key={index}
                name={story.name}
                photo={story.photo}
                achievement={story.achievement}
                testimonial={story.testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        heading="Start Your Study Abroad Journey Today!"
        subtext="Book a free consultation with our experts and take the first step toward your global education."
        ctaText="Book a Free Consultation"
        ctaLink="/consultation"
      />
    </div>
  )
}

