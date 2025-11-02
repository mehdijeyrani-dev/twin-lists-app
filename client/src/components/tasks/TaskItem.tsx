import type { Task } from "@/types/task";
import React from "react";
import TaskHeader from "./TaskHeader";
import TaskProgress from "./TaskProgress";
import TaskFooter from "./TaskFooter";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div
      className="w-full border border-neutral-700 bg-[#1e1e1e] p-2 rounded-md"
      key={task.id}
    >
      <TaskHeader task={task} />

      {(task.subtasks?.filter((sub) => sub.status === "done").length > 0 ||
        task.subtasks) && (
        <div className="flex flex-col gap-2 mt-2">
          <TaskProgress task={task} />
          <hr className="border-neutral-700" />
          <TaskFooter task={task} />
        </div>
      )}
    </div>
  );
};

export default TaskItem;
