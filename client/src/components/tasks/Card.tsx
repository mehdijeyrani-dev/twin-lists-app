import React from "react";
import { Icon } from "../icons";
import { tasks } from "@/data/tasks";
import Avatar from "../ui/Avatar";
import { Flag, GitMerge } from "lucide-react";
import { formatTaskDate } from "@/utils/helpers/date";

const Card = () => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <div
          className="w-full border border-neutral-700 bg-[#1e1e1e] p-2 rounded-md"
          key={task.id}
        >
          {/* Top */}
          <div className="flex items-start gap-2">
            {/* Top Left = Checkbox */}
            <div className="w-5 h-5 md:w-6 md:h-6 aspect-square border border-neutral-100 rounded-full" />
            {/* Top Right = Content */}
            <div className="w-full flex flex-col gap-1">
              {/* Title */}
              <h2 className="text-sm font-semibold md:text-base">
                {task.title}
              </h2>
              {/* Details */}
              <div className="w-full h-4 details flex items-center gap-4">
                {/* Deadline */}
                {task.deadline && (
                  <div className="flex items-center gap-0.5">
                    <Icon.Calender size={14} className="text-neutral-400" />
                    <span className="text-xs md:text-sm text-neutral-400">
                      {new Date(task.deadline).toLocaleDateString("en-US", {
                        month: "numeric",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                )}
                {/* sub tasks */}
                {task.subtasks && task.subtasks.length > 0 && (
                  <div className="flex items-center gap-0.5">
                    <GitMerge size={14} className="text-neutral-400" />
                    <span className="text-xs md:text-sm text-neutral-400">
                      {
                        task.subtasks.filter((sub) => sub.status === "done")
                          .length
                      }
                      /{task.subtasks.length}
                    </span>
                  </div>
                )}
                {/* Priority */}
                <div className="flex items-center gap-0.5">
                  <Flag size={14} className="text-neutral-400" />
                  <span className="text-xs md:text-sm text-neutral-400 capitalize">
                    {task.priority}
                  </span>
                </div>
              </div>
              {/* Labels */}
              <div className="flex items-center gap-1">
                {task.labels.slice(0, 3).map((label, index) => (
                  <span
                    key={index}
                    className="text-xs md:text-sm bg-rose-500/10 text-rose-400 px-1 py-0.5 rounded"
                  >
                    {label}
                  </span>
                ))}{" "}
              </div>
              {/* Category name */}
              <p className="text-xs md:text-sm text-neutral-400">
                {task.project}
              </p>
            </div>
          </div>
          {/* Bottom */}
          <div className="flex flex-col gap-2 mt-2">
            {/* Progress Line */}
            {task.subtasks &&
              task.subtasks.filter((sub) => sub.status === "done").length > 0 &&
              (() => {
                const total = task.subtasks.length;
                const done = task.subtasks.filter(
                  (sub) => sub.status === "done"
                ).length;
                const percent = Math.round((done / total) * 100);

                return (
                  <div className="flex flex-col gap-1">
                    {/* Desc */}
                    <div className="flex items-center justify-between text-xs md:text-sm text-neutral-400">
                      <span>Progress</span>
                      <span>{percent}%</span>
                    </div>
                    {/* Line */}
                    <div className="w-full h-1 bg-neutral-700 rounded-full overflow-hidden relative">
                      <div
                        className="absolute top-0 left-0 h-full bg-purple-400 transition-all duration-300"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })()}
            {/* Line */}
            <hr className="border-neutral-700" />
            {/* Bottom */}
            <div className="flex items-center justify-between">
              {/* Assignee */}
              <div className="flex -space-x-4">
                {task.assignee.slice(0, 3).map((person, index) => (
                  <div
                    key={index}
                    className="border-3 border-[#1e1e1e] rounded-full"
                  >
                    <Avatar name={person} />
                  </div>
                ))}
                {task.assignee.length > 3 && (
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-700 text-xs text-white border-2 border-[#1e1e1e]">
                    +{task.assignee.length - 3}
                  </div>
                )}
              </div>

              {/* Date And Message */}
              <div className="flex items-center gap-2 text-neutral-400">
                <span className="text-xs md:text-sm">
                  {formatTaskDate(task)}
                </span>
                <div className="w-px h-4 bg-neutral-400" />
                <div className="flex items-center gap-1">
                  <Icon.Message size={14} />
                  <span className="text-xs">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
