import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./InvestmentFocus.module.css";
import Image from "next/image";

const InvestmentFocus = () => {
  const strategies = [
    {
      icon: "/home-2.svg",
      title: "M&A Strategy",
      description: "Through disciplined acquisition strategies, we bring high-growth AI companies into the Global AI ecosystem."
    },
    {
      icon: "/home-3.svg",
      title: "AI Products",
      description: "We target companies with industry-leading AI solutions that redefine customer engagement and operational efficiency."
    },
    {
      icon: "/home-4.svg",
      title: "Growth Potential",
      description: "We focus on organizations with scalable solutions, strong team leadership and clear market differentiation."
    },
    {
      icon: "/home-5.svg",
      title: "Strategic Partnerships",
      description: "We value companies that demonstrate partnership capabilities and collaborative innovation."
    }
  ];

  return (
    <div className="flex flex-col gap-[80px] ">
      <div className="flex flex-col gap-[48px]">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-[24px]">
            <span className="text-sm uppercase tracking-wider text-gray-500">INVESTMENT FOCUS</span>
            <h2 className="text-[40px] leading-[120%] max-w-[600px]">
              Our disciplined acquisition strategy targets high-growth companies{" "}
              <span className="font-playfair-display italic">across the AI ecosystem</span>
            </h2>
          </div>
          {/* <div className="flex gap-4">
            <button className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button className="p-4 rounded-full bg-black text-white hover:bg-gray-900 transition-colors">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div> */}
        </div>

        {/* Strategy Cards */}
        <div className="relative">
          <div className={`flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory ${styles.scrollbarHide}`}>
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow min-w-[300px] snap-start"
              >
                <div className="relative w-[48px] h-[48px]">
                  <Image
                    src={strategy.icon}
                    alt={strategy.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-medium">{strategy.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{strategy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentFocus; 