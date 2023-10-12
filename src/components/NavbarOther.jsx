import { logo } from "../assets";
import { Link } from "react-router-dom"

const NavbarOther = () => {

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="flutter mapp" className="w-[50px] h-[50px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <div
          key={'home'}
          className={`font-poppins font-normal text-[16px] leading-[24px] text-dimBlack hover:text-secondary cursor-pointer`}>
          <CustomLink to='/'> Return home </CustomLink>
        </div>
      </ul>
    </nav>
  );
};

export default NavbarOther;

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link >
    </li >
  )
}