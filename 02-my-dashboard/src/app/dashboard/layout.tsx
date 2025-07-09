import Sidebar from "@/components/Sidebar";
import React from "react";




export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 w-screen min-h-screen  text-slate-300 selection:bg-blue-600 selection:text-white">
      <Sidebar />
      <div className="pl-64 h-full  text-slate-900">
        {children}
      </div>
    </div>
  );
}

