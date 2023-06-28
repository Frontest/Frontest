import { useState } from "react";
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";
const Pagination = ({ pagesNumber, currentPage, pageChanger }) => {
  return (
    <div className="flex ">
      <div
        className={`mx-[5px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-xl border border-black text-[20px] ${
          currentPage === 1 &&
          " cursor-not-allowed border-[#d4d4d4] text-[#d4d4d4]"
        }`}
        onClick={(e) => {
          if (currentPage !== 1) {
            pageChanger(currentPage - 1);
          }
        }}
      >
        <BiSolidRightArrowAlt />
      </div>
      {summerizePages(pagesNumber).map((pageLabel, i) => {
        return (
          <div
            className={`mx-[5px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-xl border border-black ${
              i + 1 === currentPage && "border-none bg-[#219ebc] text-white"
            }`}
          >
            {pageLabel}
          </div>
        );
      })}
      <div
        className={`mx-[5px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-xl border border-black text-[20px] ${
          currentPage === pagesNumber &&
          " cursor-not-allowed border-[#d4d4d4] text-[#d4d4d4]"
        }`}
        onClick={(e) => {
          if (currentPage !== pagesNumber) {
            pageChanger(currentPage + 1);
          }
        }}
      >
        <BiSolidLeftArrowAlt />
      </div>
    </div>
  );
};
export default Pagination;

function summerizePages(pagesNumber) {
  const array = arrayMaker(pagesNumber).map((number) =>
    String(number).latin2Persian()
  );
  if (array.length < 5) {
    return array;
  } else {
    return [...array.slice(0, 2), "...", ...array.slice(-2)];
  }
}
function arrayMaker(length) {
  return new Array(length).fill(0).map((_, i) => i + 1);
}
