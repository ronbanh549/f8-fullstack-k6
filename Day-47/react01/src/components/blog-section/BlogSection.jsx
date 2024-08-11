import BlogContent from "./BlogContent";
import BlogHeader from "./BlogHeader";
import BlogImage from "./BlogImage";

function BlogSection() {
  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <BlogHeader />
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none py-8 lg:flex-row">
          <div className="p-6 w-full lg:gap-10 h-full lg:!flex justify-between">
            <BlogContent />
            <BlogImage />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
