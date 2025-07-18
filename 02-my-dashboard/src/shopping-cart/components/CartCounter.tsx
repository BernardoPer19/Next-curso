"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import {
  decrement,
  increment,
  initCounterState,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value: number;
}

function CartCounter({ value }: Props) {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]);

  return (
    <div className="flex items-center">
      <div className="flex gap-10 justify-center items-center">
        <button
          onClick={() => dispatch(decrement())}
          className="flex justify-center items-center p-2 rounded-2xl bg-gray-900 text-white hover:bg-gray-600 transition-colors"
        >
          -1
        </button>
        <span> {count}</span>
        <button
          onClick={() => dispatch(increment())}
          className="flex justify-center items-center p-2 rounded-2xl bg-gray-900 text-white hover:bg-gray-600 transition-colors"
        >
          +1
        </button>
      </div>
    </div>
  );
}

export default CartCounter;
