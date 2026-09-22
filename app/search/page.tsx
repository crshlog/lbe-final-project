"use client";

import { loadCards } from "@/components/sections/Genres/script";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/shared/navbar";

export default function Section(value: string) {
  const popUp = useRef<HTMLDialogElement>(null);
  const [items, setItems] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);
  const query = useSearchParams().get("query") ?? "";

  const popupPage = (item: any) => {
    setSelected(item);
    popUp.current?.showModal();
  };

  useEffect(() => {
    loadCards().then(setItems);
  }, []);

  const item = items.filter((i) => i.nama.includes(query));

  if (!item) return <p>Loading...</p>;
  return (
    <div
      className="bg-gray-600 relative min-h-[100vh] size-full"
      data-name="Section"
    >
      <Navbar></Navbar>
      <div className="relative contents top-21" data-name="Lomba">
        <p className="relative h-fit leading-[normal] left-[72px] not-italic text-[96px] text-white top-[84px] w-fit">{`>> HASIL SEARCH ${query}`}</p>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-40 pb-24 gap-y-40 w-full overflow-x-hidden h-auto scrollbar-none">
          {item.map((item) => (
            <a
              key={item.id}
              onClick={() => popupPage(item)}
              className="flex flex-col scale-125 items-center text-center ease-in-out duration-300 hover:scale-102 w-full"
            >
              <img
                className="aspect-3/4 w-full max-w-40 lg:max-w-2xs object-cover"
                src={item.image}
                alt={item.nama}
              />
              <h3 className="max-w-40 lg:max-w-2xs wrap-break-words font-['Iosevka_Charon:Bold',sans-serif] text-sm lg:text-xl text-white mt-2">
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
                <p className="relative shrink-0 w-full">
                  Nama: {selected.nama}
                </p>
                <p className="relative shrink-0 w-full">
                  Tanggal Pendaftaran: {selected.date_start} -{" "}
                  {selected.date_end}
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
    </div>
  );
}
