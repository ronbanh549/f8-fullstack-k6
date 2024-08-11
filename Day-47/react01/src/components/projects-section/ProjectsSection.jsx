import ProjectHeader from "./ProjectHeader";
import { projectData } from "../../data/projects";
import ProjectItem from "./ProjectItem";

function ProjectsSection() {
  return (
    <section className="py-28 px-8">
      <ProjectHeader />
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4 max-w-[1320px] lg:min-w-[960px]">
        {projectData.map((item) => (
          <ProjectItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
