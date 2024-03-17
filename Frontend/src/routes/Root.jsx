import { useState } from "react";
import { GiFastForwardButton } from "react-icons/gi";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";
import { BiBuildingHouse } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io"
import { FaRegUser } from "react-icons/fa";
import { PiExam } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import NavLinkItem from "../components/NavLinkItem";

const Root = () => {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <div
      className={`bg-dark-purple h-screen p-5 pt-8 border-r-2 ${
        navOpen ? "w-72" : "w-20" 
      } duration-300 relative`}
    >
      <GiFastForwardButton
        className={`bg-white text-black text-large rounded-full absolute right-3 bottom-3 border border-dark-purple cursor-pointer ${
          !navOpen && "rotate-180"
        }`}
        onClick={() => setNavOpen(!navOpen)}
      />
      <div className="inline-flex mb-6">
        <div className="flex justify-center align-middle">
          <h1
            className={`text-purple-600 text-5xl cursor-pointer float-left mr-3 block duration-500 ${navOpen && "rotate-[360deg]"}`} 
          >
            < FaGraduationCap />
          </h1>
        </div>
        <div>
          <h3
            className={`text-black origin-left font-medium text-2xl duration-300 ${
              !navOpen && "scale-0"
            }`}
          >
            Young
          </h3>
          <h3
            className={`text-black origin-left font-medium text-2xl duration-300 ${
              !navOpen && "scale-0"
            }`}
          >
            Guru.
          </h3>
        </div>
      </div>
      <nav>
        <ul className="pt-2">
          <NavLinkItem
            name="Dashboard"
            to="/"
            isOpen={navOpen}
            icon={<RiDashboardLine />}
          />
          <NavLinkItem
            name="Exams"
            to="profile"
            isOpen={navOpen}
            icon={<AiOutlineFileDone />}
          />
          <NavLinkItem
            name="Results"
            to="profile"
            isOpen={navOpen}
            icon={<PiExam />}
          />
          <NavLinkItem
            name="Users"
            to="profile"
            isOpen={navOpen}
            icon={<HiOutlineUsers />}
          />
          <NavLinkItem
            name="Students"
            to="profile"
            isOpen={navOpen}
            icon={<PiStudent />}
          />

          <NavLinkItem
            name="Classes"
            to="profile"
            isOpen={navOpen}
            icon={<BiBuildingHouse />}
          />
           <NavLinkItem
            name="My&nbsp;Profile"
            to="profile"
            isOpen={navOpen}
            icon={<FaRegUser />}
          />
          
          <NavLinkItem name="Settings" to="profile" isOpen={navOpen} icon={< IoSettingsOutline />}/>
          <NavLinkItem name="Logout" to="profile" isOpen={navOpen} icon={< RiLogoutBoxRLine/>}/>
          <NavLinkItem
            name="Help&nbsp;&&nbsp;Support"
            to="profile"
            isOpen={navOpen}
            icon={< IoMdHelpCircleOutline />}
          /> 
        </ul>
      </nav>
    </div>
  );
};

export default Root;
