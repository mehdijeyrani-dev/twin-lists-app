import { NavLink } from "react-router-dom";
import { Icon } from "../icons";

interface WorkspacePanelProps {
  isSidebarOpen: boolean;
}

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

const WorkspacePanel = ({ isSidebarOpen }: WorkspacePanelProps) => {
  return (
    <nav
      className={`w-full transition-opacity flex flex-col gap-2 flex-1 mb-2 ${
        isSidebarOpen ? "opacity-100 duration-[1500ms]" : "opacity-0"
      }`}
    >
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

export default WorkspacePanel;
