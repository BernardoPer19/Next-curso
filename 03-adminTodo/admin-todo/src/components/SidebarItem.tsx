'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface SidebarItemProps {
  href: string;
  icon: ReactNode;
  path: string;
  title: string;
}



export default function SidebarItem({
  href,
  icon,
  path,
  title
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li>
      <Link
        href={href}
        aria-current={isActive ? 'page' : undefined}
        className={`flex items-center space-x-4 px-4 py-3 rounded-md transition-colors duration-200 group ${
          isActive
            ? 'bg-gradient-to-r from-sky-600 to-cyan-400 text-white'
            : 'text-gray-600 hover:text-gray-700 hover:bg-gray-100'
        }`}
      >
        {icon}
        <span className="text-sm font-medium">{title}</span>
      </Link>
    </li>
  );

}