import type { IconProps } from "@/types/icon";
import BaseIcon from "./BaseIcon";

const ArrowDownIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" />
    </BaseIcon>
  );
};

export default ArrowDownIcon;
