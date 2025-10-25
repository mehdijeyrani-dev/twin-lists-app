import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainSection = () => {
  return (
    <main className="flex flex-col flex-1 relative md:pb-0 overflow-hidden">
      <Header />
      <div className={`flex-1 min-h-0 transition-all duration-200 `}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainSection;
