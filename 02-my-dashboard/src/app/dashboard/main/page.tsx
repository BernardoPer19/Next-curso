import WidgetGrid from "@/components/dashboard/WidgetGrid";
import React from "react";

function MainPage() {
  return (
    <div>
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Informacion general</span>
      <WidgetGrid />
    </div>
  );
}

export default MainPage;
