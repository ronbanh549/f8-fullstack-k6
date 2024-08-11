import Input from "../../ui/Input";
import { contactFormData } from "../../data/contact-form";
import ContactFormItem from "./ContactFormItem";
import Button from "../../ui/Button";

function ContactForm() {
  return (
    <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
      <form action="#">
        <div className="mb-8 grid gap-4 lg:grid-cols-2">
          <div className="relative w-full min-w-[200px] h-12 mb-3 md:mb-0">
            <Input
              name="first-name"
              label="First Name"
              placeholder="eg. Lucas"
            />
          </div>
          <div className="relative w-full min-w-[200px] h-12">
            <Input name="last-name" label="Last Name" placeholder="eg. Jones" />
          </div>
        </div>
        <div className="relative w-full min-w-[200px] h-12 mb-8">
          <Input name="email" label=" Email" placeholder="eg. lucas@mail.com" />
        </div>
        <p className="block antialiased font-sans font-normal text-inherit !text-blue-gray-500 text-sm mb-2">
          What are you interested on?
        </p>
        <div className="-ml-3 mb-14 ">
          {contactFormData.map((item) => (
            <ContactFormItem key={item.id} {...item} />
          ))}
        </div>
        <div className="relative w-full min-w-[200px] mb-8">
          <textarea
            name="first-name"
            className="peer w-full h-full min-h-[100px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0  disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none transition-all border-b placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 border-blue-gray-200 focus:border-gray-900 !resize-none"
            placeholder=" "
          ></textarea>
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content[' '] after:block after:w-full after:absolute after:-bottom-1 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
            Your Message
          </label>
        </div>
        <div className="w-full flex justify-end">
          <Button primary btnContact padding>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
