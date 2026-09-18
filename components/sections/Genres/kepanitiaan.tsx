"use client";

import { useEffect, useState, useRef } from "react";
import { loadCards } from "./script";

export default function Kepanitiaan({
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

  useEffect(() => {
    loadCards().then(setItems);
  }, []);

  const filteredItems = items.filter(
    (item) => String(item.genre) === "Kepanitiaan",
  );

  return (
    <div className="flex flex-col pl-16" ref={ref}>
      <a
        href={`/3`}
        className="relative ease-in-out duration-300 hover:scale-101 font-['Iosevka_Charon:Bold',sans-serif]
                    text-3xl text-white pb-4 w-fit"
      >
        {`KEPANITIAAN`}
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
            <h3 className="max-w-40 lg:max-w-2xs wrap-break-words font-['Iosevka_Charon:Bold',sans-serif] text-sm lg:text-xl text-white">
              {item.nama}
            </h3>
          </a>
        ))}
      </div>

      <dialog
        ref={popUp}
        className="size-full mx-5 my-4 border-0 outline-0 content-center bg-transparent"
      >
        {selected && (
          <div className="relative scale-85 bg-[#928c8c] flex size-fit justify-center align-middle items-center mx-14 rounded-2xl">
            <div className="bg-[#d33232] h-150 w-120 left-0 rounded-[17px] py-20 my-11 mx-11" />
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Iosevka_Charon:Bold',sans-serif] gap-[35px] items-center leading-[normal] left-0 not-italic text-[32px] text-black top-0 w-[768px] pr-10">
              <p className="relative shrink-0 w-full">Nama: {selected.nama}</p>
              <p className="relative shrink-0 w-full">
                Tanggal Pendaftaran: {selected.date_start} - {selected.date_end}
              </p>
              <p className="relative shrink-0 w-full">
                Link Instagram: {selected.link_ig}
              </p>
              <p className="relative shrink-0 w-full">
                Link Guidebook: {selected.link_guidebook}
              </p>
              <p className="relative shrink-0 w-full">
                Link Pendaftaran: {selected.link_pendaftaran}
              </p>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
