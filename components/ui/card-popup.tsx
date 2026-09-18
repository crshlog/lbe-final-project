import { useEffect, useState, useRef } from "react";
import { loadCards } from "../sections/Genres/script";

function Frame({ id }: { id: string | number }) {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    loadCards().then(setItems);
  }, []);

  const item = items.find((item) => item.id === Object(id));
  console.log("Looking for id:", id, typeof Object(id));
  console.log(
    "Available ids:",
    items.map((i) => i.id),

    typeof items,
  );

  if (!item) return <p>Loading...</p>;
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Iosevka_Charon:Bold',sans-serif] gap-[35px] items-center leading-[normal] left-0 not-italic text-[32px] text-black top-0 w-[768px] pr-10">
      <p className="relative shrink-0 w-full">Nama: {item.nama}</p>
      <p className="relative shrink-0 w-full">
        Tanggal Pendaftaran: {item.date_start} - {item.date_end}
      </p>
      <p className="relative shrink-0 w-full">Link Instagram: {item.link_ig}</p>
      <p className="relative shrink-0 w-full">
        Link Guidebook: {item.link_guidebook}
      </p>
      <p className="relative shrink-0 w-full">
        Link Pendaftaran: {item.link_pendaftaran}
      </p>
    </div>
  );
}

export default function Popup({ id }: { id: string | number }) {
  return (
    <div className="relative scale-85 bg-[#928c8c] flex size-fit justify-center align-middle items-center mx-14 rounded-2xl">
      <div className="bg-[#d33232] h-150 w-120 left-0 rounded-[17px] py-20 my-11 mx-11" />
      <Frame id={id} />
    </div>
  );
}
