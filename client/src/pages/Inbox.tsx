import {
  CalendarCheck,
  Circle,
  EllipsisVertical,
  GitMerge,
  MessageSquare,
  Plus,
  Search,
} from "lucide-react";
import avatarImg from "@/assets/images/avatar01.jpg";
import { getLabelColor } from "@/utils/colors/labelColors";
import { priorityColors } from "@/utils/colors/priorityColors";

const tasks = [
  {
    id: "task-001",
    title: "Design user onboarding flow",
    description:
      "Create wireframe and user journey for the new onboarding experience.",
    status: "todo",
    priority: "High priority",
    deadline: "2025-11-05T23:59:59Z",
    reminder: "2025-11-03T09:00:00Z",
    assignee: "mehdi.jeyrani@example.com",
    team: "Product Design",
    project: "User Experience Revamp",
    labels: ["design", "onboarding", "ux"],
    privacy: "team",
    subtasks: [
      {
        id: "subtask-001",
        title: "Sketch wireframe",
        status: "done",
        assignee: "mehdi.jeyrani@example.com",
      },
      {
        id: "subtask-002",
        title: "Create user journey map",
        status: "in progress",
        assignee: "designer@example.com",
      },
      {
        id: "subtask-003",
        title: "Review flow with PM",
        status: "todo",
        assignee: "pm@example.com",
      },
    ],
  },
  {
    id: "task-002",
    title: "Implement API rate limiting",
    description:
      "Add middleware to enforce rate limits per user/IP to prevent abuse.",
    status: "in progress",
    priority: "Medium priority",
    reminder: "2025-10-28T10:00:00Z",
    assignee: "backend.dev@example.com",
    team: "Backend Engineering",
    project: "",
    labels: ["api", "security", "middleware"],
    privacy: "private",
  },
  {
    id: "task-003",
    title: "Write release notes for v2.4",
    description:
      "Summarize new features, bug fixes, and known issues for the upcoming release.",
    status: "done",
    priority: "Low priority",
    deadline: "2025-10-20T12:00:00Z",
    reminder: "2025-10-18T14:00:00Z",
    assignee: "tech.writer@example.com",
    team: "Documentation",
    project: "Product Release v2.4",
    labels: ["docs", "release", "communication"],
    privacy: "public",
  },
  {
    id: "task-004",
    title: "Review Q4 marketing campaign assets",
    description:
      "Check visuals, copy, and CTAs for alignment with brand guidelines.",
    status: "todo",
    priority: "High priority",
    deadline: "2025-11-10T16:00:00Z",
    reminder: "2025-11-08T11:00:00Z",
    assignee: "mehdi.jeyrani@example.com",
    team: "Marketing",
    project: "Q4 Campaign",
    labels: ["marketing", "review", "branding"],
    privacy: "team",
  },
  {
    id: "task-005",
    title: "Fix mobile layout overflow on task detail page",
    description:
      "Ensure content doesn’t cause horizontal scroll on small screens.",
    status: "in progress",
    priority: "Crucial priority",
    deadline: "2025-10-25T18:00:00Z",
    reminder: "2025-10-24T09:00:00Z",
    assignee: "frontend.dev@example.com",
    team: "Frontend Engineering",
    project: "UI Polish",
    labels: ["bug", "mobile", "ui", "ux", "items", "car", "finish"],
    privacy: "team",
    subtasks: [
      {
        id: "subtask-004",
        title: "Check overflow on iPhone 14",
        status: "done",
        assignee: "frontend.dev@example.com",
      },
      {
        id: "subtask-005",
        title: "Fix CSS for small screens",
        status: "done",
        assignee: "frontend.dev@example.com",
      },
    ],
  },
];

