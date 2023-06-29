import { memo } from "react";

const Select = ({
  total,
  pageSize,
  currentPage,
  pageItems,
  changePageSize,
}) => {
  const firstItemNumber = pageSize * (currentPage - 1) + 1;
  return (
    <div className="flex items-center">
      <div className="ml-[15px] text-[13px] text-[#7f8285]">
        <p>{`نمایش ${firstItemNumber.toString().latin2Persian()} تا ${(
          firstItemNumber +
          pageItems -
          1
        )
          .toString()
          .latin2Persian()} از مجموع ${total
          .toString()
          .latin2Persian()} مورد`}</p>
      </div>
      <div class="relative  flex h-[30px] w-[60px] items-center rounded-xl border border-[#939393] px-[2px] py-[3px]">
        <select
          dir="ltr"
          className="w-full  bg-transparent focus:outline-none"
          defaultValue={"8"}
          onChange={(e) => {
            changePageSize(+e.target.value);
          }}
        >

          <option value="8" disabled></option>
          <option value="8">8</option>
          <option value="5">5</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
};
export default memo(Select);
