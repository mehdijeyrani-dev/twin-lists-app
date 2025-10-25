import { tasks } from "@/data/tasks";
import { getLabelColor } from "@/utils/colors/labelColors";
import { Calendar, Circle, Flag, GitMerge } from "lucide-react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const List = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-5 h-[calc(100vh-14rem)]">
      <SimpleBar style={{ maxHeight: "100%" }}>
        <div className="flex flex-col gap-2.5 p-2.5">
          {tasks.map((task) => (
            <div
              className="w-full bg-[#1e1e1e] p-2.5 rounded-md border border-neutral-700 flex flex-col gap-6"
              key={task.title}
            >
              <div className="flex gap-2">
                <div className="left">
                  <Circle />
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
                </div>
              </div>
              <div className="relative flex flex-col gap-2">
                <p className="flex items-center justify-between text-xs">
                  <span>Progress</span>
                  <span>75%</span>
                </p>
                <div className="w-full h-1 bg-neutral-800 before:content-[''] relative before:absolute before:top-0 before:left-0 before:w-1/4 before:h-full before:bg-purple-400"></div>
              </div>
            </div>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
};

export default List;
