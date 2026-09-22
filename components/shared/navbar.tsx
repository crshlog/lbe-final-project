"use client";

import { useRef } from "react";

interface NavbarProps {
  onUpcomingClick?: () => void;
  onLombaClick?: () => void;
  onKepanitiaanClick?: () => void;
}

function Frame({
  onUpcomingClick,
  onLombaClick,
  onKepanitiaanClick,
}: NavbarProps) {
  return (
    <div className="relative content-stretch flex gap-5 items-center leading-[normal] not-italic text-xl text-black whitespace-nowrap">
      <button
        onClick={onUpcomingClick}
        className="relative shrink-0 hover:text-gray-400 ease-in-out duration-300 hover:cursor-pointer"
      >
        Upcoming
      </button>
      <button
        onClick={onLombaClick}
        className="relative shrink-0 hover:text-gray-400 ease-in-out duration-300 hover:cursor-pointer"
      >
        Lomba
      </button>
      <button
        onClick={onKepanitiaanClick}
        className="relative shrink-0 hover:text-gray-400 ease-in-out duration-300 hover:cursor-pointer"
      >
        Kepanitiaan
      </button>
    </div>
  );
}

export default function Navbar({
  onUpcomingClick,
  onLombaClick,
  onKepanitiaanClick,
}: NavbarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const cariName = () => {
    const value = inputRef.current?.value ?? "";
    window.open(`./search?query=${encodeURIComponent(value)}`, "_self");
  };

  return (
    <div
      className="flex gap-14 size-full h-20 items-center bg-[#ddd]"
      data-name="Navbar"
    >
      <a
        href="/"
        className="relative hover:scale-120 transition-all duration-300 font-black text-3xl leading-[normal] left-9 not-italic text-black whitespace-nowrap"
      >
        PUSING
      </a>
      <Frame
        onUpcomingClick={onUpcomingClick}
        onLombaClick={onLombaClick}
        onKepanitiaanClick={onKepanitiaanClick}
      />
      <div className="ml-auto  mx-8  items-center flex justify-center text-white outline-0">
        <input
          type="text"
          ref={inputRef}
          className="bg-gray-500 h-16 rounded-2xl w-50 px-8"
          placeholder="Search"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              cariName();
            }
          }}
        ></input>
      </div>
    </div>
  );
}
