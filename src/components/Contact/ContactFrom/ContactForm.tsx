import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <section className="w-full">
      <div className="bg-[#1f598d14] rounded-2xl p-12">
        <div className="flex flex-col gap-12">
          <h2 className="text-[40px] font-[500] leading-[120%] font-aeonik max-w-[700px]">
            We invite anyone with interest and expertise to{' '}
            <span className="font-playfair-display italic">join us on our mission</span>
          </h2>

          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-600">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="e.g. Vlad"
                  className="bg-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-gray-600">
                  Company
                </label>
                <Input
                  id="company"
                  placeholder="e.g. ACME Inc"
                  className="bg-white"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="email" className="text-gray-600">
                  E-mail address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. email@company.com"
                  className="bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-600">
                Your Message
              </label>
              <Textarea
                id="message"
                placeholder="e.g. Vlad"
                className="bg-white min-h-[200px] resize-none"
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                size="lg"
                className="py-[16px] px-[28px] rounded-[40px] bg-black text-white hover:bg-gray-800"
              >
                SEND MESSAGE
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;