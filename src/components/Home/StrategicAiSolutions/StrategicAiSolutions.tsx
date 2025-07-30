import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface SolutionCardProps {
  title: string;
  description: string;
  imagePath: string;
}

const SolutionCard = ({ title, description, imagePath }: SolutionCardProps) => {
  return (
    <div className="flex flex-col items-start gap-6 p-8 bg-gray-100 rounded-2xl">
      <div className="w-full h-[200px] relative">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <Button variant="default" size="lg" className="py-[16px] px-[28px] rounded-[40px] self-center mt-auto">
        Discover
      </Button>
    </div>
  );
};

const StrategicAiSolutions = () => {
  const solutions = [
    {
      title: 'AI Data Readiness',
      description: 'Ensuring your organization\'s data is primed for AI is crucial. Our services focus on preparing and validating data.',
      imagePath: '/home-6.svg'
    },
    {
      title: 'Applicative AI Solutions',
      description: 'Transform operations with GenAI Solutions using an Agentic-AI approach.',
      imagePath: '/home-7.svg'
    },
    {
      title: 'AI Transformation Advisory',
      description: 'Comprehensive consulting to help organizations understand AI\'s potential and implement solutions.',
      imagePath: '/home-8.svg'
    }
  ];

  return (
    <section className="w-full py-24 ">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">STRATEGIC AI SOLUTIONS</h2>
          <div className="text-4xl font-semibold text-gray-900 max-w-[700px]">
            Our portfolio companies deliver comprehensive{' '}
            <span className="italic">AI solutions for enterprise transformation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              imagePath={solution.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicAiSolutions;