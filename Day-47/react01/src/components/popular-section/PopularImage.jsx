import { images } from "../../data/images";

function PopularImage() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
      {images.map((item) => (
        <img
          key={item.id}
          alt={item.alt}
          loading="lazy"
          width="480"
          height="480"
          className="w-40 grayscale opacity-75"
          src={item.src}
        />
      ))}
    </div>
  );
}

export default PopularImage;
