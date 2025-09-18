"use client";

import { useState } from "react";

export function Button(props) {
  const { filter, setFilter } = props;

  return (
    <div className="flex gap-1 items-center">
      <button
        onClick={() => setFilter("all")}
        className={`w-[50px]  h-[32px] rounded-xl ${
          filter === "all" ? "bg-blue-500" : "bg-orange-200"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`w-[70px]  h-[32px] rounded-xl s ${
          filter === "active" ? "bg-red-500" : "bg-orange-200"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`w-[100px]  h-[32px] rounded-xl ${
          filter === "completed" ? "bg-pink-500" : "bg-orange-200"
        }`}
      >
        Completed
      </button>
    </div>
  );
}
