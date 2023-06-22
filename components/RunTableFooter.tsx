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
    <div className="bg-red-500 p-3 w-full text-left">
      {range.map((item: any, index: number) => {
        return (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
            onClick={() => setPage(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
