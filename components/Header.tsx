import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center cursor-pointer h-10 my-auto">
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
          type="text"
          placeholder="Start your Search"
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
    </header>
  );
}

export default Header;
