import { Icon } from "@/components/icons";
import Board from "@/components/inbox/Board";
import List from "@/components/inbox/List";
import { useUIStore } from "@/store/useUIStore";
import React, { useState, type JSX } from "react";

type ViewType = "list" | "board" | "calender" | "compact";

const views: { type: ViewType; label: string; icon: JSX.Element }[] = [
  { type: "list", label: "List", icon: <Icon.Menu size={18} /> },
  { type: "board", label: "Board", icon: <Icon.Column size={18} /> },
  {
    type: "calender",
    label: "Calender",
    icon: <Icon.CalenderGrid size={18} />,
  },
  { type: "compact", label: "Compact", icon: <Icon.Compact size={18} /> },
];

const Inbox = () => {
  const { isSidebarOpen } = useUIStore();
  const [viewType, setViewType] = useState<ViewType>("list");

  return (
    <div
      className={`w-full h-full transition-all duration-300 ${
        !isSidebarOpen && "px-0 md:px-5"
      }`}
    >
      <div className={`toolbar flex items-center justify-between text-neutral-400 py-2.5 border-b border-neutral-800 ${isSidebarOpen && "px-2"}`}>
        <div className="left flex items-center gap-2 md:gap-2 w-full">
          <div className="view items-center gap-2 hidden lg:flex bg-[#1e1e1e] p-1.5 rounded-md inset-shadow-xl">
            {views.map(({ type, label, icon }) => {
              const isActive = viewType === type;
              return (
                <button
                  key={type}
                  className={`flex items-center gap-1.5 text-sm py-1 px-3 rounded-sm transition-all duration-200 shadow-2xl ${
                    isActive && "text-neutral-100 bg-neutral-500/20"
                  }`}
                  onClick={() => setViewType(type)}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
          <div className="w-0.5 h-6 bg-neutral-700" />
          <span className="text-xs md:text-base font-semibold">
            Inbox
            <strong className="bg-neutral-800 px-1 py-0.5 rounded-sm ml-1 md:ml-2 border border-neutral-700 font-semibold">
              12
            </strong>
          </span>
          <div className="viewMobile block lg:hidden">
            <button className="flex items-center gap-1 border border-neutral-700 px-2 py-1 rounded-sm hover:bg-neutral-800 text-xs">
              <Icon.GridView size={12} />
              <span>View</span>
            </button>
          </div>
        </div>
        <div className="right shrink-0">
          <div className="items-center gap-2 hidden md:flex">
            <button className="text-purple-400 items-center gap-1 border border-transparent hover:border-purple-500/50 bg-purple-500/10 px-1.5 py-1 transition-all duration-300 rounded-md hidden md:flex text-sm cursor-pointer">
              <Icon.PlusSignCircle size={16} />
              <span>Add Section</span>
            </button>
            <button className="text-neutral-400 items-center gap-1 hover:bg-neutral-800/50 px-1.5 py-1 transition-all duration-300 rounded-md hidden md:flex text-sm cursor-pointer border border-transparent hover:border-neutral-700">
              <Icon.ArrowUpDown size={16} />
              <span>Sort</span>
              <Icon.ArrowDown size={12} className="ml-1" />
            </button>
            <button className="text-neutral-400 items-center gap-1 hover:bg-neutral-800/50 px-1.5 py-1 transition-all duration-300 rounded-md hidden md:flex text-sm cursor-pointer border border-transparent hover:border-neutral-700">
              <Icon.Filter size={16} />
              <span>Filter</span>
              <Icon.ArrowDown size={12} className="ml-1" />
            </button>
          </div>
          <button className="md:hidden">
            <Icon.MoreVertical size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
      <div className="content p-2.5">
        {viewType === "list" ? (
          <List />
        ) : viewType === "board" ? (
          <Board />
        ) : viewType === "calender" ? (
          <div>Calender</div>
        ) : (
          <div>Compact</div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
