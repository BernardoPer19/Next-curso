"use client"
import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store/hooks/hooks";

function WidgetGrid() {
  const isCart = useAppSelector((state) => state.counter.value);

  return (
    <div>
      <div className="flex flex-wrap p-4">
        <SimpleWidget
          title={`${isCart}`}
          href=""
          label="contandor"
          subtitle="contadorsito"
        />
      </div>
    </div>
  );
}

export default WidgetGrid;
