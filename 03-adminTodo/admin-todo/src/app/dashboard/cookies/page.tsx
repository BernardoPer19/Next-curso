import { TabBar } from "@/components/Tabar";
import { Metadata } from "next";
import { cookies } from "next/headers";
import React from "react";

// ✅ Esto debe ser una exportación nombrada
export const metadata: Metadata = {
  title: "Cookies Page",
};

const CookiesPage = async () => {
  const cookieStore = await cookies(); 
  const selectedTabCookie = cookieStore.get("selectedTab");
  const selectedTab = selectedTabCookie ? Number(selectedTabCookie.value) : 1;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      <div className="flex flex-col gap-4">
        <span className="text-3xl font-semibold">Tabs</span>
        <TabBar currentTab={selectedTab} />
      </div>
    </div>
  );
};

export default CookiesPage;
