import { Button } from "@/components/ui/button";

interface ThesisCardProps {
  title: string;
  description: string;
}

const ThesisCard = ({ title, description }: ThesisCardProps) => {
  return (
    <div className="bg-[#1f598d14] rounded-2xl p-8 flex flex-col items-center justify-center gap-4 text-center">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Button
        variant="default"
        size="lg"
        className="mt-4 py-[16px] px-[28px] rounded-[40px] bg-gray-800 text-white hover:bg-gray-700"
      >
        Discover
      </Button>
    </div>
  );
};

const Mission = () => {
  const theses = [
    {
      title: "AI Visionary Acquisition",
      description: "Global AI selectively acquires cutting-edge AI companies, providing a platform for growth and innovation within the tech industry."
    },
    {
      title: "Innovative Tech Integration",
      description: "By embracing and integrating pioneering AI ventures, Global AI fosters technological advancement and market leadership."
    },
    {
      title: "Strategic AI Partnerships",
      description: "Through purposeful collaborations, Global AI aligns with AI innovators, leveraging shared expertise to shape the future of industries."
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-sm uppercase tracking-wider text-gray-500">
            MISSION THESES
          </h2>
          <div className="text-[56px] font-[500] leading-[120%] font-aeonik max-w-[900px]">
            Our core theses guide our{' '}
            <span className="font-playfair-display italic">investing and collaboration</span>.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {theses.map((thesis, index) => (
            <ThesisCard
              key={index}
              title={thesis.title}
              description={thesis.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
