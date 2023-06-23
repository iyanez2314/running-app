"use client";

import { useEffect } from "react";

interface props {
  range: any;
  setPage: any;
  page: any;
  slice: any;
}

export default function RunTableFooter({ range, setPage, page, slice }: props) {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [setPage, page, slice]);

  return (
    <div className="bg-gray-200 py-2 text-left text-base text-gray-700 rounded-bl-lg rounded-br-lg flex items-center justify-center gap-2 w-1/2">
      {range.map((item: any, index: number) => {
        return (
          <button
            key={index}
            className={`${
              page === item ? "bg-white" : ""
            } border-none px-4 rounded-lg cursor-pointer mr-1 ml-1 hover:bg-gray-300 transition-all duration-300`}
            onClick={() => setPage(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
