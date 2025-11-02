import { useAuth } from "@/contexts/auth/useAuth";
import { useUIStore } from "@/store/useUIStore";

interface SidebarHeaderProps {
  avatarImg?: string;
}

const SidebarHeader = ({ avatarImg }: SidebarHeaderProps) => {
  const { user } = useAuth();
  const username = user?.username;

  const { isSidebarOpen } = useUIStore();
  return (
    <div
      className={`flex items-center gap-2.5 p-2.5 ${isSidebarOpen && "mr-4"}`}
    >
      <img
        src={avatarImg}
        alt="Avatar"
        width={36}
        className="aspect-square object-contain rounded-full border border-neutral-700"
      />
      <span className="text-neutral-300 capitalize">{username}</span>
    </div>
  );
};

export default SidebarHeader;
