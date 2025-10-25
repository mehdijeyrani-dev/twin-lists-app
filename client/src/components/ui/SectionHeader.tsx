import React from "react";
import EditableHeadingSection from "./EditableHeadingSection";
import { EllipsisVertical } from "lucide-react";

interface SectionHeaderProps {
  title?: string;
  count?: number;
  onEditTitle?: (newTitle: string) => void;
  onMenuClick?: () => void;
}

const SectionHeader = ({
  title,
  count,
  onEditTitle,
  onMenuClick,
}: SectionHeaderProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-2 p-3 bg-[#1e1e1e] rounded-md border border-neutral-800">
      <div className="flex w-10/12 items-center gap-3">
        <EditableHeadingSection initialText={title} onSave={onEditTitle} />
        {count! > 0 ? (
          <span className="text-sm font-medium text-neutral-400">{count}</span>
        ) : null}
      </div>
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
        aria-label="More options"
        onClick={onMenuClick}
      >
        <EllipsisVertical size={20} />
      </button>
    </div>
  );
};

export default SectionHeader;
