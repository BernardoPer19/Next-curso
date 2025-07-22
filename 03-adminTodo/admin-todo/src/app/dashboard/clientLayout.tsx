"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopMenu from "@/components/TopMenu";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="ml-auto mb-6 w-full">
        <TopMenu toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <div className="px-6 pt-6">{children}</div>
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />
      </div>
    </>
  );
}
