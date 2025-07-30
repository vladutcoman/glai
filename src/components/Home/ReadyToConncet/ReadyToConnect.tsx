import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const ReadyToConnect = () => {
  return (
    <section className="w-full relative overflow-hidden rounded-[32px] mt-24">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/home-9.svg"
          alt="AI Network Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative container mx-auto px-12 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-4 text-white max-w-[600px]">
            <h2 className="text-4xl font-semibold">
              Ready To <span className="italic">Connect</span>?
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
    </section>
  );
};

export default ReadyToConnect;