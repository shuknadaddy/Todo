"use client";

import { useState } from "react";

export function Button(props) {
  const { filter, setFilter, setImgExecuti } = props;

  return (
    <div className="flex gap-1 items-center">
      <button
        onClick={() => {
          setFilter("all");
          setImgExecuti(
            "https://i.pinimg.com/736x/e7/2c/18/e72c187da17e8806fb200eaf4aaaf75d.jpg"
          );
        }}
        className={`w-[50px]  h-[32px] rounded-xl ${
          filter === "all" ? "bg-blue-500" : "bg-orange-200"
        }`}
      >
        All
      </button>
      <button
        onClick={() => {
          setFilter("active"),
            setImgExecuti(
              "https://i.pinimg.com/736x/2b/aa/c5/2baac5ab179e85214f8cce899e1fa051.jpg"
            );
        }}
        className={`w-[70px]  h-[32px] rounded-xl s ${
          filter === "active" ? "bg-red-500" : "bg-orange-200"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => {
          setFilter("completed");
          setImgExecuti(
            "https://i.pinimg.com/736x/38/b3/10/38b310d30bb6788f34591b6a14855064.jpg"
          );
        }}
        className={`w-[100px]  h-[32px] rounded-xl ${
          filter === "completed" ? "bg-pink-500" : "bg-orange-200"
        }`}
      >
        Completed
      </button>
    </div>
  );
}
