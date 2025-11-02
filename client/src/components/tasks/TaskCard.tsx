import React from "react";
import TaskItem from "./TaskItem";
import { tasks } from "@/data/tasks";

const TaskCard = () => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskCard;
