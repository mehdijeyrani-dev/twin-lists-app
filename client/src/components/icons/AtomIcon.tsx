import type { IconProps } from "@/types/icon";

const AtomIcon = ({ size = 24, strokeWidth = 1.5, ...rest }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle
        cx="12"
        cy="12"
        r="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 9H21.99M2.00995 9H2M12.005 22H11.995"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.55556 21C4.47364 19.4999 2.37683 16.5285 2 13.1273M16.4444 21C19.5264 19.4999 21.6232 16.5285 22 13.1273M5.55555 4.25658C9.23956 1.24781 14.5382 1.24781 18.2222 4.25658"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AtomIcon;
