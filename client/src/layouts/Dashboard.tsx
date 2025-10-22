import { Sidebar } from "@/components/sidebar";
import MobileNavbar from "@/components/navbar/MobileNavbar";
import SidebarToggle from "@/components/ui/SidebarToggle";
import MainSection from "@/components/layout/MainSection";
import { useUIStore } from "@/store/useUIStore";
import AddTaskModal from "@/components/AddTaskModal";

const Dashboard = () => {
  const { isAddTaskModalOpen } = useUIStore();

  return (
    <div className="h-dvh overflow-hidden flex animate-opacity relative">
      <SidebarToggle />
      <Sidebar />
      <MainSection />
      <MobileNavbar />
      {isAddTaskModalOpen && <AddTaskModal />}
    </div>
  );
};

export default Dashboard;
