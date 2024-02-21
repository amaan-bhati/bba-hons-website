import React from "react";
import Image from "next/image";

const EntryExitCard = () => {
  return (
    <div className="w-[257px] min-h-[217px] text-[22px] justify-center flex flex-col items-center  px-4 py-3 duration-300 cursor-pointer bg-[#f4f4f48b] hover:text-white hover:bg-[#20364B]">
      <Image
        src="/Assets/pg5.png"
        alt="book"
        className="w-[25px] h-[34px]"
        width={30}
        height={30}
      />
      <hr className="w-[13%]  border-[#808080] my-3 border-[1.6px]" />
      <p>1 Year</p>

      <p>2 Semesters</p>
      <h1 className="text-[#4BB559] font-bold ">Certificate</h1>
    </div>
  );
};

export default EntryExitCard;
