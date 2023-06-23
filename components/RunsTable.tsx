"use client";
import { useState } from "react";
import { useTable } from "../hooks/useTable";
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
      <table className="table-auto w-1/2">
        <thead className="bg-transparent transition-all duration-250 ease-in rounded-t-lg">
          <tr>
            <th className="bg-gray-200 px-4 py-3 font-medium text-left text-sm text-gray-700 rounded-tl-lg">
              Country
            </th>
            <th className="bg-gray-200 px-4 py-3 font-medium text-left text-sm text-gray-700">
              Capital
            </th>
            <th className="bg-gray-200 px-4 py-3 font-medium text-left text-sm text-gray-700 rounded-tr-lg">
              Language
            </th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el: any) => (
            <tr className="bg-gray-100" key={el.id}>
              <td className="px-4 py-3 text-sm text-gray-500">{el.name}</td>
              <td className="px-4 py-3 text-sm text-gray-500">{el.capital}</td>
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
