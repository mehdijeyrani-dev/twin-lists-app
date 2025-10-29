export function getInitials(name: string): string {
  if (!name) return "";
  const words = name.trim().split(" ");
  const initials = words
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
  return initials;
}

export function getAvatarColor(name: string): string {
  if (!name) return "bg-neutral-800";
  const colors = [
    "bg-green-800",
    "bg-blue-800",
    "bg-amber-800",
    "bg-rose-800",
    "bg-purple-800",
    "bg-cyan-800",
    "bg-lime-800",
    "bg-teal-800",
    "bg-pink-800",
    "bg-orange-800",
  ];
  const sum = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = sum % colors.length;
  return colors[index];
}
