import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInformation } from "@/components/sections/ContactInformation";

export const metadata = {
  title: "Contact - PT Sepeda Bersama Indonesia Tbk",
  description: "Get in touch with PT Sepeda Bersama Indonesia Tbk. Visit our headquarters, call us, or send a message to start a conversation.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="py-24 md:py-32">
        <div className="container-page">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
            Contact Us
          </h1>
          <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16">
            <div>
              <ContactForm />
            </div>
            <div>
              <ContactInformation />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
