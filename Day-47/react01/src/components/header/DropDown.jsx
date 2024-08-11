import { navData } from "../../data/navdata";
import ActionHeader from "./ActionHeader";
import NavItem from "./NavItem";

function DropDown({ openMenu }) {
  return (
    <div
      className={
        openMenu
          ? "block w-full basis-full overflow-hidden h-auto"
          : "block w-full basis-full overflow-hidden h-0"
      }
    >
      <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
        <ul className="flex flex-col gap-4">
          {navData.map((item) => (
            <NavItem key={item.id} {...item} />
          ))}
        </ul>
        <div className="mt-6 mb-4 flex items-center gap-2">
          <ActionHeader />
        </div>
      </div>
    </div>
  );
}

export default DropDown;