const Inbox = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2.5 overflow-hidden">
      <div className="shrink-0 flex items-center justify-between md:px-2.5 header">
        <div className="relative h-8 rounded-md overflow-hidden border border-neutral-700 hidden md:block min-w-10 lg:min-w-md ">
          <input type="text" className="bg-neutral-800/50 w-full h-full pl-8" />
          <Search
            size={18}
            className="absolute top-1/2 -translate-y-1/2 left-2"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center gap-1 px-2.5 py-1.5 bg-purple-500/10 rounded-md text-purple-500 cursor-pointer hover:bg-purple-500/25 transition-all duration-300">
            <Plus size={16} strokeWidth={3} />
            <span className="text-sm font-semibold">New Board</span>
          </button>
          <button className="flex items-center justify-center gap-1 px-2.5 py-1.5 bg-purple-500/10 rounded-md text-purple-500 cursor-pointer hover:bg-purple-500/25 transition-all duration-300">
            <Plus size={16} strokeWidth={3} />
            <span className="text-sm font-semibold">New Board</span>
          </button>
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-auto scrollbar-hide md:px-2.5 mb-20 md:mb-0 content">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="w-full sm:w-80 shrink-0 section flex flex-col gap-4 shadow-xl">
            <h1 className="py-3 px-4 border border-neutral-800 rounded-md bg-purple-600 mt-2 title-section sticky top-0 shadow-2xl z-50">
              Todo
            </h1>
            {tasks.map((task) => (
              <div
                key={task.id}
                className="p-4 border border-neutral-800 bg-neutral-800/10 rounded-md flex flex-col gap-1 hover:bg-neutral-800/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-2 header">
                  <div className="flex items-center gap-2">
                    {task.labels.slice(0, 3).map((label, index) => (
                      <span
                        className={`px-2 py-1 rounded-sm text-xs ${getLabelColor(
                          label
                        )}`}
                        key={index}
                      >
                        # {label}
                      </span>
                    ))}
                  </div>
                  <button className="">
                    <EllipsisVertical size={16} strokeWidth={1} />
                  </button>
                </div>
                <div className="content flex flex-col gap-2">
                  <div className="flex items-start gap-2 mt-2">
                    <button className="cursor-pointer">
                      <Circle
                        size={20}
                        className={`text-${priorityColors[task.priority]}`}
                      />
                    </button>
                    <h2 className="title font-semibold -mt-1">{task.title}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    {task.deadline && (
                      <div className="flex items-center gap-1 text-neutral-500">
                        <CalendarCheck size={14} strokeWidth={1} />
                        <span className="text-xs">
                          {new Date(task.deadline).toLocaleString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    )}
                    {task.subtasks && (
                      <div className="flex items-center gap-1 text-xs text-neutral-500">
                        <GitMerge size={14} strokeWidth={1} />
                        <span>
                          {
                            task.subtasks.filter((sub) => sub.status === "done")
                              .length
                          }
                          /{task.subtasks.length}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="labels text-xs text-neutral-500 flex items-center justify-end gap-2">
                    <span>{task.project || "Inbox"}</span>
                  </p>
                </div>
                {task.subtasks &&
                  task.subtasks.length > 0 &&
                  (() => {
                    const completed = task.subtasks.filter(
                      (sub) => sub.status === "done"
                    ).length;
                    const total = task.subtasks.length;
                    const progress = Math.round((completed / total) * 100);

                    return (
                      <>
                        <div className="flex flex-col progress">
                          <span className="text-xs font-semibold block">
                            Progress
                          </span>
                          <div className="w-full h-1 bg-neutral-800 my-2 relative rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-${
                                priorityColors[task.priority]
                              } absolute top-0 left-0 transition-all duration-300`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <span className="text-xs block text-end">
                            {progress}%
                          </span>
                        </div>
                        <hr className="my-1 border-neutral-800" />
                      </>
                    );
                  })()}
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <img
                        src={avatarImg}
                        alt="avatar"
                        className="w-6 rounded-full border-2 border-neutral-500"
                      />
                      <img
                        src={avatarImg}
                        alt="avatar"
                        className="w-6 rounded-full border-2 -ml-4 border-neutral-500"
                      />
                      <img
                        src={avatarImg}
                        alt="avatar"
                        className="w-6 rounded-full border-2 -ml-4 border-neutral-500"
                      />
                      <img
                        src={avatarImg}
                        alt="avatar"
                        className="w-6 rounded-full border-2 -ml-4 border-neutral-500"
                      />
                    </div>
                    <p className="text-xs text-neutral-500">Des 21, 2025</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1">
                      <MessageSquare size={12} strokeWidth={1} />
                      <span className="text-xs">2</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full sm:w-80 shrink-0 section flex flex-col gap-4 shadow-xl">
            <h1 className="py-3 px-4 border border-neutral-800 rounded-md bg-purple-600 mt-2 title-section sticky top-0 shadow-2xl z-50">
              In Progress
            </h1>
            <div className="w-full sm:w-80 h-full shrink-0 section flex flex-col gap-4 shadow-xl">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 border border-neutral-800 bg-neutral-800/10 rounded-md flex flex-col gap-1 hover:bg-neutral-800/70 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2 header">
                    <div className="flex items-center gap-2">
                      {task.labels.slice(0, 3).map((label, index) => (
                        <span
                          className={`px-2 py-1 rounded-sm text-xs ${getLabelColor(
                            label
                          )}`}
                          key={index}
                        >
                          # {label}
                        </span>
                      ))}
                    </div>
                    <button className="">
                      <EllipsisVertical size={16} strokeWidth={1} />
                    </button>
                  </div>
                  <div className="content flex flex-col gap-2">
                    <div className="flex items-start gap-2 mt-2">
                      <button className="cursor-pointer">
                        <Circle
                          size={20}
                          className={`text-${priorityColors[task.priority]}`}
                        />
                      </button>
                      <h2 className="title font-semibold -mt-1">
                        {task.title}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      {task.deadline && (
                        <div className="flex items-center gap-1 text-neutral-500">
                          <CalendarCheck size={14} strokeWidth={1} />
                          <span className="text-xs">
                            {new Date(task.deadline).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      )}
                      {task.subtasks && (
                        <div className="flex items-center gap-1 text-xs text-neutral-500">
                          <GitMerge size={14} strokeWidth={1} />
                          <span>
                            {
                              task.subtasks.filter(
                                (sub) => sub.status === "done"
                              ).length
                            }
                            /{task.subtasks.length}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="labels text-xs text-neutral-500 flex items-center justify-end gap-2">
                      <span>{task.project || "Inbox"}</span>
                    </p>
                  </div>
                  {task.subtasks &&
                    task.subtasks.length > 0 &&
                    (() => {
                      const completed = task.subtasks.filter(
                        (sub) => sub.status === "done"
                      ).length;
                      const total = task.subtasks.length;
                      const progress = Math.round((completed / total) * 100);

                      return (
                        <>
                          <div className="flex flex-col progress">
                            <span className="text-xs font-semibold block">
                              Progress
                            </span>
                            <div className="w-full h-1 bg-neutral-800 my-2 relative rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-${
                                  priorityColors[task.priority]
                                } absolute top-0 left-0 transition-all duration-300`}
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                            <span className="text-xs block text-end">
                              {progress}%
                            </span>
                          </div>
                          <hr className="my-1 border-neutral-800" />
                        </>
                      );
                    })()}
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <img
                          src={avatarImg}
                          alt="avatar"
                          className="w-6 rounded-full border-2 border-neutral-500"
                        />
                        <img
                          src={avatarImg}
                          alt="avatar"
                          className="w-6 rounded-full border-2 -ml-4 border-neutral-500"
                        />
                        <img
                          src={avatarImg}
                          alt="avatar"
                          className="w-6 rounded-full border-2 -ml-4 border-neutral-500"
                        />
                        <img
                          src={avatarImg}
                          alt="avatar"
                          className="w-6 rounded-full border-2 -ml-4 border-neutral-500"
                        />
                      </div>
                      <p className="text-xs text-neutral-500">Des 21, 2025</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1">
                        <MessageSquare size={12} strokeWidth={1} />
                        <span className="text-xs">2</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-80 shrink-0 section flex flex-col gap-4 shadow-xl">
            <div className="w-full sm:w-80 h-full shrink-0 section flex flex-col gap-4 shadow-xl">
              <h1 className="py-3 px-4 border border-neutral-800 rounded-md bg-purple-600 mt-2 title-section sticky top-0 shadow-2xl z-50">
                Review
              </h1>
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 border border-neutral-800 bg-neutral-800/10 rounded-md flex flex-col gap-1 hover:bg-neutral-800/70 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2 header">
                    <div className="flex items-center gap-2">
                      {task.labels.slice(0, 3).map((label, index) => (
                        <span
                          className={`px-2 py-1 rounded-sm text-xs ${getLabelColor(
                            label
                          )}`}
                          key={index}
                        >
                          # {label}
                        </span>
                      ))}
                    </div>
                    <button className="">
                      <EllipsisVertical size={16} strokeWidth={1} />
                    </button>
                  </div>
                  <div className="content flex flex-col gap-2">
                    <div className="flex items-start gap-2 mt-2">
                      <button className="cursor-pointer">
                        <Circle
                          size={20}
                          className={`text-${priorityColors[task.priority]}`}
                        />
                      </button>
                      <h2 className="title font-semibold -mt-1">
                        {task.title}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      {task.deadline && (
                        <div className="flex items-center gap-1 text-neutral-500">
                          <CalendarCheck size={14} strokeWidth={1} />
                          <span className="text-xs">
                            {new Date(task.deadline).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      )}
                      {task.subtasks && (
                        <div className="flex items-center gap-1 text-xs text-neutral-500">
                          <GitMerge size={14} strokeWidth={1} />
                          <span>
                            {
                              task.subtasks.filter(
                                (sub) => sub.status === "done"
                              ).length
                            }
                            /{task.subtasks.length}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="labels text-xs text-neutral-500 flex items-center justify-end gap-2">
                      <span>{task.project || "Inbox"}</span>
                    </p>
                  </div>
                  {task.subtasks &&
                    task.subtasks.length > 0 &&
                    (() => {
                      const completed = task.subtasks.filter(
                        (sub) => sub.status === "done"
                      ).length;
                      const total = task.subtasks.length;
                      const progress = Math.round((completed / total) * 100);

                      return (
                        <>
                          <div className="flex flex-col progress">
                            <span className="text-xs font-semibold block">
                              Progress
                            </span>
                            <div className="w-full h-1 bg-neutral-800 my-2 relative rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-${
                                  priorityColors[task.priority]
                                } absolute top-0 left-0 transition-all duration-300`}
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                            <span className="text-xs block text-end">
                              {progress}%
                            </span>
                          </div>
                          <hr className="my-1 border-neutral-800" />
                        </>
                      );
                    })()}
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <img
                          src={avatarImg}
                          alt="avatar"
                          className="w-6 rounded-full border-2 border-neutral-500"
                        />
                        <img
                          src={avatarImg}
                          alt="avatar"
                          className="w-6 rounded-full border-2 -ml-4 border-neutral-500"
                        />
                        <img
                          src={avatarImg}
                          alt="avatar"
                          className="w-6 rounded-full border-2 -ml-4 border-neutral-500"
                        />
                        <img
                          src={avatarImg}
                          alt="avatar"
                          className="w-6 rounded-full border-2 -ml-4 border-neutral-500"
                        />
                      </div>
                      <p className="text-xs text-neutral-500">Des 21, 2025</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1">
                        <MessageSquare size={12} strokeWidth={1} />
                        <span className="text-xs">2</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
