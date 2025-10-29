import { useUIStore } from "@/store/useUIStore";
import { Icon } from "../icons";

const SidebarAction = () => {
  const { openAddTaskModal, openAddTeamModal, openSearchModal } = useUIStore();

  const actions = [
    {
      label: "Add task",
      icon: Icon.Add,
      className: "bg-purple-500/5 text-purple-500 hover:bg-purple-500/15",
      onClick: openAddTaskModal,
    },
    {
      label: "Add team",
      icon: Icon.Group,
      className: "bg-transparent hover:bg-neutral-800/50 text-neutral-50",
      onClick: openAddTeamModal,
    },
    {
      label: "Search",
      icon: Icon.Search,
      className: "bg-transparent hover:bg-neutral-800/50 text-neutral-50",
      onClick: openSearchModal,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {actions.map(({ label, icon: IconComp, className, onClick }) => (
        <button
          key={label}
          onClick={onClick}
          className={`flex items-center gap-2 w-full p-2 rounded-sm transition-all duration-100 cursor-pointer ${className}`}
        >
          <IconComp size={20} />
          <span className="">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default SidebarAction;
