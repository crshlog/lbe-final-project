"use client";

import { useParams } from "next/navigation";
import { loadCards } from "@/components/sections/Genres/script";
import { useEffect, useState } from "react";

export default function Section() {
  const { id } = useParams<{ id: string }>();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    loadCards().then(setItems);
  }, []);

  const item = items.find((item) => String(item.id) === id);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="bg-gray-600 relative h-96 size-full" data-name="Section">
      <div className="relative contents left-6/12 top-21" data-name="Lomba">
        <p className="[word-break:break-word] relative font-['Iosevka_Charon:Bold',sans-serif] h-fit leading-[normal] left-[72px] not-italic text-[96px] text-black top-[84px] w-[729px]">{`>> ${item.genre}`}</p>
      </div>
    </div>
  );
}
