import { Icon } from "@/components/icons";
import React from "react";

const test = () => {
  return (
    <>
      <div className="content">
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

      <SidebarProfile
        isSidebarOpen={isSidebarOpen}
        avatarImg={avatarImg}
        name="Mehdi Jeyrani"
      />
      <SidebarAction
        isSidebarOpen={isSidebarOpen}
        onOpenAddTaskModal={openAddTaskModal}
        onOpenAddTeamModal={openAddTeamModal}
        onOpenSearchModal={openSearchModal}
      />
      <hr className="border-neutral-800" />
      <div className="flex flex-col gap-2 overflow-y-auto flex-1">
        <SidebarNav isSidebarOpen={isSidebarOpen} />
        <WorkspacePanel isSidebarOpen={isSidebarOpen} />
      </div>
      <AccountControls isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default test;
