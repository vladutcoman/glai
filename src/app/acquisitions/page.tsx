import FullPotential from "@/components/Aquisitions/FullPotential/FullPotential";
import Mission from "@/components/Aquisitions/Mission/Misson";
import Process from "@/components/Aquisitions/Process/Process";
import PageTitle from "@/components/common/PageTitle/PageTitle";
import { Separator } from "@/components/ui/separator";

const Acquisitions = () => {
  return (
    <main className="flex-1 container mx-auto pt-24">
      <div className="px-4 flex flex-col gap-[64px]">
        <PageTitle
          title={
            <h1 className="text-[64px] font-[500] leading-[130%] font-aeonik">
              Strategic
              <br />
              <span className="font-playfair-display italic">Enterprise Acquisitions</span>
            </h1>
          }
          description="Global AI acquires and propels forward-thinking AI enterprises, marrying heritage with innovation."
        />
        <Separator />
        <Mission />
        <Process />
        <FullPotential />
      </div>
    </main>
  );
};

export default Acquisitions;