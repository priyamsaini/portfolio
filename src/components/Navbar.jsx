import { useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(props) {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(true);

  const [isDark, setIsDark] = useState(true);

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleThemeClick = () => {
    setIsDark((prev) => !prev);
    props.onSelectTheme(isDark);
  };

  return (
    <header className="bg-secondary">
      <nav className="flex justify-around items-center h-16 text-lg">
        <div>
          <Link className="font-light text-quaternary/80" to="/">
            &#60;&#47;Priyam&#62;
          </Link>
        </div>
        <div
          onClick={handleThemeClick}
          className="text-quaternary/90 cursor-pointer"
        >
          {isDark ? <GoSun /> : <GoMoon />}
        </div>
        <div
          className={
            "font-light bg-secondary md:static md:flex-row md:w-auto md:gap-10 absolute left-0 top-16 flex flex-col w-full h-[50%] p-2 justify-around items-center " +
            (isOpen ? "top-[-50%]" : "top-16")
          }
        >
          {navigation.map((navItem) => {
            return (
              <NavLink
                key={navItem.name}
                className={({ isActive }) => {
                  return (
                    "hover:text-quaternary" +
                    (isActive ? " text-quaternary" : " text-quaternary/60")
                  );
                }}
                to={navItem.href}
              >
                {navItem.name}
              </NavLink>
            );
          })}
        </div>
        <div className="md:hidden text-quaternary/90" onClick={handleMenuClick}>
          {isOpen ? <IoMenuSharp /> : <RxCross1 />}
        </div>
      </nav>
    </header>
  );
}
