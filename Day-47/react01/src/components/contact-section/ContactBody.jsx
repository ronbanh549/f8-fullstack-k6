import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function ContactBody() {
  return (
    <div>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md container mx-auto border border-gray/50 max-w-[1320px] lg:min-w-[960px]">
        <div className="p-6 grid grid-cols-1 lg:grid-cols-7 md:gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactBody;
