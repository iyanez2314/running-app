"use client";
import { useState } from "react";
import { useTable } from "../hooks/useTable";
import RunTableFooter from "./RunTableFooter";

interface Props {
  data: any;
  rowsPerPage: any;
}

export default function RunsTable({ data, rowsPerPage }: Props) {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, rowsPerPage, page);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el: any) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.capital}</td>
              <td>{el.language}</td>
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
