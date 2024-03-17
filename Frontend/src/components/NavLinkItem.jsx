import { Link } from "react-router-dom";

import { BsArrowLeftShort } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

const NavLink = ({ to, name, isOpen, icon}) => {
  return (
    <li className="flex text-black items-center gap-x-4 rounded-md mt-2 mb-4 p-2 hover:bg-purple-300">
      <span className="text-2xl block float-left">
        {icon}
      </span>
      <span className={`flex-1 duration-200 ${!isOpen && "hidden"}`}>
        <Link className="text-black text-base" to={to}>
          {name}
        </Link>
      </span>
    </li>
  );
};

export default NavLink;
