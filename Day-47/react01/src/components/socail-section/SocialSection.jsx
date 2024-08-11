import { images } from "../../data/images";

function SocialSection() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center max-w-[1320px] lg:min-w-[960px]">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-8">
          My awesome clients
        </h6>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {images.map((image) => (
            <img
              className="w-40"
              style={{ color: "transparent" }}
              src={image.src}
              alt={image.alt}
              key={image.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialSection;
