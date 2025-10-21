import avatarImg from "@/assets/images/avatar01.jpg";
import SidebarProfile from "./SidebarProfile";
import SidebarAction from "./SidebarAction";
import SidebarNav from "./SidebarNav";
import AccountControls from "./AccountControls";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  return (
    <aside
      className={`h-screen transition-all duration-500 ease-in-out border-r border-neutral-800 overflow-hidden hidden md:block ${
        isSidebarOpen
          ? "w-3/10 lg:w-2/10 p-2.5 opacity-100"
          : "w-0 p-0 opacity-0"
      }`}
    >
      <div className="w-full h-full flex flex-col justify-between gap-2.5">
        <div className="flex flex-col gap-2.5 flex-1">
          <SidebarProfile
            isSidebarOpen={isSidebarOpen}
            avatarImg={avatarImg}
            name="Mehdi Jeyrani"
          />
          <SidebarAction isSidebarOpen={isSidebarOpen} />
          <SidebarNav isSidebarOpen={isSidebarOpen} />
        </div>
        <AccountControls isSidebarOpen={isSidebarOpen} />
      </div>
    </aside>
  );
};

export default Sidebar;
