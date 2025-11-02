import React from "react";

interface TaskLabelsProps {
  labels: string[];
}

const TaskLabels: React.FC<TaskLabelsProps> = ({ labels }) => {
  if (!labels || labels.length === 0) return null;

  return (
    <div className="flex items-center gap-1">
      {labels.slice(0, 3).map((label, index) => (
        <span
          key={index}
          className="text-xs md:text-sm bg-rose-500/10 text-rose-400 px-1 py-0.5 rounded"
        >
          {label}
        </span>
      ))}{" "}
    </div>
  );
};

export default TaskLabels;
