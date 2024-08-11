import Button from "../../ui/Button";
import FooterItem from "./FooterItem";

const lists = [
  { id: 1, title: "Home" },
  { id: 2, title: "About Us" },
  { id: 3, title: "Blog" },
  { id: 4, title: "Service" },
];

function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit text-center font-normal !text-gray-700">
            © 2024 Made with{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Material Tailwind
            </a>{" "}
            by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Creative Tim
            </a>
            .
          </p>
          <ul className="flex gap-8 items-center">
            {lists.map((item) => (
              <FooterItem key={item.id} {...item} />
            ))}
            <Button primary padding>
              subscribe
            </Button>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
