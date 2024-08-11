import Button from "../../ui/Button";

function SectionHeader() {
  return (
    <section className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full max-w-[1320px] lg:min-w-[960px] grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mb-4 lg:text-5xl !leading-tight text-3xl">
            Welcome to my Web <br /> Development Portofolio!
          </h1>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mb-4 !text-gray-500 md:pr-16 xl:pr-28">
            I'm Lily Smith, a passionate web developer based in USA. Here,
            you'll get a glimpse of my journey in the world of web development,
            where creativity meets functionality.
          </p>
          <div className="grid">
            <p className="block antialiased font-sans text-sm leading-normal mb-2 text-gray-900 font-medium">
              Your email
            </p>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 sm:flex-row">
              <div className="relative w-full min-w-[200px] h-11 lg:max-w-[403px]">
                <input className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900 header-input" />
                <label className="flex w-full-text text-center h-full select-none pointer-events-none absolute left-4 font-normal top-[50%] translate-y-[-28%] text-gray-500 transition-all duration-200">
                  Enter your email
                </label>
              </div>
              <Button btnSectionHeader primary padding>
                require offer
              </Button>
            </div>
          </div>
          <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </p>
        </div>
        <img
          alt="team work"
          loading="lazy"
          width="1024"
          height="1024"
          className="h-[36rem] w-full rounded-xl object-cover"
          src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/image-7.svg"
        />
      </div>
    </section>
  );
}

export default SectionHeader;
