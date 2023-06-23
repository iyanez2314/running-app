import React from "react";

export default function RunsHeader() {
  return (
    <div className="flex justify-evenly w-1/2 items-center mb-2 ">
      <div>
        <h1 className="text-white text-4xl">All My Runs</h1>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
          New Run
        </button>
      </div>
    </div>
  );
}
