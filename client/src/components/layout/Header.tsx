import { Icon } from "../icons";
import { useUIStore } from "@/store/useUIStore";
import logoImg from "@/assets/images/logo.svg";

const Header = () => {
  const { isSidebarOpen } = useUIStore();

  return (
    <header
      className={`pb-2.5 md:p-2.5 flex justify-between items-center transition-all duration-300 ${
        isSidebarOpen && "md:ml-4"
      }`}
    >
      <div
        className={`flex items-center gap-1.5 md:gap-2 transition-all duration-300 ${
          isSidebarOpen ? "p-0" : "pl-0 md:pl-11"
        }`}
      >
        <button className="size-9 grid place-content-center cursor-pointer bg-neutral-800/70 md:bg-transparent rounded-md hover:bg-neutral-800 transition-all duration-300 relative">
          <Icon.Bell strokeWidth={1} className="w-4 h-4 md:w-5 md:h-5" />
          <span className="absolute size-2 rounded-full bg-rose-500 right-2 top-2" />
        </button>
        <button className="size-9 place-content-center cursor-pointer bg-neutral-800/70 md:bg-transparent rounded-md hover:bg-neutral-800 transition-all duration-300 grid">
          <Icon.Sun strokeWidth={1} className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button className="size-9 place-content-center cursor-pointer bg-transparent rounded-md hover:bg-neutral-800 transition-all duration-300 grid md:hidden">
          <Icon.User strokeWidth={1} size={16} />
        </button>
      </div>
      <div className="w-24 xl:w-28">
        <img
          src={logoImg}
          alt="Twin Lists"
          width={110}
          className="w-full object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
