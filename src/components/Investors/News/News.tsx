interface NewsCardProps {
  title: string;
  description: string;
}

const NewsCard = ({ title, description }: NewsCardProps) => {
  return (
    <div className="bg-[#1f598d14] rounded-2xl p-8 flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const News = () => {
  const newsCards = [
    {
      title: "Empower Your Investment Strategy",
      description: "For investors seeking detailed insights, our dedicated investor page on global.ai provides a comprehensive look at Global AI's (GLAI) strategic acquisitions and progress updates. Explore our investment philosophy, view our latest financial reports, and stay informed about our portfolio companies' milestones, all in one place. Connect with us to be part of the narrative that's shaping the future of AI."
    },
    {
      title: "Unlock the potential of AI",
      description: "Our comprehensive investor page is meticulously curated to provide you with in-depth information on our strategic vision, latest acquisitions, and financial performance. We ensure our investors are equipped with timely and relevant data to make informed decisions. From detailed quarterly earnings reports to insightful market analyses, our resources are designed to give you a clear view of our enduring commitment to innovation and growth in the AI sector."
    },
    {
      title: "Dive into the heart of AI investment",
      description: "As a valued investor, you'll gain access to exclusive content including company announcements, progress updates on our portfolio companies, and forward-looking statements that outline our trajectory in the AI landscape. We believe in maintaining transparency and fostering strong investor relations, offering a robust platform where you can monitor the impact of your investments and stay aligned with our mission to redefine the boundaries of technology."
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-sm uppercase tracking-wider text-gray-500">
            EXPLORE GLOBAL AI'S RESOURCES FOR INVESTORS
          </h2>
          <div className="text-[56px] font-[500] leading-[120%] font-aeonik">
            News <span className="font-playfair-display italic">& Resources</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {newsCards.map((card, index) => (
            <NewsCard
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

export default News;