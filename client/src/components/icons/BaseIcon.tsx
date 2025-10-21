import type { IconProps } from "@/types/icon";
import React from "react";

const BaseIcon: React.FC<IconProps & { children: React.ReactNode }> = ({
  size = 24,
  strokeWidth = 1.5,
  children,
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
