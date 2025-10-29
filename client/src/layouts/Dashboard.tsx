import { Sidebar } from "@/components/sidebar";
import MobileNavbar from "@/components/navbar/MobileNavbar";
import SidebarToggle from "@/components/ui/SidebarToggle";
import { useUIStore } from "@/store/useUIStore";
import AddTaskModal from "@/components/AddTaskModal";
import { Plus } from "lucide-react";
import MainContent from "@/components/layout/MainContent";

const Dashboard = () => {
  const { isAddTaskModalOpen } = useUIStore();

  return (
    <div className="w-full h-dvh overflow-hidden flex animate-opacity relative">
      <SidebarToggle />
      <Sidebar />
      <MainContent />
      <MobileNavbar />
      {isAddTaskModalOpen && <AddTaskModal />}
      <button className="fixed bottom-24 right-3 bg-purple-500 text-white p-4 rounded-full md:hidden z-[200]">
        <Plus size={20} />
      </button>
    </div>
  );
};

export default Dashboard;
