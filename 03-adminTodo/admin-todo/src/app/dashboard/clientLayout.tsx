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
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen((prev) => !prev)}
      />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <div className="px-6 pt-6">{children}</div>
      </div>
    </>
  );
}
