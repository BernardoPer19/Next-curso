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

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-10 h-16 border-b bg-white shadow-sm">
      <div className="px-6 flex items-center justify-between space-x-4 h-full">
        <h1 className="sr-only">Dashboard</h1>

        {/* Toggle Sidebar */}
        <button
          onClick={toggleSidebar}
          aria-label="Abrir menú"
          className="w-12 h-12 flex items-center justify-center border rounded-md hover:bg-gray-100 transition"
        >
          <CiMenuBurger size={26} className="text-black" />
        </button>

        {/* Right icons */}
        <div className="flex items-center space-x-3">
          {/* Search (only for larger screens) */}
          <div className="hidden md:block relative text-gray-400 focus-within:text-cyan-400">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 pr-3 border-r border-gray-300">
              <CiSearch className="text-black" />
            </span>
            <input
              type="search"
              placeholder="Buscar..."
              className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-700 outline-none border border-gray-300 focus:border-cyan-400 transition"
              aria-label="Buscar"
            />
          </div>

          {/* Compact icons */}
          <button
            className="w-10 h-10 flex items-center justify-center rounded-xl border bg-gray-100 hover:bg-gray-200 transition"
            aria-label="Buscar"
          >
            <CiSearch className="text-black" />
          </button>

          <button
            className="w-10 h-10 flex items-center justify-center rounded-xl border bg-gray-100 hover:bg-gray-200 transition"
            aria-label="Mensajes"
          >
            <CiChat1 size={24} className="text-black" />
          </button>

          {/* Cart */}
          <button
            className="flex items-center justify-center h-10 px-3 rounded-xl border bg-gray-100 hover:bg-gray-200 transition"
            aria-label="Carrito de compras"
          >
            <span className="text-sm mr-2 text-black">{totalItems}</span>
            <CiShoppingBasket size={24} className="text-black" />
          </button>
        </div>
      </div>
    </header>
  );
}
