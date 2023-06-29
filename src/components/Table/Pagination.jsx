import { memo } from "react";
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";
const Pagination = ({
  pagesNumber,
  currentPage,
  paginationOptions: {
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
  },
}) => {
  const buttons = pagesNumber.map((pageLabel, i) => {
    const pageNumber = i + 1;
    if (
      pagesNumber.length < 6 ||
      pageNumber == 1 || //first page
      pageNumber == currentPage - 1 || // prev page
      pageNumber == currentPage || //current page
      pageNumber == currentPage + 1 || //next page
      pageNumber == pagesNumber.length //last page
    )  {
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
    }
  });
  if (buttons.length > 5) {
    if (currentPage < pagesNumber.length  - 2) {
      buttons[buttons.length - 2] = (
        <div
          className={`mx-[5px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-xl border border-black `}
        >
          ...
        </div>
      );
    }
    if (currentPage > 3) {
      buttons[1] = (
        <div
          className={`mx-[5px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-xl border border-black`}
        >
          ...
        </div>
      );
    }
  }
  return (
    <div className="flex select-none">
      <div
        className={`mx-[5px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-xl border text-[20px] ${
          !canPreviousPage
            ? " cursor-not-allowed border border-[#d4d4d4] text-[#d4d4d4]"
            : "border-black"
        }`}
        onClick={(e) => {
          canPreviousPage && previousPage();
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
          canNextPage && nextPage();
        }}
      >
        <BiSolidLeftArrowAlt />
      </div>
    </div>
  );
};
export default memo(Pagination);
