import { RiUserLine } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
import { CiMail } from "react-icons/ci";

const Main = () => {
  return (
    <main className="flex-1 bg-white">
      <div className="flex h-[80px] w-full items-center justify-between px-[42px] shadow-lg">
        <div className=" user-info flex items-center">
          <div className="ml-[10px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#f1f1f1]">
            <RiUserLine className="text-[24px]" />
          </div>
          <div className="felx-col  justify-between text-[15px]">
            <div>کیمیا جوکار</div>
            <div className="flex items-center text-[--blue-primary]">
              <span className=" text-[13px]">فنی - نرم افزار</span>
              <SlArrowDown className="mr-[5px] text-[10px]" />
            </div>
          </div>
        </div>
        <div className="user-stats flex h-[40px] w-[240px] items-center  ">
          <div className="reports text-[14px]">
            <span className="label ml-[10px] text-[--blue-primary]">
              تعداد گزارشات:
            </span>
            <span className="content">
              {Number(107752).toLocaleString().latin2Persian()}
            </span>
          </div>
          <div className="mx-[15px] w-[2px] self-stretch bg-[--blue-primary]">
            &nbsp;
          </div>
          <CiMail className="text-[20px]" />
        </div>
      </div>
    </main>
  );
};
export default Main;
