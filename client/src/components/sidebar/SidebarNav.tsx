import { NavLink } from "react-router-dom";
import {
  AtomIcon,
  CalenderIcon,
  CalenderUploadIcon,
  FilterIcon,
  FoldersIcon,
  InboxIcon,
  NoteIcon,
} from "../icons";

interface SidebarNavProps {
  isSidebarOpen: boolean;
}

const SidebarNav = ({ isSidebarOpen }: SidebarNavProps) => {
  return (
    <nav
      className={`w-full SidebarNav p-2.5 border border-neutral-800 rounded-md transition-all flex flex-col gap-2 flex-1 ${
        isSidebarOpen ? "opacity-100 duration-1000" : "opacity-0"
      }`}
    >
      <NavLink
        to={"/"}
        className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer"
      >
        <InboxIcon size={20} />
        <span>Inbox</span>
      </NavLink>
      <NavLink
        to={"/"}
        className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer"
      >
        <CalenderIcon size={20} />
        <span>Today</span>
      </NavLink>
      <NavLink
        to={"/"}
        className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer"
      >
        <CalenderUploadIcon size={20} />
        <span>Upcoming</span>
      </NavLink>
      <NavLink
        to={"/"}
        className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer"
      >
        <FilterIcon size={20} />
        <span>Filters & Labels</span>
      </NavLink>
      <NavLink
        to={"/"}
        className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer"
      >
        <NoteIcon size={20} />
        <span>My Tasks</span>
      </NavLink>
      <NavLink
        to={"/"}
        className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer"
      >
        <AtomIcon size={20} />
        <span>My Teams</span>
      </NavLink>
      <NavLink
        to={"/"}
        className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer"
      >
        <FoldersIcon size={20} />
        <span>My Projects</span>
      </NavLink>
    </nav>
  );
};

export default SidebarNav;
