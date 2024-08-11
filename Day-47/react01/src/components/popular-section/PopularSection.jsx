import PopularHeader from "./PopularHeader";
import PopularImage from "./PopularImage";

function PopularSection() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <PopularHeader />
        <PopularImage />
      </div>
    </section>
  );
}

export default PopularSection;
