"use client";

import React, { useRef } from "react";
import Navbar from "@/components/shared/navbar";
import HeroText from "@/components/sections/hero";
import Upcoming from "@/components/sections/Genres/upcoming";
import Lomba from "@/components/sections/Genres/lomba";
import Kepanitiaan from "@/components/sections/Genres/kepanitiaan";
import Card from "@/components/ui/card";
import Popup from "@/components/ui/card-popup";

export default function Home() {
  const UpcomingRef = useRef<HTMLAnchorElement>(null);
  const LombaRef = useRef<HTMLAnchorElement>(null);
  const KepanitiaanRef = useRef<HTMLAnchorElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLAnchorElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
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
        <Upcoming></Upcoming>
        <Lomba></Lomba>
        <Kepanitiaan></Kepanitiaan>
      </div>
      {/* <div className="absolute flex flex-col pb-32 size-full h-fit w-full bg-gray-600 gap-y-12">
        <Upcoming ref={UpcomingRef}></Upcoming>
        <div className="flex gap-x-12 mx-5 pb-16">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <Lomba ref={LombaRef}></Lomba>
        <div className="flex gap-x-12 mx-5 pb-16">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <Kepanitiaan ref={KepanitiaanRef}></Kepanitiaan>
        <div className="flex gap-x-12 mx-5 pb-16">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div> */}
    </div>
  );
}
