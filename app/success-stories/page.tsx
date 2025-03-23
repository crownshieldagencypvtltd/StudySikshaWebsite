"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";

import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SuccessStoriesPage() {
  const successStories = [
    {
      quote:
        "Admitted to Delhi University with 100% Scholarship! The program's guidance was instrumental in helping me achieve my academic goals.",
      name: "Ananya Sharma",
      designation: "Delhi University Scholar",
      src: "/placeholder.svg?height=500&width=500",
      emoji: "🎓",
    },
    {
      quote:
        "Placed in a top MNC after completing the internship program! The skills I gained gave me a competitive edge in the job market.",
      name: "Rohan Gupta",
      designation: "Software Engineer at TechCorp",
      src: "/placeholder.svg?height=500&width=500",
      emoji: "🎓",
    },
    {
      quote:
        "Secured admission to Canada for higher studies! The mentorship and application support made all the difference in my journey.",
      name: "Megha Verma",
      designation: "International Student, Canada",
      src: "/placeholder.svg?height=500&width=500",
      emoji: "🎓",
    },
    {
      quote:
        "Received a full-ride scholarship to my dream university! I couldn't have done it without the dedicated support from the team.",
      name: "Arjun Patel",
      designation: "Engineering Student",
      src: "/placeholder.svg?height=500&width=500",
      emoji: "🎓",
    },
    {
      quote:
        "Successfully transitioned to a new career in tech after completing the certification program. It changed my life!",
      name: "Priya Singh",
      designation: "UX Designer",
      src: "/placeholder.svg?height=500&width=500",
      emoji: "🎓",
    },
  ];
  const router = useRouter();
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section with Background Beams */}
      <section className="w-full">
        {/* <BackgroundBeamsWithCollisionDemo>
          <div className="container mx-auto px-4 py-24 text-center relative z-10">
            <Badge className="mb-4 text-lg py-2 px-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Celebrating Our Students&apos; <span className="text-primary">Achievements</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our students are making waves across the globe. From prestigious scholarships to dream job placements, 
              discover how our programs have helped transform their lives.
            </p>
            <Button size="lg" className="rounded-full px-8">
              <Sparkles className="mr-2 h-4 w-4" />
              Join Our Success Stories
            </Button>
          </div>
        </BackgroundBeamsWithCollisionDemo> */}
      </section>

      {/* Featured Success Stories with Animated Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hear From Our Achievers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from real students who transformed their dreams into
              reality with our guidance.
            </p>
          </div>
          <AnimatedTestimonialsDemo />
        </div>
      </section>

      {/* Success Stories Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our growing community of successful students and alumni.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader className="bg-primary/5 pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {story.emoji}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      Success Story
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">"{story.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {story.designation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vortex Section with CTA */}

      {/* Success Pathways Carousel */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Pathways</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the different paths our students have taken to achieve their goals.
            </p>
          </div>
          <AppleCardsCarouselDemo />
        </div>
      </section> */}

      {/* Join Us CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our program today and take the first step towards achieving
            your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-8"
              onClick={() => {
                router.push("services");
              }}
            >
              Explore Programs
            </Button>
            <a
              href="https://wa.me/7319367046"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                Contact an Advisor
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
