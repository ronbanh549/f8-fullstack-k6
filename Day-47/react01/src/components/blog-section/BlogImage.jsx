function BlogImage() {
  return (
    <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
      <img
        alt="testimonial image"
        loading="lazy"
        width="768"
        height="768"
        className="h-full rounded-lg w-full object-cover"
        src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/avatar3.jpg"
      />
    </div>
  );
}

export default BlogImage;
