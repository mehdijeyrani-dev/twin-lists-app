export type Status = "todo" | "in progress" | "done";
export type Priority = "low" | "medium" | "high" | "crucial";
export type Privacy = "public" | "private" | "team";

export interface Subtask {
  id: string;
  title: string;
  status: Status;
  assignee: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  deadline?: string | null;
  reminder: string | null;
  assignee: string[];
  team: string[];
  project: string | null;
  labels: string[];
  privacy: Privacy;
  subtasks: Subtask[];
  createdAt?: string;
  updatedAt?: string;
}
