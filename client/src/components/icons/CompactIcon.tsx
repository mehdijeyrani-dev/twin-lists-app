import type { IconProps } from "@/types/icon";
import BaseIcon from "./BaseIcon";

const CompactIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M4 4.5L20 4.5" />
      <path d="M4 14.5L20 14.5" />
      <path d="M4 9.5L20 9.5" />
      <path d="M4 19.5L20 19.5" />
    </BaseIcon>
  );
};

export default CompactIcon;
