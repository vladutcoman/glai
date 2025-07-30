import PageTitle from "@/components/common/PageTitle/PageTitle";
import InvestmentFocus from "@/components/Home/InvestmentFocus/InvestmentFocus";
import ReadyToConnect from "@/components/Home/ReadyToConncet/ReadyToConnect";
import StrategicAiSolutions from "@/components/Home/StrategicAiSolutions/StrategicAiSolutions";
import WhyGlobal from "@/components/Home/WhyGlobal/WhyGlobal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 container mx-auto pt-24 mb-24">
      <div className="px-4 flex flex-col gap-[64px]">
        <PageTitle
          title={
            <h1 className="text-[64px] font-[500] leading-[130%] font-aeonik">
              Strategic{" "}
              <span className="font-playfair-display italic">AI Acquisitions</span>
              <br />
              Driving Shareholder Value
            </h1>
          }
          description="Global AI focuses on acquiring AI companies with innovative solutions and high-growth potential. We enable these businesses to scale, innovate, and thrive within our ecosystem, delivering mutual success and exponential growth."
        />
        <div className="relative w-full aspect-[16/6] rounded-[40px] overflow-hidden">
          <Image
            src="/home-1.svg"
            alt="Global AI Logo"
            fill
            className="object-cover rounded-[40px]"
            priority
          />
        </div>
        <InvestmentFocus />
        <StrategicAiSolutions />
        <WhyGlobal />
        <ReadyToConnect />
      </div>
    </main>
  );
}
