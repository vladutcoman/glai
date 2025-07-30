import Image from "next/image";

const Opportunity = () => {
  return (
    <section className="w-full">
      <div className="bg-[#1f598d14] rounded-2xl p-12">
        <div className="flex flex-col items-center gap-16">
          <h2 className="text-[40px] font-[500] leading-[120%] font-aeonik">
            Opportunity <span className="font-playfair-display italic">by the numbers</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            {/* Left Label - Momentum */}
            <div className="font-playfair-display italic text-2xl text-blue-500 md:w-[200px] text-center md:text-right">
              Momentum
            </div>

            {/* Center Image and Text */}
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/about-2.svg"
                alt="Circular Wave Pattern"
                fill
                className="object-contain"
                priority
              />

              {/* Centered Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-center max-w-[300px] text-gray-600">
                  We have seen over 100+ investable and acquirable AI tech companies in the last 3 months, and our funnel continues to grow.
                </p>
              </div>
            </div>

            {/* Right Label - Signal */}
            <div className="font-playfair-display italic text-2xl text-purple-500 md:w-[200px] text-center md:text-left">
              Signal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;