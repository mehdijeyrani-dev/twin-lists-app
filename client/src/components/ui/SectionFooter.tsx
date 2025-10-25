import React from "react";
import { Icon } from "../icons";

const SectionFooter = () => {
  return (
    <div className="footer p-3 bg-purple-500/10 text-purple-900 border rounded-md">
      <button className="flex items-center gap-2">
        <Icon.Add strokeWidth={2} />
        <span className="font-semibold">Add task</span>
      </button>
    </div>
  );
};

export default SectionFooter;
