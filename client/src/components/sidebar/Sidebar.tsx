import avatarImg from "@/assets/images/avatar01.jpg";
import SidebarProfile from "./SidebarProfile";
import SidebarAction from "./SidebarAction";
import SidebarNav from "./SidebarNav";
import AccountControls from "./AccountControls";
import WorkspacePanel from "./WorkspacePanel";

interface SidebarProps {
  isSidebarOpen: boolean;
  onOpenAddTaskModal: () => void;
  onOpenAddTeamModal: () => void;
  onOpenSearchModal: () => void;
}

const Sidebar = ({
  isSidebarOpen,
  onOpenAddTaskModal,
  onOpenAddTeamModal,
  onOpenSearchModal,
}: SidebarProps) => {
  return (
    <aside
      className={`h-screen transition-all duration-500 ease-in-out border-r border-neutral-800 overflow-hidden hidden md:block bg-neutral-900 overflow-y-auto ${
        isSidebarOpen
          ? "w-3/10 lg:w-2/10 p-2.5 opacity-100"
          : "w-0 p-0 opacity-0"
      }`}
    >
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex flex-col flex-1 gap-2 h-full">
          <SidebarProfile
            isSidebarOpen={isSidebarOpen}
            avatarImg={avatarImg}
            name="Mehdi Jeyrani"
          />
          <hr className="border-neutral-800" />
          <SidebarAction
            isSidebarOpen={isSidebarOpen}
            onOpenAddTaskModal={onOpenAddTaskModal}
            onOpenAddTeamModal={onOpenAddTeamModal}
            onOpenSearchModal={onOpenSearchModal}
          />
          <hr className="border-neutral-800" />
          <div className="flex flex-col gap-2 overflow-y-auto flex-1">
            <SidebarNav isSidebarOpen={isSidebarOpen} />
            <WorkspacePanel isSidebarOpen={isSidebarOpen} />
          </div>
        </div>
        <AccountControls isSidebarOpen={isSidebarOpen} />
      </div>
    </aside>
  );
};

export default Sidebar;
