interface Step {
    step: number
    title: string
    description: string
  }
  
  interface ProcessTimelineProps {
    steps: Step[]
  }
  
  export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
    return (
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 transform -translate-x-1/2"></div>
  
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center md:gap-8`}
            >
              {/* Step number circle */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center transform -translate-x-1/2 z-10">
                <span className="text-white font-bold text-sm">{step.step}</span>
              </div>
  
              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-1/2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  