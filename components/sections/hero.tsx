export default function HeroText() {
  return (
    <div
      className="flex flex-col items-center justify-center relative size-full h-226 w-full overflow-x-hidden"
      data-name="hero-text"
    >
      <div
        className="absolute bg-linear-to-b from-white h-226 left-0 to-gray-600 w-full"
        data-name="gradient"
      />
      <p className="relative leading-[normal] not-italic text-[200px] text-black">
        PUSING
      </p>
      <p className="relative leading-[normal] not-italic text-6xl text-black whitespace-nowrap">{`>> Pusat Informasi Gelap`}</p>
    </div>
  );
  ``;
}
