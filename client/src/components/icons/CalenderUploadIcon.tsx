import type { IconProps } from "@/types/icon";
import BaseIcon from "./BaseIcon";

const CalenderUploadIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M15 16.5C15.4915 15.9943 16.7998 14 17.5 14M20 16.5C19.5085 15.9943 18.2002 14 17.5 14M17.5 14V22" />
      <path d="M18 2V4M6 2V4" />
      <path d="M12.5 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.4267 5.62803 21.4957 7.63364 21.4997 11.5" />
      <path d="M3 8H21" />
    </BaseIcon>
  );
};

export default CalenderUploadIcon;
