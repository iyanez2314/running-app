import React from "react";
import AddRunModal from "./AddRunModal";

export default function RunsHeader() {
  return (
    <div className="flex justify-evenly w-1/2 items-center mb-2 ">
      <div>
        <h1 className="text-white text-4xl">Running Tracker</h1>
      </div>
      <div>
        <AddRunModal />
      </div>
    </div>
  );
}
