import { useUIStore } from "@/store/useUIStore";
import React from "react";

const AddTaskModal = () => {
  const { closeAddTaskModal } = useUIStore();
  return (
    <div className="w-6/12 h-40 bg-neutral-800 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <button onClick={closeAddTaskModal}>Exit</button>
    </div>
  );
};

export default AddTaskModal;
