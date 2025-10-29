import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "../icons";

const navLinkClass = `
  flex items-center
  gap-2
  bg-transparent
  w-full
  p-2
  rounded-sm
  hover:bg-neutral-800/50
  transition-all
  duration-200
  cursor-pointer
`
  .replace(/\s+/g, " ")
  .trim();

const SidebarWorkspace = () => {
  return (
    <nav className="w-full flex flex-col gap-2 overflow-y-auto">
      <NavLink to={"/tasks"} className={navLinkClass}>
        <Icon.Note size={20} />
        <span>My Tasks</span>
      </NavLink>
      <NavLink to={"/teams"} className={navLinkClass}>
        <Icon.Atom size={20} />
        <span>My Teams</span>
      </NavLink>
      <NavLink to={"/projects"} className={navLinkClass}>
        <Icon.Folders size={20} />
        <span>My Projects</span>
      </NavLink>
    </nav>
  );
};

export default SidebarWorkspace;
