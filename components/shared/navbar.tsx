import { TextField } from "@mui/material";

function SearchBar() {
  return (
    <div className="main">
      <div className="search h-16">
        <TextField
          id="outlined-basic"
          variant="filled"
          className="w-56"
          label="Search"
        />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative content-stretch flex font-['Iosevka_Charon:Bold',sans-serif] gap-5 items-center leading-[normal] not-italic text-xl text-black whitespace-nowrap">
      <a
        href="https://google.com"
        className="relative shrink-0 ease-in-out duration-300 hover:text-gray-400"
      >
        Jadwal
      </a>
      <a
        href="https://google.com"
        className="relative shrink-0 hover:text-gray-400 ease-in-out duration-300"
      >
        Upcoming
      </a>
      <a
        href="https://google.com"
        className="relative shrink-0 hover:text-gray-400 ease-in-out duration-300"
      >
        Lomba
      </a>
      <a
        href="https://google.com"
        className="relative shrink-0 hover:text-gray-400 ease-in-out duration-300"
      >
        Kepanitiaan
      </a>
    </div>
  );
}

export default function Navbar() {
  return (
    <div
      className="flex gap-14 size-full h-20 items-center bg-[#ddd]"
      data-name="Navbar"
    >
      <p className="relative font-['Iosevka_Charon:Bold',sans-serif] leading-[normal] left-9 not-italic text-2xl text-black whitespace-nowrap">
        PUSING
      </p>
      <Frame />
      <div className="ml-auto mr-8">
        <SearchBar />
      </div>
    </div>
  );
}
