import { resumeData } from "../../data/resume-data";
import ResumeItem from "./ResumeItem";

function ResumeList() {
  return (
    <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
      {resumeData.map((item) => (
        <ResumeItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ResumeList;
