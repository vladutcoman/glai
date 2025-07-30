import AdvancingAI from "@/components/AIPortfolio/AdvancingAI/AdvancingAI";
import PortfolioCards from "@/components/AIPortfolio/PortfolioCards/PortfolioCards";
import PageTitle from "@/components/common/PageTitle/PageTitle";
import ReadyToConnect from "@/components/Home/ReadyToConncet/ReadyToConnect";
import { Separator } from "@/components/ui/separator";

const AiPortfolio = () => {
  return (
    <main className="flex-1 container mx-auto pt-24">
      <div className="px-4 flex flex-col gap-[64px]">
        <PageTitle
          title={
            <h1 className="text-[64px] font-[500] leading-[130%] font-aeonik">
              <span className="font-playfair-display italic">AI Solutions</span>
              <br />
              for enterprise transformation
            </h1>
          }
          description="Our industry-leading AI products and services redefines customer engagement, operational efficiency, and secure AI orchestration. These tools are designed to empower enterprises while maintaining security, compliance, and governance."
        />
        <Separator />
        <AdvancingAI />
        <PortfolioCards />
        <ReadyToConnect />
      </div>
    </main>
  );
};

export default AiPortfolio;