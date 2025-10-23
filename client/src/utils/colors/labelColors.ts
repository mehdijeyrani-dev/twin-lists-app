const colorPalette = [
  "bg-rose-500/10 text-rose-500",
  "bg-green-500/10 text-green-500",
  "bg-fuchsia-500/10 text-fuchsia-500",
  "bg-sky-500/10 text-sky-600",
  "bg-blue-500/10 text-blue-500",
  "bg-violet-500/10 text-violet-600",
  "bg-orange-500/10 text-orange-600",
  "bg-purple-500/10 text-purple-500",
  "bg-yellow-500/10 text-yellow-500",
];

const defaultLabelColor = "bg-neutral-800/50 text-neutral-400";

const hashString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
};

export const getLabelColor = (label: string) => {
  const index = hashString(label) % colorPalette.length;
  return colorPalette[index] || defaultLabelColor;
};
