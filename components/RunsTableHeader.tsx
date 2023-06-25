import React from "react";

interface Props {
  tableHeadertext: string;
}

export default function RunsTableHeader({ tableHeadertext }: Props) {
  return (
    <div className="my-5">
      <h1 className="text-2xl text-white">{tableHeadertext}</h1>
    </div>
  );
}
