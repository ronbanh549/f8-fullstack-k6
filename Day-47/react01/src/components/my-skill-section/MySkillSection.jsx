import HeaderSkillSection from "./HeaderSkillSection";
import { mySkill } from "../../data/my-skill";
import MySkillItem from "./MySkillItem";

function MySkillSection() {
  return (
    <section className="px-8">
      <HeaderSkillSection />
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 max-w-[1320px] lg:min-w-[960px]">
        {mySkill.map((item) => (
          <MySkillItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default MySkillSection;
