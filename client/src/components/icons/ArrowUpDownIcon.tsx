import BaseIcon from "./BaseIcon";
import type { IconProps } from "@/types/icon";

const ArrowUpDownIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M7 5V20" />
      <path d="M17 18.9999L17 3.99988" />
      <path d="M4 7L6.29289 4.53708C6.62623 4.17903 6.79289 4 7 4C7.20711 4 7.37377 4.17903 7.70711 4.53708L10 7" />
      <path d="M14 17L16.2929 19.4629C16.6262 19.821 16.7929 20 17 20C17.2071 20 17.3738 19.821 17.7071 19.4629L20 17" />
    </BaseIcon>
  );
};

export default ArrowUpDownIcon;
