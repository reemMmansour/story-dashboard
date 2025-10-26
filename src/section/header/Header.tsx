import { TbCircleDashedLetterR } from "react-icons/tb";
import "./Header.css";
import { menuItems } from "../../services/endPoints";
import Button from "../../components/button/Button";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <header className="header fixed top-0 z-10 w-full px-4 py-4">
        <nav
          className="container flex items-center justify-between rounded-full
         border-2 border-white/10 bg-white/5 backdrop-blur p-2  text-white ">
          <div className="logo flex items-center text-4xl text-white">
            <TbCircleDashedLetterR />
            {/* <TbCircleDashedLetterM /> */}
          </div>
          <ul className="hidden space-x-4 md:flex">
            {menuItems?.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <Button>Contact me</Button>
          </div>
          {/* Menu Icon */}
          <button className="text-4xl text-white md:hidden">
            {menuOpen ? <BiX /> : <BiMenuAltRight />}
          </button>
        </nav>
      </header>
      {/* overLay for mobile menu */}
      <div></div>
      {/* Mobile menu */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuItems={menuItems}
      />
    </>
  );
};

export default Header;
