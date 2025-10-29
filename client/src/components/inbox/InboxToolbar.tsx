import type { ViewTypes } from "@/types";
import { Icon } from "../icons";

interface InboxToolbarProps {
  viewType: ViewTypes;
  setViewType: (type: ViewTypes) => void;
  itemCount?: number;
}

const InboxToolbar = ({
  viewType,
  setViewType,
  itemCount,
}: InboxToolbarProps) => {
  const views = [
    { type: "list" as ViewTypes, label: "List", icon: <Icon.Menu size={18} /> },
    {
      type: "board" as ViewTypes,
      label: "Board",
      icon: <Icon.Column size={18} />,
    },
    {
      type: "calender" as ViewTypes,
      label: "Calender",
      icon: <Icon.CalenderGrid size={18} />,
    },
    {
      type: "compact" as ViewTypes,
      label: "Compact",
      icon: <Icon.Compact size={18} />,
    },
  ];

  return (
    <div className="flex items-center justify-between text-neutral-400 pb-2">
      <div className="flex items-center gap-2 md:gap-2 w-full">
        <div className="view items-center hidden lg:flex gap-1 bg-neutral-800/40  rounded-full text-neutral-600 p-0.5">
          {views.map(({ type, label }) => {
            const isActive = viewType === type;
            return (
              <button
                key={type}
                className={`flex items-center gap-1.5 text-sm py-1 px-3 rounded-full transition-all duration-200 border border-neutral-800 ${
                  isActive && "text-neutral-100 bg-neutral-800 border-neutral-700"
                }`}
                onClick={() => setViewType(type)}
              >
                {/* {icon} */}
                <span>{label}</span>
              </button>
            );
          })}
        </div>
        <div className="w-0.5 h-6 bg-neutral-700" />
        <span className="text-xs md:text-base font-semibold">
          Inbox
          <strong className="bg-neutral-800 px-1 py-0.5 rounded-sm ml-1 md:ml-2 border border-neutral-700 font-semibold">
            {itemCount}
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
          <button className="text-purple-400 items-center gap-1 border border-transparent hover:border-purple-500/50 hover:bg-purple-500/10 px-1.5 py-1 transition-all duration-300 rounded-md hidden md:flex text-sm cursor-pointer">
            <Icon.PlusSignCircle size={16} />
            <span>Add Section</span>
          </button>
          <button className="text-neutral-400 items-center gap-1 bg-neutral-800/50 px-1.5 py-1 transition-all duration-300 rounded-md hidden md:flex text-sm cursor-pointer border border-neutral-700 hover:bg-neutral-800">
            <Icon.ArrowUpDown size={14} className="mt-px" />
            <span>Sort</span>
          </button>
          <button className="text-neutral-400 items-center gap-1 bg-neutral-800/50 px-1.5 py-1 transition-all duration-300 rounded-md hidden md:flex text-sm cursor-pointer border border-neutral-700 hover:bg-neutral-800">
            <Icon.Filter size={14} className="mt-px" />
            <span>Filter</span>
          </button>
        </div>
        <button className="md:hidden">
          <Icon.MoreVertical size={20} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default InboxToolbar;
