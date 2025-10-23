import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Calendar1,
  CalendarArrowUp,
  Inbox,
  Search,
  Target,
} from "lucide-react";

const links = [
  { to: "/today", icon: <Calendar1 />, label: "Today" },
  { to: "/upcoming", icon: <CalendarArrowUp />, label: "Upcoming" },
  { to: "/search", icon: <Search />, label: "Search" },
  { to: "/", icon: <Inbox />, label: "Inbox" },
  { to: "/workspaces", icon: <Target />, label: "Workspaces" },
];

const MobileNavbar = () => {
  const location = useLocation();

  const activeIndex = links.findIndex((link) => {
    if (link.to === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(link.to);
  });

  return (
    <div className="w-full h-20 -mb-2 fixed bottom-0 left-0 md:hidden bg-neutral-900">
      <nav className="grid grid-cols-5 relative items-center">
        {/* Animated background */}
        <div
          className="absolute top-0 left-0 w-1/5 h-full transition-transform duration-300 ease-in-out z-0 before:absolute before:size-14 before:content-[''] before:bg-purple-500/10 before:-top-2 before:left-1/2 before:-translate-x-1/2 before:rounded-full"
          style={{
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              `text-xs p-2 flex flex-col justify-center items-center gap-2 transition-all duration-300 relative z-10 ${
                isActive ? "text-purple-500" : "text-neutral-400"
              }`
            }
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default MobileNavbar;
