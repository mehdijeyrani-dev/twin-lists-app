import React from "react";

interface SidebarProfileProps {
  avatarImg?: string;
  name?: string;
  isSidebarOpen: boolean;
}

const SidebarProfile = ({
  avatarImg,
  name = "User",
  isSidebarOpen,
}: SidebarProfileProps) => {
  return (
    <div
      className={`flex justify-between items-center rounded-md border border-neutral-800 p-2.5 transition-all ${
        isSidebarOpen ? "opacity-100 duration-1000 mr-2.5" : "opacity-0 mr-0"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <img
          src={avatarImg}
          alt="Avatar"
          width={36}
          className="aspect-square object-contain rounded-full border border-neutral-700"
        />
        <span className="font-semibold text-sm">{name}</span>
      </div>
    </div>
  );
};

export default SidebarProfile;
