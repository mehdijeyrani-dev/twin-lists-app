import { Calendar, CalendarCheck, Circle, GitMerge } from "lucide-react";
import React from "react";

const deadline = "2025-10-25T18:00:00Z";
const date = new Date(deadline);

const formatted = date.toLocaleString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

const SectionMain = () => {
  return (
    <div className="max-h-[calc(100dvh-8rem)] min-h-0 overflow-y-auto flex flex-col gap-2">
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className="bg-neutral-900 p-3 rounded flex gap-2">
          <div className="">
            <div className="">
              <Circle size={20} />
            </div>
            <div className="flex flex-col gap-1 top">
              <h3 className="font-semibold mb-2">
                Fix mobile layout overflow on task detail page
              </h3>
              <div className="flex items-center gap-2 details">
                <div className="flex items-center gap-1">
                  <Calendar
                    size={14}
                    strokeWidth={1}
                    className="text-neutral-400"
                  />
                  <span className="text-xs text-neutral-400">{formatted}</span>
                </div>
                <div className="h-4 w-px bg-neutral-400" />
                <div className="flex items-center gap-1">
                  <GitMerge
                    size={14}
                    strokeWidth={1}
                    className="text-neutral-400"
                  />
                  <span className="text-xs text-neutral-400">{formatted}</span>
                </div>
                <div className="h-4 w-px bg-neutral-400" />
                <div className="flex items-center gap-1">
                  <CalendarCheck
                    size={14}
                    strokeWidth={1}
                    className="text-neutral-400"
                  />
                  <span className="text-xs text-neutral-400">{formatted}</span>
                </div>
              </div>
              <hr className="border-neutral-800 my-1" />
              <span className="main-container text-end text-sm self-end bg-neutral-800 px-2 py-1 rounded-sm">
                Inbox
              </span>
            </div>

            <hr className="border-neutral-800 my-1" />
            <div className="">test</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionMain;
