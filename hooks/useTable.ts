import { useEffect, useState } from "react";

const calucateRange = (data: any, rowsPerPage: any): any => {
  const range = [];
  const totalPage = Math.ceil(data.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= totalPage; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data: any, page: any, rowsPerPage: any) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data: any, page: any, rowsPerPage: any) => {
  const [tableRange, setTableRange] = useState<any>([]);
  const [slice, setSlice] = useState<any>([]);

  useEffect(() => {
    const range = calucateRange(data, rowsPerPage);
    setTableRange([...range]);
    const slice = sliceData(data, page, rowsPerPage);
    setSlice([...slice]);
  }, [data, setTableRange, setSlice, page]);

  return { slice, range: tableRange };
};

export { useTable, sliceData, calucateRange };
