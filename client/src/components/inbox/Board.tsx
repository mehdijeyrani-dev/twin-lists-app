import React from "react";
import SectionHeader from "../ui/SectionHeader";
import SectionMain from "../ui/SectionMain";
import SectionFooter from "../ui/SectionFooter";
import SimpleBar from "simplebar-react";
import { useIsMobile } from "@/hooks";

const test = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  title: `Section ${i + 1}`,
}));

const Board = () => {
  const isMobile = useIsMobile();

  return (
    <SimpleBar
      className="h-[calc(100vh-12rem)] flex-1"
      style={{ overflow: "auto" }}
    >
      <div className="flex gap-4 flex-wrap h-full min-w-max p-2">
        {test.map((section) => (
          <div key={section.id} className="w-full sm:w-80 shrink-0 flex flex-col h-[calc(100vh-13rem)]">
            <SectionHeader />

            {isMobile ? (
              <div className="flex-1 min-h-0">
                <SimpleBar
                  style={{
                    maxHeight: "100%",
                  }}
                  className="h-full"
                >
                  <SectionMain />
                </SimpleBar>
              </div>
            ) : (
              <div className="flex-1">
                <SectionMain />
              </div>
            )}
            <SectionFooter />
            <button className="add-section-btn text-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300 hidden">
              Add Section
            </button>
          </div>
        ))}
      </div>
    </SimpleBar>
  );
};

export default Board;
