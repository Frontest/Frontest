import { useEffect, useMemo, useState } from "react";
import Table from "./Table";
import Status from "./Status";

const TableSection = () => {
  const [usersData, setUsersData] = useState(null);
  const columns = useMemo(
    () => [
      { Header: "نام", accessor: "name" },
      { Header: "نام خانوادگی", accessor: "lastName" },
      {
        Header: "داخلی",
        accessor: "internal",
        Cell: ({ cell: { value } }) => String(value).latin2Persian(),
      },
      { Header: "شرکت", accessor: "company", disableSortBy: true },
      {
        Header: "وضعیت",
        accessor: "isActive",
        Cell: ({ cell: { value } }) => <Status status={value} />,
        disableSortBy: true,
      },
      {
        Header: "سطح دسترسی",
        accessor: "access",
        disableSortBy: true,
        Cell: ({ cell: { value } }) => (
          <div className="flex h-[30px] items-center justify-center rounded-full bg-[#0096c7] text-white">
            {value}
          </div>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    async function main() {
      const response = await fetch("/mockData.json");
      const data = await response.json();
      setUsersData(data);
    }
    main();
  }, []);

  return (
    <div className="main-table relative mt-[40px] h-[600px] w-full px-[20px]">
      {usersData && <Table columns={columns} data={usersData} />}
    </div>
  );
};
export default TableSection;
