import { BsTriangleFill } from "react-icons/bs";
const SortTriangles = ({ isDesc, isReverse = false }) => {
  let currentStyle = {
    up: "",
    down: "",
  };
  if (isDesc === undefined) {
    currentStyle.down = "text-[#959595]";
    currentStyle.up = "text-[#959595]";
  } else if (isDesc === false) {
    currentStyle.down = "text-[#959595]";
    currentStyle.up = "text-[#333]";
  } else if (isDesc === true) {
    currentStyle.down = "text-[#333]";
    currentStyle.up = "text-[#959595]";
  }
  if (isReverse) {
    const tempUp = currentStyle.up;
    currentStyle.up = currentStyle.down;
    currentStyle.down = tempUp;
  }

  return (
    <div className="flex flex-col text-[9px]">
      <BsTriangleFill className={`${currentStyle.up}`} />
      <BsTriangleFill className={`scale-y-[-1] ${currentStyle.down}`} />
    </div>
  );
};
export default SortTriangles;
