function Lomba() {
  return (
    <div className="absolute contents left-6/12 top-21" data-name="Lomba">
      <p className="[word-break:break-word] absolute font-['Iosevka_Charon:Bold',sans-serif] h-[122px] leading-[normal] left-[72px] not-italic text-[96px] text-black top-[84px] w-[729px]">{`>> LOMBA`}</p>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-gray-600 relative size-full" data-name="Section">
      <Lomba />
    </div>
  );
}
