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
  let arr = [];
  const buttons = pagesNumber.map((pageLabel, i) => {
    console.log({ currentPage, pagesNumber });
    const pageNumber = i + 1;
    if (
      pageNumber == 1 || //first page
      pageNumber == currentPage - 1 || // prev page
      pageNumber == currentPage || //current page
      pageNumber == currentPage + 1 || //next page
      pageNumber == pagesNumber.length //last page
    ) {
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
    if (currentPage < 9) {
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
  console.log(arr);
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
