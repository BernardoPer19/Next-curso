"use client";

import { setSelectedTab } from "@/app/actions/set-tab";
import { useState, useTransition } from "react";

export const TabBar = ({ currentTab = 1, tapOptions = [1, 2, 3, 4] }) => {
  const [selected, setSelected] = useState(currentTab);
  const [isPending, startTransition] = useTransition();

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    startTransition(() => {
      setSelectedTab(tab);
    });
  };

  return (
    <div
      className={`grid w-full rounded-xl bg-gray-200 p-2 gap-2 
        grid-cols-${tapOptions.length}`}
      style={{ gridTemplateColumns: `repeat(${tapOptions.length}, 1fr)` }}
    >
      {tapOptions.map((tab, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`tab-${tab}`}
            name="tab"
            checked={selected === tab}
            readOnly
            className="peer hidden"
          />
          <label
            htmlFor={`tab-${tab}`}
            onClick={() => onTabSelected(tab)}
            className="block cursor-pointer select-none rounded-xl px-4 py-2 text-center text-gray-700 transition-all duration-200 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:font-semibold "
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
