"use client";

import { useEffect, useState, useRef } from "react";
import { loadCards } from "./script";

export default function Upcoming({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const popUp = useRef<HTMLDialogElement>(null);
  const [items, setItems] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);

  const popupPage = (item: any) => {
    setSelected(item);
    popUp.current?.showModal();
  };

  const closePopupPage = () => {
    popUp.current?.close();
  };

  useEffect(() => {
    loadCards().then(setItems);
  }, []);

  const filteredItems = items.filter(
    (item) => String(item.Genre) === "Upcoming",
  );

  // scroll bar behavior
const scrollRef = useRef<HTMLDivElement>(null);
const [currentPage, setCurrentPage] = useState(0);
const [isOverflow, setIsOverflow] = useState(false);

const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
  const container = e.currentTarget;
  const maxScroll = container.scrollWidth - container.clientWidth;

  if (maxScroll <= 0) {
    setCurrentPage(0);
    return;
  }

  const progress = container.scrollLeft / maxScroll;
  setCurrentPage(Math.min(2, Math.floor(progress * 3)));
};

const goToPage = (page: number) => {
  const container = scrollRef.current;

  if (!container) return;

  const maxScroll = container.scrollWidth - container.clientWidth;

  container.scrollTo({
    left: (maxScroll / 2) * page,
    behavior: "smooth",
  });
};

useEffect(() => {
  const container = scrollRef.current;

  if (!container) return;

  const checkOverflow = () => {
    setIsOverflow(container.scrollWidth > container.clientWidth);
  };

  checkOverflow();

  window.addEventListener("resize", checkOverflow);

  return () => {
    window.removeEventListener("resize", checkOverflow);
  };
}, [items]);

  return (
    <div className="flex flex-col px-10 lg:px-16" ref={ref}>
      <a
        href={`/3`}
        className="relative ease-in-out duration-300 hover:scale-101 font-['Iosevka_Charon:Bold',sans-serif]
                    text-3xl text-white pb-4 w-fit"
      >
        {`>> UPCOMING`}
      </a>

    <div 
        onScroll={handleScroll}
        ref={scrollRef}
        className="flex flex-row gap-4 space-x-4 space-y-8 overflow-x-auto overflow-y-hidden h-auto scrollbar-none"
      >        
      {filteredItems.map((item) => (
          <a
            key={item.id}
            onClick={() => popupPage(item)}
            className="shrink-0 text-center ease-in-out duration-300 hover:scale-102"
          >
            <img
              className="aspect-3/4 w-30 lg:w-2xs object-cover"
              src={item.image}
              alt={item.nama}
            />
            <h3 className="max-w-30 lg:max-w-2xs wrap-break-words font-['Iosevka_Charon:Bold',sans-serif] text-sm lg:text-xl text-white">
              {item.nama}
            </h3>
          </a>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-3">
          {[0, 1, 2].map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`w-2 h-2 rounded-full ${
                currentPage === page ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div> 

      <dialog
        ref={popUp}
        className="size-full border-0 outline-0 open:flex justify-center items-center backdrop-blur-lg bg-transparent p-4"
      >
        {selected && (
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto scale-100 sm:scale-90 bg-[#928c8c] flex flex-col md:flex-row items-center gap-6 mx-auto rounded-2xl p-6 md:p-11">
            <img
              className="aspect-3/4 w-40 sm:w-48 md:w-56 lg:w-64 object-cover rounded-[17px] shrink-0"
              src={selected.image}
              alt={selected.nama}
            />

            <div className="[word-break:break-word] flex flex-col font-['Iosevka_Charon:Bold',sans-serif] gap-4 md:gap-6 items-start text-left leading-normal not-italic text-lg sm:text-xl md:text-2xl lg:text-[32px] text-black w-full">
              <p className="w-full">Nama: {selected.nama}</p>
              <p className="w-full">
                Tanggal Pendaftaran: {selected.date_start} - {selected.date_end}
              </p>
              <p className="w-full">Link Instagram: {selected.link_ig}</p>
              <p className="w-full">
                Link Guidebook: {selected.link_guidebook}
              </p>
              <p className="w-full">
                Link Pendaftaran: {selected.link_pendaftaran}
              </p>
            </div>

            <button
              onClick={() => closePopupPage()}
              className="absolute top-2 right-2 md:top-4 md:right-4 hover:scale-120 text-3xl md:text-5xl w-10"
            >
              x
            </button>
          </div>
        )}
      </dialog>
    </div>
  );
}
