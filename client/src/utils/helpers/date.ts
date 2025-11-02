export function formatTaskDate(task: {
  createdAt?: string;
  updatedAt?: string;
}) {
  const dateToUse =
    task.updatedAt && task.updatedAt !== task.createdAt
      ? task.updatedAt
      : task.createdAt;

  if (!dateToUse) return "-";

  return new Date(dateToUse).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}
