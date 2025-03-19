"use client"

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function SuccessHero() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundBeamsWithCollision className="h-[80vh] md:h-[90vh]">
        <div className="container flex flex-col items-center justify-center max-w-5xl mx-auto text-center px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="block">Celebrating</span>{" "}
            <span className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <span className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                Success Stories
              </span>
              <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                Success Stories
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Discover how our students and professionals transformed their dreams into reality through determination,
            hard work, and the right guidance. These stories inspire and pave the way for your success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="px-8 font-medium">
              Explore Stories
            </Button>
            <Button size="lg" variant="outline" className="px-8 font-medium">
              Join Our Community
            </Button>
          </motion.div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  )
}

