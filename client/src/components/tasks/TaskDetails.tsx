import type { Task } from "@/types/task";
import React from "react";
import { Icon } from "../icons";
import { Flag, GitMerge } from "lucide-react";

interface TaskDetailsProps {
  task: Task;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ task }) => {
  return (
    <div className="w-full h-4 details flex items-center gap-4">
      {/* Deadline */}
      {task.deadline && (
        <div className="flex items-center gap-0.5">
          <Icon.Calender size={14} className="text-neutral-400" />
          <span className="text-xs md:text-sm text-neutral-400">
            {new Date(task.deadline).toLocaleDateString("en-US", {
              month: "numeric",
              day: "2-digit",
              year: "numeric",
            })}
          </span>
        </div>
      )}
      {/* sub tasks */}
      {task.subtasks && task.subtasks.length > 0 && (
        <div className="flex items-center gap-0.5">
          <GitMerge size={14} className="text-neutral-400" />
          <span className="text-xs md:text-sm text-neutral-400">
            {task.subtasks.filter((sub) => sub.status === "done").length}/
            {task.subtasks.length}
          </span>
        </div>
      )}
      {/* Priority */}
      <div className="flex items-center gap-0.5">
        <Flag size={14} className="text-neutral-400" />
        <span className="text-xs md:text-sm text-neutral-400 capitalize">
          {task.priority}
        </span>
      </div>
    </div>
  );
};

export default TaskDetails;
