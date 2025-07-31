import Link from "next/link";
import Image from "next/image";
import { BiUser, BiX } from "react-icons/bi";
import { FiHome, FiFolder, FiUsers } from "react-icons/fi";
import { TbServer2 } from "react-icons/tb";
import SidebarItem from "./SidebarItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CloseSidebarsito from "./CloseSidebarsito";
import LogoutButton from "./LogoutButton";

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
    path: "/dashboard/server-actions", // corregido
    title: "Server Actions",
    icon: <TbServer2 size={22} />,
  },
  {
    href: "/dashboard/cookies",
    path: "/dashboard/cookies",
    title: "Numbers by Cookies",
    icon: <TbServer2 size={22} />,
  },
  {
    href: "/dashboard/products",
    path: "/dashboard/products",
    title: "WawaShop",
    icon: <TbServer2 size={22} />,
  },
  {
    href: "/dashboard/profile",
    path: "/dashboard/profile",
    title: "Profile",
    icon: <BiUser size={22} />,
  },
];

export default async function Sidebar() {
  const session = await getServerSession(authOptions);

  const AvatarUrl = session?.user?.image
    ? session.user.image
    : "https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg";

  const userName = session?.user?.name ?? "No name";
  const userEmail = session?.user?.email ?? "No email";

  // const userROle = session?.user.role ?? "a"

  return (
    <aside className="fixed z-50 top-0 left-0 h-screen w-64 bg-white border-r p-6 transition-transform duration-300 ease-in-out">
      <div>
        <div className="flex justify-end">
          <CloseSidebarsito />
        </div>

        <div className="-mx-6 px-6 py-4 rounded-r-2xl">
          <Link href="/" title="home">
            <Image
              src={AvatarUrl}
              width={128}
              height={40}
              alt="user logo"
              className="w-32 rounded-full"
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <h5 className="mt-4 text-xl font-semibold text-gray-900 lg:block">
            {userName}
          </h5>
          <h5 className="mt-1 text-sm text-gray-600 lg:block">{userEmail}</h5>
          <span className=" text-black lg:block">Admin</span>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-250px)] mt-8">
          <ul className="space-y-2 tracking-wide">
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
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        {/* <LogoutButton /> */}
      </div>
    </aside>
  );
}
