import { CiSearch } from "react-icons/ci";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi";
import { TbCreditCard, TbReportSearch } from "react-icons/tb";
import { useSearch } from "../../context/SearchContext";
const SideBar = ({ onSearchValueChange }) => {
  const {setSearchValue} = useSearch();
  return (
    <div className="w-[17%] border border-[--gray-border-color] bg-[--side-bar-bg-color]">
      <header className="px-5 pt-5">
        <div className="logo mx-auto mb-[40px] h-[60px] w-[60px] rounded-full bg-[#001eb4]"></div>
        <div className="my-[30px] flex h-[30px] w-full items-center rounded-lg border border-[--gray-border-color] bg-white px-2 py-1 align-middle">
          <CiSearch className="ml-2 scale-x-[-1] text-[16px] text-[#898989]" />
          <input
            type="text"
            placeholder="جستجو..."
            className="relative top-[-1px] w-full text-[10px] focus:outline-none"
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
      </header>
      <nav>
        <div className="relative my-[15px] flex w-full items-center justify-start border-l-[5px] border-l-[#0f32e3] bg-[#efefef] p-5 py-[5px]">
          <MdOutlineDashboardCustomize className="ml-[10px] text-[#0f32e3]" />
          <span className="relative top-[-1px] text-[13px]">داشبورد</span>
        </div>
        <div className="relative my-[15px] flex w-full items-center justify-start p-5 py-[5px]">
          <HiOutlineUsers className="ml-[10px]" />
          <span className="relative top-[-1px] text-[13px]">کاربران</span>
          <SlArrowDown className="absolute left-[10px] text-[15px]" />
        </div>
        <div className="relative my-[15px] flex w-full items-center justify-start p-5 py-[5px]">
          <TbReportSearch className="ml-[10px]" />
          <span className="relative top-[-1px] text-[13px]">گزارش ها</span>
          <SlArrowDown className="absolute left-[10px] text-[15px]" />
        </div>
        <div className="relative my-[15px] flex w-full items-center justify-start p-5 py-[5px]">
          <TbCreditCard className="ml-[10px] " />
          <span className="relative top-[-1px] text-[13px]">خرید</span>
        </div>
      </nav>
    </div>
  );
};
export default SideBar;
