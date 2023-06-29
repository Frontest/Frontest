import { SlArrowDown } from "react-icons/sl";

const Select = ({ total, pageSize, currentPage, pageItems }) => {
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
      <div class="relative px-[13px] py-[3px] h-[30px] w-[60px] rounded-xl border border-[#939393] flex items-center">
        <SlArrowDown className="text-[8px] " />
      </div>
    </div>
  );
};
export default Select;
