import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ResponsiveCard from "../todos/ResponsiveCard";

const MainContent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <main className="flex-1 flex flex-col w-full h-[calc(100dvh-4rem)] md:h-dvh p-2 gap-2">
      {/* Header */}
      <Header />
      <hr className="border-neutral-800" />
      {/* Main Content */}
      <section className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Toolbar */}
        <div className="flex items-center justify-between">
          <div className="bg-neutral-800 rounded-md p-1 flex items-center">
            {Array.from({ length: 4 }, (_, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={i}
                  className={`text-sm px-2 py-0.5 rounded-sm ${
                    isActive
                      ? "bg-neutral-700 shadow-xl text-neutral-100"
                      : "bg-transparent text-neutral-600"
                  }`}
                  onClick={() => setActiveIndex(i)}
                >
                  List {i + 1}
                </button>
              );
            })}
          </div>
          <div className=""></div>
        </div>

        {/* Main Content */}
        <ResponsiveCard />
      </section>
      {/* Footer — hidden on mobile */}
      <Footer />
    </main>
  );
};

export default MainContent;
