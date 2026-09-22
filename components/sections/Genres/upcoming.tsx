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

  return (
    <div className="flex flex-col pl-16" ref={ref}>
      <a
        href={`/1`}
        className="relative ease-in-out duration-300 hover:scale-101
                    text-3xl text-white pb-4 w-fit"
      >
        {`>> UPCOMING`}
      </a>

      <div className="flex flex-row gap-4 space-x-4 space-y-8 overflow-x-auto overflow-y-hidden h-auto scrollbar-none">
        {filteredItems.map((item) => (
          <a
            key={item.id}
            onClick={() => popupPage(item)}
            className="shrink-0 text-center ease-in-out duration-300 hover:scale-102"
          >
            <img
              className="aspect-3/4 w-40 lg:w-2xs object-cover"
              src={item.image}
              alt={item.nama}
            />
            <h3 className="max-w-40 lg:max-w-2xs wrap-break-words text-sm lg:text-xl text-white">
              {item.nama}
            </h3>
          </a>
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

            <div className="[word-break:break-word] flex flex-col gap-4 md:gap-6 items-start text-left leading-normal not-italic text-lg sm:text-xl md:text-2xl lg:text-[32px] text-black w-full">
              <p className="w-full font-black">{selected.nama}</p>
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
