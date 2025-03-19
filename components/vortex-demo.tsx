"use client"
import React from "react"
import { Vortex } from "@/components/ui/vortex"
import { Button } from "@/components/ui/button"

export default function VortexDemo() {
  return (
    <div className="w-full mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        baseHue={260}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Transform Your Future Today
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Join thousands of students who have changed their lives through our programs. 
          Your success story begins with a single step.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button className="px-6 py-6 bg-primary hover:bg-primary/90 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Apply Now
          </Button>
          <Button variant="outline" className="px-6 py-6 text-white border-white/20 hover:bg-white/10">
            Schedule a Consultation
          </Button>
        </div>
      </Vortex>
    </div>
  )
}
