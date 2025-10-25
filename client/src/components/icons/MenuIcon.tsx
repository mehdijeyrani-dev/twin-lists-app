import type { IconProps } from "@/types/icon";
import BaseIcon from "./BaseIcon";

const MenuIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M4 5L20 5" />
      <path d="M4 12L20 12" />
      <path d="M4 19L20 19" />
    </BaseIcon>
  );
};

export default MenuIcon;
