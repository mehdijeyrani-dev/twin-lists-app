import type { IconProps } from "@/types/icon";
import BaseIcon from "./BaseIcon";

const PlusSignCircleIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M12 8V16M16 12H8" />
      <circle cx="12" cy="12" r="10" />
    </BaseIcon>
  );
};

export default PlusSignCircleIcon;
