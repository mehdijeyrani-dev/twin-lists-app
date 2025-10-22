import { useState } from "react";
import { Outlet } from "react-router-dom";
import logoImg from "@/assets/images/logo.svg";

import { Sidebar } from "@/components/sidebar";
import { Icon } from "@/components/icons";
import AddTaskModal from "@/components/AddTaskModal";
import MobileNavbar from "@/components/navbar/MobileNavbar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isAddTeamModalOpen, setIsAddTeamModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <div className="w-full h-full flex animate-opacity relative">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onOpenAddTaskModal={() => setIsAddTaskModalOpen(true)}
        onOpenAddTeamModal={() => setIsAddTeamModalOpen(true)}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
      />
      <main className="flex-1 h-screen overflow-hidden p-2.5 flex flex-col gap-2">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
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
        <header
          className={`header h-10 md:h-14 p-2.5 flex justify-between items-center transition-all duration-300 ${
            isSidebarOpen && "md:ml-3.5"
          }`}
        >
          <div
            className={`flex items-center gap-1 md:gap-2 transition-all duration-300 ${
              isSidebarOpen ? "p-0 " : "pl-0 md:pl-11"
            }`}
          >
            <button className="size-9 grid place-content-center cursor-pointer bg-transparent rounded-md hover:bg-neutral-800 transition-all duration-300 relative">
              <Icon.Bell strokeWidth={1} size={20} />
              <span className="absolute size-2 rounded-full bg-rose-500 right-2 top-2" />
            </button>
            <button className="size-9 place-content-center cursor-pointer bg-transparent rounded-md hover:bg-neutral-800 transition-all duration-300 hidden md:grid">
              <Icon.Sun strokeWidth={1} size={20} />
            </button>
          </div>
          <div className="w-20 md:w-24 xl:w-28">
            <img
              src={logoImg}
              alt=""
              width={110}
              className="w-full object-contain"
            />
          </div>
        </header>
        <hr className="border-neutral-800" />
        <div className="p-2.5 flex-1">
          <Outlet />
        </div>
        <footer className="text-center text-xs text-neutral-500">
          © 2025 Twin Lists — Crafted with ❤️ by Mehdi Jeyrani
        </footer>
      </main>

      {isAddTaskModalOpen && (
        <AddTaskModal onClick={() => setIsAddTaskModalOpen(false)} />
      )}

      <MobileNavbar />
    </div>
  );
};

export default Dashboard;
