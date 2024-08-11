import Button from "../../ui/Button";

function ProjectItem({ content, title, image }) {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg mx-0 mt-0 mb-6 h-48">
        <img
          alt="Mobile App Development"
          loading="lazy"
          width="768"
          height="768"
          className="h-full w-full object-cover"
          src={image}
        />
      </div>
      <div className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2">
            {title}
          </h5>
        </a>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
          {content}
        </p>
        <Button primary paddingSecond>
          see details
        </Button>
      </div>
    </div>
  );
}

export default ProjectItem;
