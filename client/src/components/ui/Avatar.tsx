import { getAvatarColor, getInitials } from "@/utils/helpers";
import React from "react";

interface AvatarProps {
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ name }) => {
  const initials = getInitials(name);
  const colorClass = getAvatarColor(name);

  return (
    <div
      className={`w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-full text-white text-sm md:text-base font-semibold ${colorClass}`}
    >
      {initials}
    </div>
  );
};

export default Avatar;
