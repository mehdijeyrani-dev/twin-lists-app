import { Icon } from "../icons";

interface SidebarActionProps {
  isSidebarOpen: boolean;
}

const SidebarAction = ({ isSidebarOpen }: SidebarActionProps) => {
  return (
    <div
      className={`w-full SidebarAction transition-all flex flex-col gap-2 ${
        isSidebarOpen ? "opacity-100 duration-1000" : "opacity-0"
      }`}
    >
      <button className="flex items-center gap-2 bg-purple-500/5 w-full p-2 rounded-sm text-purple-500 hover:bg-purple-500/15 transition-all duration-200 cursor-pointer">
        <Icon.Add size={20} strokeWidth={2} />
        <span className="font-semibold">Add Task</span>
      </button>
      <button className="flex items-center gap-2 bg-transparent w-full p-2 rounded-sm hover:bg-neutral-800/50 transition-all duration-200 cursor-pointer">
        <Icon.Search size={20} />
        <span>Search</span>
      </button>
    </div>
  );
};

export default SidebarAction;
