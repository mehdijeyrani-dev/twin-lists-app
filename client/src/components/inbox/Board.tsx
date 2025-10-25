import React from "react";
import SectionHeader from "../ui/SectionHeader";
import SectionMain from "../ui/SectionMain";
import SectionFooter from "../ui/SectionFooter";

const test = [
  { id: 1, title: "test1" },
  { id: 2, title: "test2" },
  { id: 3, title: "test3" },
  { id: 4, title: "test4" },
  { id: 5, title: "test5" },
  { id: 6, title: "test6" },
  { id: 7, title: "test7" },
  { id: 8, title: "test8" },
  { id: 9, title: "test9" },
  { id: 10, title: "test10" },
  { id: 11, title: "test11" },
  { id: 12, title: "test12" },
  { id: 13, title: "test13" },
  { id: 14, title: "test14" },
  { id: 15, title: "test15" },
  { id: 16, title: "test16" },
  { id: 17, title: "test17" },
];

const Board = () => {
  return (
    <div className="h-[calc(100vh-12rem)] overflow-auto flex gap-10 flex-nowrap flex-1 pb-20 sm:pb-0">
      {test.map((t) => (
        <div
          key={t.id}
          className="w-full h-full sm:max-w-sm shrink-0 flex flex-col gap-2 section p-2"
        >
          <SectionHeader />
          <SectionMain />
          <SectionFooter />
          <button className="add-section-btn text-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300 hidden">
            Add Section
          </button>
        </div>
      ))}
    </div>
  );
};

export default Board;
