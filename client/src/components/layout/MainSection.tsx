import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainSection = () => {

  return (
    <main className="flex-1 flex flex-col gap-2 relative overflow-hidden p-2.5 h-dvh ">
      <Header />
      <hr className="border-neutral-800" />
      <div className={`flex-1 transition-all duration-200 h-full`}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainSection;
