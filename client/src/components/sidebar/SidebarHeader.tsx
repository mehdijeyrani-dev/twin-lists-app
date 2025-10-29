import { useUIStore } from "@/store/useUIStore";

interface SidebarHeaderProps {
  avatarImg?: string;
  name?: string;
}

const SidebarHeader = ({ avatarImg, name = "User" }: SidebarHeaderProps) => {
  const {isSidebarOpen} = useUIStore();
  return (
    <div className={`flex items-center gap-2.5 p-2.5 ${isSidebarOpen && "mr-4"}`}>
      <img
        src={avatarImg}
        alt="Avatar"
        width={36}
        className="aspect-square object-contain rounded-full border border-neutral-700"
      />
      <span className="text-neutral-300">{name}</span>
    </div>
  );
};

export default SidebarHeader;
