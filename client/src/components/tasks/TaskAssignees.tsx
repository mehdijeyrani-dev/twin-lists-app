import React from "react";
import Avatar from "../ui/Avatar";

interface TaskAssigneesProps {
  assignees: string[];
}

const TaskAssignees: React.FC<TaskAssigneesProps> = ({ assignees }) => {
  if (!assignees || assignees.length === 0) return null;

  return (
    <div className="flex -space-x-4">
      {assignees.slice(0, 3).map((person, index) => (
        <div key={index} className="border-3 border-[#1e1e1e] rounded-full">
          <Avatar name={person} />
        </div>
      ))}
      {assignees.length > 3 && (
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-700 text-xs text-white border-2 border-[#1e1e1e]">
          +{assignees.length - 3}
        </div>
      )}
    </div>
  );
};

export default TaskAssignees;
