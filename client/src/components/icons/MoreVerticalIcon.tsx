import type { IconProps } from "@/types/icon";
import BaseIcon from "./BaseIcon";

const MoreVerticalIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M11.992 12H12.001" />
      <path d="M11.9842 18H11.9932" />
      <path d="M11.9998 6H12.0088" />
    </BaseIcon>
  );
};

export default MoreVerticalIcon;
