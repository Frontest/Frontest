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
import Select from "./Select";
import SortTriangles from "./SortTriangles";
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
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    page,
    state: { pageIndex, pageSize },
    gotoPage,
  } = useTable(
    {
      columns,
      data,
      filterTypes,
      initialState: {
        pageIndex: 0,
        pageSize: 8,
        sortBy: [{ id: "name" }, { id: "lastName" }, { id: "company" }],
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    setGlobalFilter(searchValue);
  }, [searchValue]);

  return (
    <>
      <table className="block w-full " {...getTableProps()}>
        <thead className="block select-none border-y-2 px-[40px] text-[15px]">
          {headerGroups.map((headerGroup) => (
            <tr
              className="my-[10px] flex "
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => {
                console.log({ c: column.isSorted });
                return (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                      " flex w-[100%] items-center text-right font-bold text-gray-800"
                    }
                  >
                    {column.render("Header")}
                    {!column.disableSortBy && (
                      <span className="mr-[5px]">
                        <SortTriangles isDesc={column.isSortedDesc} />
                      </span>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="block text-[13px]" {...getTableBodyProps()}>
          {page.map((row) => {
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
      <div className="footer absolute  bottom-[60px]  left-[50%] mx-auto flex w-full translate-x-[-50%] items-center justify-between bg-white px-[50px]">
        <Select
          total={data.length}
          currentPage={pageIndex + 1}
          pageSize={pageSize}
          pageItems={page.length}
        />
        <Pagination
          pagesNumber={pageOptions.map((e) => e + 1)}
          currentPage={pageIndex + 1}
          pageChanger={setPageNumber}
          paginationOptions={{
            nextPage,
            previousPage,
            canNextPage,
            canPreviousPage,
            gotoPage,
          }}
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
