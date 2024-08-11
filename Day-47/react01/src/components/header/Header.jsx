import { useState } from "react";
import Button from "../../ui/Button";
import ActionHeader from "./ActionHeader";
import Nav from "./Nav";
import IconBlock from "./header-icon/iconBlock";
import SectionHeader from "./SectionHeader";
import DropDown from "./DropDown";
import IconClose from "./header-icon/iconClose";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenuDropDown() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <header className="block py-4 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border-white/80 w-full rounded-none px-4 bg-white border-0 sticky top-0 z-50 mx-auto">
        <div className="container mx-auto flex items-center justify-between max-w-[1320px] lg:min-w-[960px]">
          <p className="block antialiased font-sans text-blue-gray-900 text-lg font-bold">
            Material Tailwind
          </p>
          <Nav />
          <div className="hidden items-center gap-2 lg:flex">
            <ActionHeader isOpen={isOpen} />
          </div>
          <Button btnRes onClick={handleOpenMenuDropDown}>
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              {isOpen ? <IconClose /> : <IconBlock />}
            </span>
          </Button>
        </div>
        <DropDown openMenu={isOpen} />
      </header>
      <SectionHeader />
    </>
  );
}

export default Header;
