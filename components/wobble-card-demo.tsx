import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";
import { memo } from "react";

const WobbleCardDemo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-brand-700 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Study in the UK with Shiksha Yogya
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Join over 5,000 students who have successfully secured admissions to top UK universities through our expert
            guidance.
          </p>
        </div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.16_de0a15c9.jpg-59Uj8eywsTsgalkMXLuJ5YoQlwr1yD.jpeg"
          width={500}
          height={500}
          alt="UK education"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-brand-600">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Scholarship Opportunities
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Discover scholarships that can fund up to 100% of your education abroad.
        </p>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-brand-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Sign up for our free webinar on studying in Europe
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Learn about admission requirements, visa processes, and scholarship opportunities for top European
            universities.
          </p>
        </div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_a9007c31.jpg-UVu45iVwPh1LoIWzYZupp2ofgLHHYm.jpeg"
          width={500}
          height={500}
          alt="Study in Europe"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
};

export default memo(WobbleCardDemo);
