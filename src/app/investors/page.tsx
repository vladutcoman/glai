import PageTitle from "@/components/common/PageTitle/PageTitle";
import ReadyToConnect from "@/components/Home/ReadyToConncet/ReadyToConnect";
import Description from "@/components/Investors/Description/Description";
import News from "@/components/Investors/News/News";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Investors = () => {
  return (
    <main className="flex-1 container mx-auto pt-24 mb-24">
      <div className="px-4 flex flex-col gap-[64px]">
        <PageTitle
          title={
            <h1 className="text-[64px] font-[500] leading-[130%] font-aeonik max-w-[700px]">
              <span className="font-playfair-display italic">Smart Investments</span> Meet
              <br />
              World-Changing Technologies
            </h1>
          }
          description="Secure Your Stake in AI's Pioneering Force. Global AI (Ticker: GLAI)"
        />
        <Separator />
        <Description />
        <ReadyToConnect />
        <News />
      </div>
    </main>
  );
};

export default Investors;