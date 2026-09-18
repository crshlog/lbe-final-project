"use client";

import React, { useRef } from "react";
import Navbar from "@/components/shared/navbar";
import HeroText from "@/components/sections/hero";
import Upcoming from "@/components/sections/Genres/upcoming";
import Lomba from "@/components/sections/Genres/lomba";
import Kepanitiaan from "@/components/sections/Genres/kepanitiaan";

export default function Home() {
  const UpcomingRef = useRef<HTMLDivElement>(null);
  const LombaRef = useRef<HTMLDivElement>(null);
  const KepanitiaanRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar
        onUpcomingClick={() => scrollToSection(UpcomingRef)}
        onLombaClick={() => scrollToSection(LombaRef)}
        onKepanitiaanClick={() => scrollToSection(KepanitiaanRef)}
      ></Navbar>
      <HeroText></HeroText>
      <div className="absolute flex flex-col pb-32 size-full h-fit w-full bg-gray-600 gap-y-9 lg:px-25">
        <Upcoming ref={UpcomingRef}></Upcoming>
        <Lomba ref={LombaRef}></Lomba>
        <Kepanitiaan ref={KepanitiaanRef}></Kepanitiaan>
      </div>
    </div>
  );
}
