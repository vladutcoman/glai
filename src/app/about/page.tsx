import Opportunity from "@/components/About/Opportunity/Opportunity";
import PageTitle from "@/components/common/PageTitle/PageTitle";
import ReadyToConnect from "@/components/Home/ReadyToConncet/ReadyToConnect";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const About = () => {
  return (
    <main className="flex-1 container mx-auto pt-24 mb-24">
      <div className="px-4 flex flex-col gap-[64px]">
        <PageTitle
          title={
            <h1 className="text-[64px] font-[500] leading-[130%] font-aeonik">
              Elevating <span className="font-playfair-display italic">Potential</span>
              <br />
              Accelerating <span className="font-playfair-display italic">Impact</span>
            </h1>
          }
          description="We handpick and nurture the AI companies of tomorrow. We believe in the power of AI to transform the world, and we're committed to making that potential a reality."
        />
        <div className="relative w-full h-[400px]">
          <Image
            src="/about-1.svg"
            alt="Abstract Liquid Shapes"
            fill
            className="object-contain"
            priority
          />
        </div>
        <Separator />
        <div className="flex flex-col gap-[64px]">
          <h2 className="text-[56px] font-[500] leading-[120%] font-aeonik">
            Global AI focuses on <span className="font-playfair-display italic">scaling acquired companies</span> with precision and care.
          </h2>
          <Separator />
        </div>
        <Opportunity />
        <ReadyToConnect />
      </div>
    </main>
  );
};

export default About;