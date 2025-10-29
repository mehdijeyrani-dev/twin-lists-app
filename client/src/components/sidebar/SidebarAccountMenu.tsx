import { NavLink } from "react-router-dom";
import { Icon } from "../icons";

const SidebarAccountMenu = () => {
  return (
    <nav className="w-full flex flex-col gap-2">
      <NavLink
        to={"/"}
        className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer"
      >
        <Icon.Settings size={20} />
        <span>Settings</span>
      </NavLink>
      <NavLink
        to={"/"}
        className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer text-rose-500"
      >
        <Icon.Logout size={20} />
        <span>Logout</span>
      </NavLink>
    </nav>
  );
};

export default SidebarAccountMenu;
