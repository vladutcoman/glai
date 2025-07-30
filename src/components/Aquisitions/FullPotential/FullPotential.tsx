interface PotentialCardProps {
  title: string;
  description: string;
}

const PotentialCard = ({ title, description }: PotentialCardProps) => {
  return (
    <div className="bg-[#1f598d14] rounded-2xl p-8 flex flex-col gap-6">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const FullPotential = () => {
  const cards = [
    {
      title: "Maximize Your AI Aspirations with Global AI's Strategic Empowerment",
      description: "Transform your groundbreaking AI technology into a market leader with Global AI's unique blend of investment, innovation, and industry expertise. Partner with us for a future where your vision is amplified and your company's success is accelerated."
    },
    {
      title: "Elevate Your AI Innovation with Global AI's Collaborative Ecosystem",
      description: "Step into a world where your AI company doesn't just grow, it thrives. Global AI's commitment to tailored acquisitions and deep-rooted partnerships offers a nurturing ground for your technology to lead the AI revolution."
    }
  ];

  return (
    <section className="w-full mt-24">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-sm uppercase tracking-wider text-gray-500">
            UNLEASH YOUR AI VENTURE&apos;S FULL POTENTIAL WITH GLOBAL AI:
          </h2>
          <div className="text-[56px] font-[500] leading-[120%] font-aeonik">
            Where <span className="font-playfair-display italic">Visionaries Thrive</span> and{' '}
            <span className="font-playfair-display italic">Innovations Soar</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <PotentialCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullPotential;