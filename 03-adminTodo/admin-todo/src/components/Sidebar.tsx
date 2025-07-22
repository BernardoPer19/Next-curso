"use client";
import Link from "next/link";
import Image from "next/image";
import { CiBookmarkCheck, CiLogout } from "react-icons/ci";
import SidebarItem from "./SidebarItem";
import { BiX } from "react-icons/bi";
import { FiHome, FiFolder, FiUsers, FiSettings } from "react-icons/fi";
import { TbServer2 } from "react-icons/tb";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const menuItem = [
  {
    href: "/dashboard",
    path: "/dashboard",
    title: "Panel principal",
    icon: <FiHome size={22} />,
  },
  {
    href: "/projects",
    path: "/projects",
    title: "Lista de proyectos",
    icon: <FiFolder size={22} />,
  },
  {
    href: "/dashboard/rest-todos",
    path: "/dashboard/rest-todos",
    title: "REST Todos",
    icon: <FiUsers size={22} />,
  },
  {
    href: "/dashboard/server-actions",
    path: "/dashboard/server",
    title: "Server Actions",
    icon: <TbServer2 size={22} />,
  },
];

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <>
      <aside
        className={`
    fixed z-50 top-0 left-0 h-screen bg-white border-r p-6
    transition-transform duration-300 ease-in-out
    w-64
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
  `}
      >
        <div>
          <BiX
            className="text-red-500 z-[11111111111]"
            size={40}
            onClick={toggleSidebar}
          />
          <div className="-mx-6 px-6 py-4">
            <Link href="/" title="home">
              <Image
                src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                width={128}
                height={40}
                alt="tailus logo"
                className="w-32"
              />
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
              width={100}
              height={100}
              alt="User"
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Cynthia J. Watts
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {menuItem.map((item) => (
              <SidebarItem
                key={item.href}
                href={item.href}
                path={item.path}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
