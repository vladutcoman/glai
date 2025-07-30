import Image from 'next/image';

interface FeatureListProps {
  features: string[];
}

const FeatureList = ({ features }: FeatureListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-4">
          <Image
            src="/ai-1.svg"
            alt="Feature bullet"
            width={24}
            height={24}
            className="flex-shrink-0"
          />
          <span className="text-gray-600">{feature}</span>
        </div>
      ))}
    </div>
  );
};

interface SolutionCardProps {
  title: string;
  description: string;
  extendedDescription?: string;
  imagePath: string;
  features: string[];
}

const SolutionCard = ({ title, description, extendedDescription, imagePath, features }: SolutionCardProps) => {
  return (
    <div className="bg-[#1f598d14] rounded-2xl p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-[200px] h-[200px] relative flex-shrink-0 mx-auto md:mx-0">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-6 flex-1">
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
          {extendedDescription && (
            <p className="text-gray-600">{extendedDescription}</p>
          )}
          <FeatureList features={features} />
        </div>
      </div>
    </div>
  );
};

const PortfolioCards = () => {
  const solutions = [
    {
      title: 'AI Data Readiness',
      description: 'Ensuring your organization\'s data is primed for AI is crucial for deriving meaningful insights. Our Data Readiness services focus on preparing and validating your data and infrastructure to ensure it\'s accurate, comprehensive, and structured for AI applications.',
      extendedDescription: 'We build advanced data platforms, laying a solid foundation for successful AI model training and deployment. This meticulous preparation enhances the quality of AI outputs, leading to more reliable and impactful results.',
      imagePath: '/home-6.svg',
      features: [
        'Data Strategy',
        'Data Preparation',
        'Implementation',
        'Platform Development & Testing',
        'AI Models Implementation',
        'Business Use Cases Implementation',
        'Scale'
      ]
    },
    {
      title: 'Applicative AI Solutions',
      description: 'Transform your operations with our Applicative GenAI Solutions, designed to tackle complex challenges and automate processes across various industries, using Agentic AI approach. From AI-powered agents enhancing customer service to advanced analytics driving decision-making, our solutions are tailored to meet your specific needs.',
      extendedDescription: 'Our solutions can be implemented on any digital platform as an API interface and/or as an enhancement to the existing search experience. By integrating these applications, organizations can achieve greater efficiency, reduce operational costs, improve customer experience, and stay competitive in a rapidly evolving market.',
      imagePath: '/home-7.svg',
      features: [
        'AI-powered agents enhancing customer service with advanced analytics capabilities, tailored to meet your specific needs',
        'Designed to run as an IAAS over the organization cloud, learning from internal systems and/or documents, optimizes the work of customer support and service centers, significantly improving user\'s digital experience',
        'Powered by any of the language models recognized in the market (multi-LLM)',
        'Advanced back office - call tracking & monitoring, real-time takeover, analytics, build desired conversation scenarios (flow) and more'
      ]
    },
    {
      title: 'AI Transformation Advisory',
      description: 'Navigating the AI landscape requires strategic guidance and expertise. Our AI Transformation Advisory services offer comprehensive consulting to help you understand the potential of AI and data within your organization, and implement the required solutions.',
      extendedDescription: 'By partnering with us, you gain access to industry best practices and customized strategies that align with your business objectives, ensuring a successful AI journey.',
      imagePath: '/home-8.svg',
      features: [
        'Advisory Services for GenAI',
        'Accelerator Workshop for GenAI',
        'GenAI Models Building Workshops',
        'Managed Services for GenAI',
        'Deep Tech Discoveries Focused on GenAI'
      ]
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-8">
        {solutions.map((solution, index) => (
          <SolutionCard
            key={index}
            title={solution.title}
            description={solution.description}
            extendedDescription={solution.extendedDescription}
            imagePath={solution.imagePath}
            features={solution.features}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioCards; 