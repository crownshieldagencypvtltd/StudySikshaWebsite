import ServiceHero from "@/components/ServiceHero"
import AdmissionsService from "@/components/services/AdmissionsService"
import VisaService from "@/components/services/VisaService"
import ScholarshipService from "@/components/services/ScholarshipService"
import CounselingService from "@/components/services/CounselingService"
import CallToAction from "@/components/CallToAction"
import TracingBeamDemo from "@/components/tracing-beam-demo"

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <AdmissionsService />
      <VisaService />
      <ScholarshipService />
      <CounselingService />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-brand-800">Our Process</h2>
          <TracingBeamDemo />
        </div>
      </div>
      <CallToAction />
    </>
  )
}

