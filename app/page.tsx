"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Navbar from "@/components/shared/navbar";
import HeroText from "@/components/sections/hero";
import Upcoming from "@/components/sections/Genres/upcoming";
import Lomba from "@/components/sections/Genres/lomba";
import Kepanitiaan from "@/components/sections/Genres/kepanitiaan";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar onUpcomingClick={() => scrollToSection(UpcomingRef)}></Navbar>
      <HeroText></HeroText>
      <div className="absolute flex flex-col pb-32 size-full h-fit w-full bg-gray-600 gap-y-9">
        <Upcoming></Upcoming>
        <Lomba></Lomba>
        <Kepanitiaan></Kepanitiaan>
      </div>
    </div>
  );
}
