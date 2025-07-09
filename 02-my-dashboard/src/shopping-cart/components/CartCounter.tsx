"use client";
import React, { useState } from "react";

function CartCounter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex items-center">
      <div className="flex gap-10 justify-center items-center">
        <button
          onClick={() => setCount(count + 1)}
          className="flex justify-center items-center p-2 rounded-2xl bg-gray-900 text-white hover:bg-gray-600 transition-colors"
        >
          +1
        </button>
        <span> {count}</span>
        <button
          onClick={() => setCount(count - 1)}
          className="flex justify-center items-center p-2 rounded-2xl bg-gray-900 text-white hover:bg-gray-600 transition-colors"
        >
          -1
        </button>
      </div>
    </div>
  );
}

export default CartCounter;
