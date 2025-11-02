import type { Task } from "@/types/task";
import React from "react";

interface TaskProgressProps {
  task: Task;
}

const TaskProgress: React.FC<TaskProgressProps> = ({ task }) => {
  if (!task.subtasks || task.subtasks.length === 0) return null;

  const total = task.subtasks.length;
  const done = task.subtasks.filter((sub) => sub.status === "done").length;
  const percent = Math.round((done / total) * 100);

  if (done === 0) return null;

  return (
    <div className="flex flex-col gap-2 mt-2">
      <div className="flex flex-col gap-1">
        {/* Description  */}
        <div className="flex items-center justify-between text-xs md:text-sm text-neutral-400">
          <span>Progress</span>
          <span>{percent}%</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-1 bg-neutral-700 rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-purple-400 transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskProgress;
