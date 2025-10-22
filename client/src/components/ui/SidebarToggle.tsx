import { Icon } from "../icons";
import { useUIStore } from "@/store/useUIStore";

const SidebarToggle = () => {
  const { isSidebarOpen, toggleSidebar } = useUIStore();

  return (
    <button
      onClick={toggleSidebar}
      aria-label="Toggle Sidebar"
      className={`absolute top-5 z-10 size-9 place-content-center rounded-md bg-[#1E1E1E] transition-all duration-500 hover:bg-neutral-800 hidden md:grid cursor-pointer
            ${
              isSidebarOpen
                ? "left-[calc(30%-1rem)] lg:left-[calc(20%-1rem)]"
                : "left-5.5"
            }`}
    >
      {isSidebarOpen ? (
        <Icon.CloseSidebar strokeWidth={1} />
      ) : (
        <Icon.OpenSidebar strokeWidth={1} />
      )}
    </button>
  );
};

export default SidebarToggle;
