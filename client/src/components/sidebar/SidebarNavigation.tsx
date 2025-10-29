import React from "react";
import SidebarAction from "./SidebarAction";
import SidebarNav from "./SidebarNav";
import SidebarWorkspace from "./SidebarWorkspace";

const SidebarNavigation = () => {
  return (
    <div className="flex-1 overflow-hidden grid grid-rows-[auto_auto_auto_auto_1fr] gap-y-2">
      <SidebarAction />
      <hr className="border-neutral-800" />
      <SidebarNav />
      <hr className="border-neutral-800" />
      <SidebarWorkspace />
    </div>
  );
};

export default SidebarNavigation;
