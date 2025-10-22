import { Icon } from "../icons";

interface SidebarActionProps {
  isSidebarOpen: boolean;
  onOpenAddTaskModal: () => void;
  onOpenAddTeamModal: () => void;
  onOpenSearchModal: () => void;
}

const SidebarAction = ({
  isSidebarOpen,
  onOpenAddTaskModal,
  onOpenAddTeamModal,
  onOpenSearchModal,
}: SidebarActionProps) => {
  const actions = [
    {
      label: "Add Task",
      icon: Icon.Add,
      className: "bg-purple-500/5 text-purple-500 hover:bg-purple-500/15",
      onClick: onOpenAddTaskModal,
    },
    {
      label: "Add Team",
      icon: Icon.Group,
      className: "bg-transparent hover:bg-neutral-800/50 text-neutral-300",
      onClick: onOpenAddTeamModal,
    },
    {
      label: "Search",
      icon: Icon.Search,
      className: "bg-transparent hover:bg-neutral-800/50 text-neutral-300",
      onClick: onOpenSearchModal,
    },
  ];

  return (
    <div
      className={`w-full SidebarAction transition-all flex flex-col gap-2 ${
        isSidebarOpen ? "opacity-100 duration-1000" : "opacity-0"
      }`}
    >
      {actions.map(({ label, icon: IconComp, className, onClick }) => (
        <button
          key={label}
          onClick={onClick}
          className={`flex items-center gap-2 w-full p-2 rounded-sm transition-all duration-200 cursor-pointer ${className}`}
        >
          <IconComp size={20} />
          <span className="font-semibold">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default SidebarAction;
