import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useUIStore } from "@/store/useUIStore";

const MainSection = () => {
  const { isAddTaskModalOpen } = useUIStore();

  return (
    <main className="flex flex-col flex-1 overflow-auto p-2.5 gap-2.5 relative pb-20 md:pb-0">
      <Header />
      <div
        className={`flex-1 min-h-0 transition-all duration-200 px-2.5 ${
          isAddTaskModalOpen ? "!overflow-hidden" : "overflow-auto"
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainSection;
