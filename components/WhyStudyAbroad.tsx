import { CheckCircle } from "lucide-react"

interface Benefit {
  title: string
  description: string
}

interface WhyStudyAbroadProps {
  benefits: Benefit[]
}

export default function WhyStudyAbroad({ benefits }: WhyStudyAbroadProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

