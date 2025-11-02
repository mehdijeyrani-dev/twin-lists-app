import avatarImg from "@/assets/images/avatar01.jpg";
import { useUIStore } from "@/store/useUIStore";
import SidebarHeader from "./SidebarHeader";
import SidebarAccountMenu from "./SidebarAccountMenu";
import SidebarNavigation from "./SidebarNavigation";

const Sidebar = () => {
  const { isSidebarOpen } = useUIStore();

  const sidebarClass = `
    h-dvh bg-neutral-900 border-r border-neutral-800 flex-col justify-between
    transition-all duration-500 ease-in-out
    hidden md:flex
    ${isSidebarOpen ? "w-0 md:w-3/10 lg:w-2/10 p-2" : "w-0 p-0 overflow-hidden"}
  `;

  return (
    <aside className={sidebarClass} aria-label="Main navigation sidebar">
      <div
        className={`flex flex-col gap-2 justify-between h-full transition-all duration-500 ${
          isSidebarOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <SidebarHeader avatarImg={avatarImg} />
        <hr className="border-neutral-800" />
        <SidebarNavigation />
        <SidebarAccountMenu />
      </div>
    </aside>
  );
};

export default Sidebar;
