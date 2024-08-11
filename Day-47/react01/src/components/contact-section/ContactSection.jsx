import ContactBody from "./ContactBody";
import ContactHeader from "./ContactHeader";

function ContactSection() {
  return (
    <section className="px-8 py-16">
      <ContactHeader />
      <ContactBody />
    </section>
  );
}

export default ContactSection;
