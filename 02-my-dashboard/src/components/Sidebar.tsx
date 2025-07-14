import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    title: "DashBoard",
    subTitle: "Visualizador",
  },
  {
    path: "/dashboard/counter",
    title: "Counter",
    subTitle: "Counter Client",
  },
  {
    path: "/dashboard/pokemons",
    title: "Pokemon",
    subTitle: "Static Generation",
  },  {
    path: "/dashboard/favorites",
    title: "Pokemon favorites",
    subTitle: "Global State",
  },
];

function Sidebar() {
  return (
    <>
      <div
        id="menu"
        style={{ width: "300px" }}
        className="bg-gray-900 min-h-screen  text-slate-300 w-56 fixed  h-screen"
      >
        <div id="logo" className="my-4 px-6">
          <h1 className="text-lg md:text-2xl font-bold text-white">
            Dash<span className="text-blue-500">Wawx</span>.
          </h1>
          <p className="text-slate-500 text-sm">
            Manage your actions and activities
          </p>
        </div>
        <div id="profile" className="px-6 py-10">
          <p className="text-slate-500">Welcome back,</p>
          <a href="#" className="inline-flex space-x-2 items-center">
            <span>
              <Image
                className="rounded-full w-8 h-8"
                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                width={50}
                height={50}
                alt=""
              />
            </span>
            <span className="text-sm md:text-base font-bold">
              Agustin Peredo
            </span>
          </a>
        </div>
        <div id="nav" className="w-full px-6">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
