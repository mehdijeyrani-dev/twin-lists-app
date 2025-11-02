import type { Task } from "@/types/task";
import React from "react";
import { formatTaskDate } from "@/utils/helpers/date";
import { Icon } from "../icons";
import TaskAssignees from "./TaskAssignees";

interface TaskFooterProps {
  task: Task;
}

const TaskFooter: React.FC<TaskFooterProps> = ({ task }) => {
  return (
    <div className="flex items-center justify-between">
      {/* Assignee */}
      <TaskAssignees assignees={task.assignee} />

      {/* Date And Message */}
      <div className="flex items-center gap-2 text-neutral-400">
        <span className="text-xs md:text-sm">{formatTaskDate(task)}</span>
        <div className="w-px h-4 bg-neutral-400" />
        <div className="flex items-center gap-1">
          <Icon.Message size={14} />
          <span className="text-xs">4</span>
        </div>
      </div>
    </div>
  );
};

export default TaskFooter;
