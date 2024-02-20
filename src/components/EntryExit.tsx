import React from "react";
import Image from "next/image";

const EntryExit = () => {
  return (
    <div className="flex flex-col items-center">
        <h1 className="text-[#4BB559] text-2xl font-bold  my-3">Entry Exit Model</h1>
        <hr className="w-12  border-[#4BB559] mb-5 border-[1.4px]" />

      <div className="flex flex-wrap">
        <div className="w-[257px] min-h-[217px] text-[22px] justify-center flex flex-col items-center  px-4 py-3 bg-[#20364B]">
          <Image
            src="/Assets/pg5.png"
            alt="book"
            className="w-[25px] h-[34px]"
            width={30}
            height={30}
          />
          <hr className="w-[13%]  border-[#808080] my-3 border-[1.6px]" />
          <p className=" text-white">1 Year</p>

          <p className=" text-white">2 Semesters</p>
          <h1 className="text-[#4BB559] font-bold ">Certificate</h1>
        </div>
        <div className="w-[257px] min-h-[217px] text-[22px] justify-center flex flex-col items-center  px-4 py-3 bg-[#F4F4F4]">
          <Image
            src="/Assets/pg5.png"
            alt="book"
            className="w-[25px] h-[34px]"
            width={26}
            height={22}
          />
          <hr className="w-[13%]  border-[#808080] my-3 border-[1.6px]" />
          <p>1 Year</p>

          <p>2 Semesters</p>
          <h1 className="text-[#4BB559] font-bold ">Certificate</h1>
        </div>
        <div className="w-[257px] min-h-[217px] text-[22px] justify-center flex flex-col items-center  px-4 py-3 bg-[#E5E5E5]">
          <Image
            src="/Assets/pg5.png"
            alt="book"
            className="w-[25px] h-[34px]"
            width={26}
            height={22}
          />
          <hr className="w-[13%]  border-[#808080] my-3 border-[1.6px]" />
          <p>1 Year</p>

          <p>2 Semesters</p>
          <h1 className="text-[#4BB559] font-bold ">Certificate</h1>
        </div>
        <div className="w-[257px] min-h-[217px] text-[22px] justify-center flex flex-col items-center  px-4 py-3 bg-[#D8D8D8]">
          <Image
            src="/Assets/pg5.png"
            alt="book"
            className="w-[25px] h-[34px]"
            width={26}
            height={22}
          />
          <hr className="w-[13%]  border-[#808080] my-3 border-[1.6px]" />
          <p>1 Year</p>

          <p>2 Semesters</p>
          <h1 className="text-[#4BB559] font-bold ">Certificate</h1>
        </div>
      </div>
    </div>
  );
};

export default EntryExit;
