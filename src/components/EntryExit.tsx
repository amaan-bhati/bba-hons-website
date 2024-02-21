import React from "react";
import Image from "next/image";
import EntryExitCard from "./EntryExitCard";

const EntryExit = () => {
  return (
    <div className="flex flex-col  items-center">
      <h1 className="text-[#4BB559] text-2xl font-bold  my-3">
        Entry Exit Model
      </h1>
      <hr className="w-12  border-[#4BB559] text-center mb-5 border-[1.4px]" />

      <div className="flex flex-wrap items-center justify-center ">
        <div className="w-[257px] min-h-[217px] parent text-[22px] justify-center flex flex-col items-center  px-4 py-3 duration-200 cursor-pointer bg-[#f9f3f3a2] hover:text-white hover:bg-[#20364B]">
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
          <h1 className="text-[#4D4D4D] font-bold ">Certificate</h1>
        </div>
        <div className="w-[257px] min-h-[217px] parent text-[22px] justify-center flex flex-col items-center  px-4 py-3 hover:text-white hover:bg-[#20364B] duration-200 cursor-pointer bg-[#F4F4F4]">
          <Image
            src="/Assets/pg6.png"
            alt="book"
            className="w-[39px] h-[24px]"
            width={26}
            height={22}
          />
          <hr className="w-[13%]  border-[#808080] my-3 border-[1.6px]" />
          <p>4 Semesters</p>

          <p>2 Year</p>
          <h1 className="text-[#4D4D4D] font-bold ">Diploma</h1>
        </div>
        <div className="w-[257px] min-h-[217px] parent text-[22px] justify-center flex duration-200 cursor-pointer flex-col items-center  px-4 py-3 hover:text-white hover:bg-[#20364B] bg-[#E5E5E5]">
          <Image
            src="/Assets/pg7.png"
            alt="book"
            className="w-[25px] h-[34px]"
            width={26}
            height={22}
          />
          <hr className="w-[13%]  border-[#808080] my-3 border-[1.6px]" />
          <p>6 Semesters</p>

          <p>3 Year</p>
          <h1 className="text-[#4D4D4D] font-bold ">Degree</h1>
        </div>
        <div  className="w-[257px] parent h-[217px]  text-center text-[22px]  justify-center duration-200 cursor-pointer flex flex-col items-center  px-4 py-7 hover:text-white hover:bg-[#20364B] bg-[#D8D8D8]">
          <Image
            src="/Assets/pg3.png"
            alt="book"
            className="w-[35px] h-[28px]"
            width={26}
            height={22}
          />
          <hr className="w-[13%]  border-[#808080] my-3 border-[1.6px]" />
          <p>4 Year</p>

          <p>8 Semesters</p>
          <h1 className="text-[#4D4D4D] font-bold ">Hons. Degree with Major & Minor</h1>
        </div>
      </div>
    </div>
  );
};

export default EntryExit;
