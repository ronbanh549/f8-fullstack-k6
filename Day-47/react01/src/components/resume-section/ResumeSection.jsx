import ResumeContent from "./ResumeContent";
import ResumeList from "./ResumeList";

function ResumeSection() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2 max-w-[1320px] lg:min-w-[960px]">
        <ResumeContent />
        <ResumeList />
      </div>
    </section>
  );
}

export default ResumeSection;
