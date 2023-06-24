"use client";
import { useState } from "react";
import { useTable } from "../hooks/useTable";
import RunsTableHeader from "./RunsTableHeader";
import RunTableFooter from "./RunTableFooter";

interface Props {
  data: any[];
  rowsPerPage: any;
}

export default function RunsTable({ data, rowsPerPage }: Props) {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <RunsTableHeader />
      <table className="table-auto w-1/2">
        <thead className="bg-transparent transition-all duration-250 ease-in rounded-t-lg">
          <tr>
            <th className="bg-gray-600 px-4 py-3 font-medium text-left text-sm text-gray-100 rounded-tl-lg">
              Distance
            </th>
            <th className="bg-gray-600 px-4 py-3 font-medium text-left text-sm text-gray-100">
              Pace
            </th>
            <th className="bg-gray-600 px-4 py-3 font-medium text-left text-sm text-gray-100">
              Time
            </th>
            <th className="bg-gray-600 px-4 py-3 font-medium text-left text-sm text-gray-100 rounded-tr-lg">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el: any) => (
            <tr className="bg-gray-100" key={el.id}>
              <td className="px-4 py-3 text-sm text-gray-500">{el.name}</td>
              <td className="px-4 py-3 text-sm text-gray-500">{el.capital}</td>
              <td className="px-4 py-3 text-sm text-gray-500">{el.language}</td>
              <td className="px-4 py-3 text-sm text-gray-500">{el.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <RunTableFooter
        range={range}
        slice={slice}
        setPage={setPage}
        page={page}
      />
    </>
  );
}
