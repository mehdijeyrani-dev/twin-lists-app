import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { EllipsisVertical, Plus } from "lucide-react";
import Card from "../tasks/Card";
import TaskCard from "../tasks/TaskCard";

interface CartTypes {
  id: number;
  content: string;
  color: string;
}

const ResponsiveCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cards = [
    { id: 1, content: "Test 1", color: "bg-neutral-600" },
    { id: 2, content: "Test 2", color: "bg-neutral-700" },
    { id: 3, content: "Test 3", color: "bg-neutral-800" },
    { id: 4, content: "Test 4", color: "bg-neutral-950" },
    { id: 5, content: "Test 4", color: "bg-neutral-950" },
    { id: 6, content: "Test 4", color: "bg-neutral-950" },
    { id: 7, content: "Test 4", color: "bg-neutral-950" },
    { id: 8, content: "Test 4", color: "bg-neutral-950" },
    { id: 9, content: "Test 4", color: "bg-neutral-950" },
  ];

  const renderCard = (card: CartTypes) => (
    <div
      key={card.id}
      className={`rounded-2xl shadow p-8 h-96 md:h-[800px] w-full md:max-w-md shrink-0 ${card.color}`}
    >
      {card.content}
    </div>
  );

  const renderMobileView = () => (
    <Swiper
      spaceBetween={10}
      slidesPerView={1.1}
      centeredSlides={true}
      observer={true}
      observeParents={true}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="w-full h-full"
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id} className="pb-10 ">
          <div className="flex flex-col justify-between h-full w-full">
            <div className="header px-2 py-4 flex justify-between items-center border-b border-neutral-700">
              <h2 className="">In Progress</h2>
              <button>
                <EllipsisVertical size={20} />
              </button>
            </div>

            <div className="content overflow-y-auto flex flex-col gap-2">
              <TaskCard />
            </div>
            <div className="py-2 border-t border-neutral-700">
              <button className="flex px-2 py-4 items-center gap-2 bg-[#1e1e1e] rounded-md border border-neutral-700 w-full">
                <Plus size={20} className="text-purple-400" />
                <span className="text-neutral-50">Add task</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const renderDesktopView = () => (
    <div className="flex-1 overflow-auto p-4 flex flex-col md:flex-row gap-4">
      {cards.map((card) => renderCard(card))}
    </div>
  );

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default ResponsiveCard;
