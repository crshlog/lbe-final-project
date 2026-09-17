"use client";

import { useEffect, useState } from "react";
import { loadCards } from "./script";

export default function Kepanitiaan() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    loadCards().then(setItems);
  }, []);

  return (
    <div className="flex flex-col pl-16">
      <a
        href="https://www.google.com"
        className="relative ease-in-out duration-300 hover:scale-101 font-['Iosevka_Charon:Bold',sans-serif]
                    text-3xl text-white pb-4 w-fit"
      >
        {`UPCOMING`}
      </a>

      <div className="flex flex-row gap-4 space-x-4 space-y-8 overflow-x-auto overflow-y-hidden h-auto">
        {items.map((item) => (
          <a key={item.id} href="https://www.google.com" className="shrink-0 text-center ease-in-out duration-300 hover:scale-102">
            <img className="aspect-3/4 w-40 lg:w-2xs object-cover" src={item.image} alt={item.nama}/>
            <h3 className="max-w-40 lg:max-w-2xs wrap-break-words font-['Iosevka_Charon:Bold',sans-serif] text-sm lg:text-xl text-white">{item.nama}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}