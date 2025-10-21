import avatarImg from "@/assets/images/avatar01.jpg";
import SidebarProfile from "./SidebarProfile";
import { AddIcon, SearchIcon } from "../icons";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  return (
    <aside
      className={`transition-all duration-500 ease-in-out border-r border-neutral-800 overflow-hidden hidden md:block ${
        isSidebarOpen
          ? "w-3/10 lg:w-2/10 p-2.5 opacity-100"
          : "w-0 p-0 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-2.5">
        <SidebarProfile
          isSidebarOpen={isSidebarOpen}
          avatarImg={avatarImg}
          name="Mehdi Jeyrani"
        />
        <div
          className={`w-full action p-2.5 border border-neutral-800 rounded-md transition-all flex flex-col gap-2.5 ${
            isSidebarOpen ? "opacity-100 duration-1000" : "opacity-0"
          }`}
        >
          <button className="flex items-center gap-3 bg-purple-500/5 w-full p-3 rounded-sm text-purple-500 hover:bg-purple-500/15 transition-all duration-200 cursor-pointer">
            <AddIcon />
            <span className="font-semibold">Add Task</span>
          </button>
          <button className="flex items-center gap-3 bg-transparent w-full p-3 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer">
            <SearchIcon />
            <span className="font-semibold">Search</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
