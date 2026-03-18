import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="flutter mapp" className="w-[50px] h-[50px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) =>
          <li
            key={nav.id}
            className={`font-poppins cursor-pointer text-[16px] ${active === nav.title ? "text-black font-black" : "text-dimBlack font-normal"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
