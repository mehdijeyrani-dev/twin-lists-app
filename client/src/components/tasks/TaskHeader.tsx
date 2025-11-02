import type { Task } from "@/types/task";
import React from "react";
import TaskDetails from "./TaskDetails";
import TaskLabels from "./TaskLabels";

interface TaskHeaderProps {
  task: Task;
}

const TaskHeader: React.FC<TaskHeaderProps> = ({ task }) => {
  return (
    <div className="flex items-start gap-2">
      {/* Checkbox */}
      <div className="w-5 h-5 md:w-6 md:h-6 aspect-square border border-neutral-100 rounded-full" />
      {/* Content */}
      <div className="w-full flex flex-col gap-1">
        {/* Title */}
        <h2 className="text-sm font-semibold md:text-base">{task.title}</h2>
        {/* Details */}
        <TaskDetails task={task} />
        {/* Labels */}
        <TaskLabels labels={task.labels} />
        {/* Category name */}
        <p className="text-xs md:text-sm text-neutral-400">{task.project}</p>
      </div>
    </div>
  );
};

export default TaskHeader;
