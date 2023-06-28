import { useEffect, useMemo, useState } from "react";
import Table from "./Table";
import Status from "./Status";

const TableSection = () => {
  const [usersData, setUsersData] = useState(null);
  const columns = useMemo(
    () => [
      { Header: "نام", accessor: "name" },
      { Header: "نام خانوادگی", accessor: "lastName" },
      { Header: "داخلی", accessor: "internal" },
      { Header: "شرکت", accessor: "company" },
      {
        Header: "وضعیت",
        accessor: "isActive",
        Cell: ({ cell: { value } }) => <Status status={value} />,
      },
      {
        Header: "سطح دسترسی",
        accessor: "access",
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
    <div className="main-table mt-[40px] w-full px-[20px]">
      {usersData && <Table columns={columns} data={usersData} />}
    </div>
  );
};
export default TableSection;
