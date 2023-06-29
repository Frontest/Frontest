import { useState } from "react";
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";
const Pagination = ({
  pagesNumber,
  currentPage,
  pageChanger,
  paginationOptions: {
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
  },
}) => {
  const buttons = pagesNumber.map((pageLabel, i) => {
    const shouldSummerize = pagesNumber.length > 4;
    if (shouldSummerize) {
    }
    return (
      <div
        className={`mx-[5px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-xl border border-black ${
          i + 1 === currentPage && "border-none bg-[#219ebc] text-white"
        }`}
        onClick={() => {
          gotoPage(i);
        }}
      >
        {pageLabel.toString().latin2Persian()}
      </div>
    );
  });

  return (
    <div className="flex select-none">
      <div
        className={`mx-[5px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-xl border text-[20px] ${
          !canPreviousPage
            ? " cursor-not-allowed border border-[#d4d4d4] text-[#d4d4d4]"
            : "border-black"
        }`}
        onClick={(e) => {
          if (canPreviousPage) {
            pageChanger(currentPage - 1);
            previousPage();
          }
        }}
      >
        <BiSolidRightArrowAlt />
      </div>
      {buttons}
      <div
        className={`mx-[5px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-xl border  text-[20px] ${
          !canNextPage
            ? " cursor-not-allowed border border-[#d4d4d4] text-[#d4d4d4]"
            : "border-black"
        }`}
        onClick={(e) => {
          if (canNextPage) {
            pageChanger(currentPage + 1);
            nextPage();
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
