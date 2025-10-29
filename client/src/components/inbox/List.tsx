import { tasks } from "@/data/tasks";
import { getLabelColor } from "@/utils/colors/labelColors";
import { Calendar, Flag, GitMerge } from "lucide-react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Avatar from "../ui/Avatar";
import { Icon } from "../icons";

const List = () => {
  return (
    <div className="w-full mt-2 md:mt-5 h-[calc(100dvh-14rem)]">
      <SimpleBar style={{ maxHeight: "100%" }}>
        <div className="flex flex-col gap-2.5 px-5 max-w-4xl mx-auto">
          {tasks.map((task) => (
            <div
              className="w-full bg-[#1e1e1e] p-2.5 rounded-md border border-neutral-700 flex flex-col gap-6"
              key={task.title}
            >
              <div className="flex gap-2">
                <div className="left">
                  <div className="size-6 rounded-full border-2 border-blue-500 bg-blue-500/10"></div>
                </div>
                <div className="right flex flex-col gap-2">
                  <h2>{task.title}</h2>
                  <div className="flex sm:items-center gap-1 sm:gap-4 flex-col sm:flex-row">
                    <div className="flex items-center gap-1 deadline text-xs text-neutral-500">
                      <Calendar size={16} />
                      <span>Aug 25, 1990</span>
                    </div>
                    <div className="flex items-center gap-1 deadline text-xs text-neutral-500">
                      <GitMerge size={16} />
                      <span>3/4</span>
                    </div>
                    <div className="flex items-center gap-1 deadline text-xs text-neutral-500">
                      <Flag size={16} />
                      <span>Hight</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {task.labels.slice(0, 3).map((label, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs rounded-sm ${getLabelColor(
                          label
                        )}`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <span>{task.project}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="relative flex flex-col gap-2">
                  <p className="flex items-center justify-between text-xs text-neutral-400">
                    <span>Progress</span>
                    <span>75%</span>
                  </p>
                  <div className="w-full h-1.5 bg-neutral-800 before:content-[''] relative before:absolute before:top-0 before:left-0 before:w-1/4 before:h-full before:bg-purple-400 rounded-full overflow-hidden" />
                </div>
                <hr className="border-neutral-800" />
                <div className="flex items-center justify-between">
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
                  <div className="right flex items-center gap-2 text-neutral-400">
                    <span className="text-xs md:text-sm">Des 15, 2023</span>
                    <div className="w-px h-4 bg-neutral-400" />
                    <div className="flex items-center gap-1">
                      <Icon.Message size={14}/>
                      <span className="text-xs">4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
};

export default List;
