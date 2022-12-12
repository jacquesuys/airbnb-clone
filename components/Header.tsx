import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

function Header({ placeholder }: any) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState("1");
  const [openSearchModal, setSearchModal] = useState(false);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleSearch = (e: any) => {
    const val = e.target.value;
    val ? setSearchModal(true) : setSearchModal(false);
    setSearchInput(val);
  };

  const resetSearchInput = () => {
    setSearchInput("");
    setSearchModal(false);
  };

  const search = () => {
    resetSearchInput();
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfGuests,
      },
    });
  };

  // close Search when ESC is pressed
  useEffect(() => {
    function onKeyup(e: KeyboardEvent) {
      if (e.key === "Escape") resetSearchInput();
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, [resetSearchInput]);

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        className="relative flex items-center cursor-pointer h-10 my-auto"
        onClick={() => router.push("/")}
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt="Fariways App"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center py-2 md:border-2 rounded-full md:shadow-sm">
        <input
          onChange={handleSearch}
          value={searchInput}
          type="text"
          placeholder={placeholder || "Start your Search"}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder:gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 rounded-full bg-red-400 p-2 text-white cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {openSearchModal && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center">
            <h2 className="font-semibold flex-grow pl-2">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 ml-1 text-lg text-red-500 bg-gray-100"
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(e.target.value)}
              min={1}
              max={8}
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={resetSearchInput}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-500 " onClick={search}>
              Submit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
