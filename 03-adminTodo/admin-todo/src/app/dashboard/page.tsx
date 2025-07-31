import WidgetItem from "@/components/WidgetItem";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex flex-wrap m-auto justify-center items-center gap-10">
      <WidgetItem title={"usuario conectado server side"} />
      {JSON.stringify(session.user)}
    </div>
  );
};

export default DashboardPage;
