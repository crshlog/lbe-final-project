"use client";

import React from "react";

interface GenreProps {
  ref?: React.Ref<HTMLDivElement>;
}
export default function Upcoming({ ref }: GenreProps) {
  return (
    <div
      ref={ref}
      className="relative ease-in-out duration-300 hover:scale-105 font-['Iosevka_Charon:Bold',sans-serif] h-32 leading-[normal] left-16 not-italic text-[96px] text-white w-fit"
    >
      {`>> UPCOMING`}
    </div>
  );
}
