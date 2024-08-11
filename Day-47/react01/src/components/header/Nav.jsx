import NavItem from "./NavItem";
import { navData } from "../../data/navdata";

function Nav() {
  return (
    <ul className="ml-10 hidden items-center gap-8 lg:flex">
      {navData.map((item) => (
        <NavItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default Nav;
