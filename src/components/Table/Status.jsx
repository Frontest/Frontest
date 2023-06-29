const Status = ({ status }) => {
  return (
    <div className="flex items-center">
      {!status && (
        <>
          <div className="h-[10px] w-[10px] rounded-full border-[3px] border-[#cbcbcb] bg-[#c02133]"></div>
          <span className="text-[#c02133] mr-[5px]">غیرفعال</span>
        </>
      )}
      {status && (
        <>
          <div className="h-[10px] w-[10px] rounded-full border-[3px] border-[#cbcbcb] bg-[#21a366]"></div>
          <span className="text-[#21a366] mr-[5px]">فعال</span>
        </>
      )}
    </div>
  );
};
export default Status;
