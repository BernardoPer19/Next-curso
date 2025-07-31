"use client";

import { useState } from "react";
import {
  CiMenuBurger,
  CiSearch,
  CiChat1,
  CiShoppingBasket,
} from "react-icons/ci";

type TopMenuClientProps = {
  totalItems: number;
};

export default function TopMenuClient({ totalItems }: TopMenuClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="sticky z-10 top-0 h-16 border-b bg-white">
      <div className="px-6 flex items-center justify-between space-x-4">
        <h5 hidden className="text-2xl text-gray-600 font-medium">
          Dashboard
        </h5>
        <button className="w-12 h-16 -mr-2 border">
          <CiMenuBurger
            size={30}
            className="text-black z-50"
            onClick={() => setSidebarOpen((prev) => !prev)}
          />
        </button>
        <div className="flex space-x-2">
          <div hidden className="md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                <CiSearch className="text-black" />
              </span>
              <input
                type="search"
                placeholder="Search here"
                className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
              />
            </div>
          </div>
          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100">
            <CiSearch className="text-black" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100">
            <CiChat1 size={25} className="text-black" />
          </button>
          <button className="flex items-center justify-center w-fit h-10 rounded-xl border bg-gray-100">
            <span className="text-sm mr-2 text-black">{totalItems}</span>
            <CiShoppingBasket size={25} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
