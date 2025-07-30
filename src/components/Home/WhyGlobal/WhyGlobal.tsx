import { Button } from '@/components/ui/button';

interface BenefitColumnProps {
  title: string;
  benefits: string[];
}

const BenefitColumn = ({ title, benefits }: BenefitColumnProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <div className="flex flex-col gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 text-gray-600">
            {benefit}
          </div>
        ))}
      </div>
    </div>
  );
};

const WhyGlobal = () => {
  const benefitColumns = [
    {
      title: 'For Investors',
      benefits: [
        'Strong M&A Pipeline',
        'Proven Value Creation Model',
        'Diversified AI Portfolio'
      ]
    },
    {
      title: 'For Acquisition Targets',
      benefits: [
        'Flexible Performance Incentives',
        'Post-Acquisition Ownership',
        'Global Distribution Network'
      ]
    },
    {
      title: 'For Customers',
      benefits: [
        'Comprehensive AI Solutions',
        'Enterprise-Grade Security',
        'Scalable Implementation'
      ]
    }
  ];

  return (
    <section className="w-full py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 mb-16">
          <h2 className="text-sm uppercase tracking-wider text-gray-500">WHY GLOBAL AI?</h2>
          <div className="flex justify-between items-start">
            <div className="text-4xl font-semibold text-gray-900 max-w-[700px]">
              Driving shareholder value through{' '}
              <span className="italic">strategic AI acquisitions</span>
            </div>
            <Button variant="default" size="lg" className="py-[16px] px-[28px] rounded-[40px] bg-black text-white hover:bg-gray-800">
              EXPLORE OUR SERVICES →
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefitColumns.map((column, index) => (
            <BenefitColumn
              key={index}
              title={column.title}
              benefits={column.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGlobal;