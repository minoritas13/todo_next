"use client";

import { useState } from "react";

type TaskToogleProps = {
  initialDone?: boolean;
};

export default function TaskToogle({ initialDone = false }: TaskToogleProps) {
  const [done, setDone] = useState(initialDone);

  return (
    <button
      type="button"
      onClick={() => setDone((prev) => !prev)}
      className={`shrink-0 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
        done
          ? "bg-green-600 text-white hover:bg-green-700"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
      aria-pressed={done}
    >
      {done ? "Selesai ✓" : "Tandai selesai"}
    </button>
  );
}
