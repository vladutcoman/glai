import PageTitle from "@/components/common/PageTitle/PageTitle";
import ContactForm from "@/components/Contact/ContactFrom/ContactForm";
import { Separator } from "@/components/ui/separator";

const Contact = () => {
  return (
    <main className="flex-1 container mx-auto pt-24 mb-24">
      <div className="px-4 flex flex-col gap-[64px]">
        <PageTitle
          title={
            <h1 className="text-[64px] font-[500] leading-[130%] font-aeonik">
              Get in touch
              <br />
              with <span className="font-playfair-display italic">Global AI</span>
            </h1>
          }
          description="Our team works closely with investors and founders as an technology consortium that is expanding the AI frontier."
        />
        <Separator />
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;