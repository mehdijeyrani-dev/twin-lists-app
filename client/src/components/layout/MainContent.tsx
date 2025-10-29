import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainContent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <main className="flex-1 flex flex-col h-[calc(100dvh-4rem)] md:h-dvh p-2 gap-2">
      {/* Header */}
      <Header />
      <hr className="border-neutral-800" />
      {/* Main Content */}
      <section className="flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between">
          <div className="bg-neutral-800 rounded-md p-1 flex items-center">
            {Array.from({ length: 4 }, (_, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={i}
                  className={`text-sm px-2 py-0.5 rounded-sm ${
                    isActive ? "bg-neutral-700 shadow-xl text-neutral-100" : "bg-transparent text-neutral-600"
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
        <div className="flex-1 overflow-auto p-4 flex flex-col md:flex-row">
          <div className="w-full md:max-w-sm rounded-2xl shadow p-8 shrink-0 bg-amber-700">
            Test
          </div>
          <div className="w-full max-w-sm rounded-2xl shadow p-8 shrink-0">
            Test
          </div>
          <div className="w-full max-w-sm rounded-2xl shadow p-8 shrink-0">
            Test
          </div>
          <div className="w-full max-w-sm rounded-2xl shadow p-8 shrink-0">
            Test
          </div>
        </div>
      </section>
      {/* Footer — hidden on mobile */}
      <Footer />
    </main>
  );
};

export default MainContent;
