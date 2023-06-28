import {
  useTable,
  useFilters,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import { useSearch } from "../../context/SearchContext";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
const Table = ({ data, columns }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { searchValue } = useSearch();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    { columns, data, filterTypes, initialState: { pageIndex: 0 } },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  useEffect(() => {
    setGlobalFilter(searchValue);
  }, [searchValue]);
  return (
    <>
      <table className="block w-full " {...getTableProps()}>
        <thead className="block border-y-2 px-[40px] text-[15px]">
          {headerGroups.map((headerGroup) => (
            <tr
              className="my-[10px] flex "
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className=" w-[100%] text-right font-bold text-gray-800"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="block text-[13px]" {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="my-[10px] flex items-center rounded-md bg-[#f2f2f2] px-[40px] py-[5px] "
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="w-[100%]  text-right "
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="footer mt-[70px] flex w-full items-center justify-between bg-white px-[50px]">
        <span>hello</span>
        <Pagination
          pagesNumber={3}
          // pagesNumber={data.length}
          currentPage={pageNumber}
          pageChanger={setPageNumber}
        />
      </div>
    </>
  );
};
export default Table;
const filterTypes = {
  text: (rows, id, filterValue) => {
    return rows.filter((row) => {
      const rowValue = row.values[id];
      return rowValue !== undefined
        ? String(rowValue)
            .toLowerCase()
            .startsWith(String(filterValue).toLowerCase())
        : true;
    });
  },
};
