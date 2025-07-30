import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProcessItemProps {
  text: string;
}

const ProcessItem = ({ text }: ProcessItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/aquisition-1.svg"
        alt="Process bullet"
        width={24}
        height={24}
        className="flex-shrink-0"
      />
      <span className="text-gray-300">{text}</span>
    </div>
  );
};

const Process = () => {
  const processSteps = [
    "Global AI Scouts Pioneering AI Companies",
    "Due Diligence and Vision Alignment",
    "Structured Acquisition",
    "Integration and Empowerment"
  ];

  return (
    <section className="w-full relative overflow-hidden rounded-[32px]">
      {/* Top Part - Similar to ReadyToConnect */}
      <div className="relative w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/home-9.svg"
            alt="AI Network Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative px-12 py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-col gap-4 text-white max-w-[600px]">
              <h2 className="text-4xl font-semibold">
                Ready To <span className="italic font-playfair-display">Connect</span>?
              </h2>
              <p className="text-gray-300 text-lg">
                Whether you&apos;re an investor, potential acquisition target, or customer, we&apos;d love to hear from you.
              </p>
            </div>

            <Link href="/contact">
              <Button
                variant="default"
                size="lg"
                className="py-[16px] px-[28px] rounded-[40px] bg-white text-black hover:bg-gray-100"
              >
                CONTACT US →
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Part - Process List */}
      <div className="bg-[#1a1a1ae3] px-12 py-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl text-white">
              Global AI&apos;s <span className="italic font-playfair-display">Precision-Driven</span>
              <br />
              Acquisition Process
            </h2>
          </div>

          <div className="flex flex-col gap-6 mt-8">
            {processSteps.map((step, index) => (
              <ProcessItem key={index} text={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;