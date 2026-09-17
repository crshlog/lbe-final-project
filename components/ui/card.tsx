import { useRef } from "react";
import Popup from "./card-popup";

export default function Card() {
  const popUp = useRef<HTMLDialogElement>(null);

  const popupPage = () => {
    popUp.current?.showModal();
  };
  return (
    <a
      onClick={() => popupPage()}
      className="content-stretch flex flex-col gap-y-3 items-center relative size-full hover:scale-105 ease-in-out duration-300"
    >
      <div className="bg-[#d9d9d9] h-94 relative rounded-[10px] shrink-0 w-full" />
      <p className="[word-break:break-word] font-['Iosevka_Charon:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black text-center w-full">
        Nama Kegiatan
      </p>
      <p className="[word-break:break-word] font-['Iosevka_Charon:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center w-full">
        Nama Penyelenggara
      </p>

      <dialog
        ref={popUp}
        className="size-full mx-5 my-4 border-0 outline-0 content-center bg-transparent"
      >
        <Popup></Popup>
      </dialog>
    </a>
  );
}
