import { NavLink } from "react-router-dom";
import { Icon } from "../icons";

interface SidebarNavProps {
  isSidebarOpen: boolean;
}

const SidebarNav = ({ isSidebarOpen }: SidebarNavProps) => {
  return (
    <nav
      className={`w-full transition-all flex flex-col gap-2 ${
        isSidebarOpen ? "opacity-100 duration-1000" : "opacity-0"
      }`}
    >
      <NavLink
        to={"/"}
        className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer"
      >
        <Icon.Inbox size={20} />
        <span>Inbox</span>
      </NavLink>
      <NavLink
        to={"/today"}
        className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer"
      >
        <Icon.Calender size={20} />
        <span>Today</span>
      </NavLink>
      <NavLink
        to={"/"}
        className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer"
      >
        <Icon.CalenderUpload size={20} />
        <span>Upcoming</span>
      </NavLink>
      <NavLink
        to={"/"}
        className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer"
      >
        <Icon.Filter size={20} />
        <span>Filters & Labels</span>
      </NavLink>
    </nav>
  );
};

export default SidebarNav;
