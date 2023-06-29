import { useTable } from "react-table";
const Table = ({ data, columns }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
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
              className="my-[10px] items-center flex rounded-md bg-[#f2f2f2] px-[40px] py-[5px] "
            >
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="w-[100%]  text-right ">
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
