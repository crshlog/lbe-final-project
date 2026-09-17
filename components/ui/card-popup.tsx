function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Iosevka_Charon:Bold',sans-serif] gap-[35px] items-center leading-[normal] left-0 not-italic text-[32px] text-black top-0 w-[768px] pr-10">
      <p className="relative shrink-0 w-full">Nama: Lomba Merah</p>
      <p className="relative shrink-0 w-full">Penyelenggara: Sung Jin-Woo</p>
      <p className="relative shrink-0 w-full">
        Tanggal Pendaftaran: 30 Februari 2030 - 40 Februari 2040
      </p>
      <p className="relative shrink-0 w-full">{`Link Instagram: https://www.youtube.com/watch?v=dQw4w9WgXcQv`}</p>
      <p className="relative shrink-0 w-full">
        Link Guidebook: https:somethingman.comt
      </p>
      <p className="relative shrink-0 w-full">{`Link Pendaftaran: http://daftarsini.com`}</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative bg-[#928c8c] flex size-fit justify-center align-middle items-center mx-14 rounded-2xl">
      <div className="bg-[#d33232] h-150 w-120 left-0 rounded-[17px] py-20 my-11 mx-11" />
      <Frame />
    </div>
  );
}
