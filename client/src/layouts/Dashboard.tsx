import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import logoImg from "@/assets/images/logo.svg";
import {
  BellIcon,
  CloseSidebarIcon,
  OpenSidebarIcon,
  SunIcon,
} from "@/components/icons";
import { Sidebar } from "@/components/sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="w-full h-full flex animate-opacity relative">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <main className="flex-1 h-screen overflow-hidden p-2.5 flex flex-col gap-2.5">
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
            <CloseSidebarIcon strokeWidth={1} />
          ) : (
            <OpenSidebarIcon strokeWidth={1} />
          )}
        </button>
        <header
          className={`header h-14 p-2.5 flex justify-between items-center border border-neutral-800 rounded-md transition-all duration-300 ${
            isSidebarOpen && "md:ml-3.5"
          }`}
        >
          <div
            className={`flex items-center gap-1 md:gap-2 transition-all duration-300 ${
              isSidebarOpen ? "p-0 " : "pl-0 md:pl-11"
            }`}
          >
            <button className="size-9 grid place-content-center cursor-pointer bg-transparent rounded-md hover:bg-neutral-800 transition-all duration-300 relative">
              <BellIcon strokeWidth={1} size={20} />
              <span className="absolute size-2 rounded-full bg-rose-500 right-2 top-2" />
            </button>
            <button className="size-9 place-content-center cursor-pointer bg-transparent rounded-md hover:bg-neutral-800 transition-all duration-300 hidden md:grid">
              <SunIcon strokeWidth={1} size={20} />
            </button>
          </div>
          <div className="">
            <img src={logoImg} alt="" width={110} className="object-contain" />
          </div>
        </header>
        <div className="p-2.5 border border-neutral-800 rounded-md flex-1">
          <Outlet />
        </div>
        <footer className="text-center text-xs text-neutral-500">
          © 2025 Twin Lists — Crafted with ❤️ by Mehdi Jeyrani
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
