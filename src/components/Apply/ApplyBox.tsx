import React from "react";
import Image from "next/image";

const ApplyBox = () => {
  return (
    <div className="flex gap-4 flex-wrap text-center justify-center max-w-[600px] ">
      <div className="w-[240px] min-h-[118px] flex flex-col items-center  px-4 py-3 bg-[#20364B]">
        <Image
          src="/Assets/pg1.png"
          alt="book"
          className="w-[26px] h-[22px]"
          width={26}
          height={22}
        />
        <h1 className="text-[#4BB559] font-bold py-1">Foundational Courses</h1>
        <hr className="w-[13%] mb-1 border-[#808080] border-[1.8px]" />
        <p className="text-xs text-white">
          Focus on building Breadth of Knowledge and development of fundamental
          skills
        </p>
      </div>
      <div className="w-[240px] flex flex-col min-h-[118px]  items-center  px-4 py-3 bg-[#E5E5E5]">
        <Image
          src="/Assets/pg2.png"
          alt="book"
          className="w-[30px] h-[28px]"
          width={26}
          height={22}
        />
        <h1 className="text-[#4BB559] font-bold py-1">
          {" "}
          Functional Courses Major+ Minor
        </h1>
        <hr className="w-[13%] mb-1 border-[#808080] border-[1.8px]" />
        <p className="text-xs ">Focus on Depth of Knowledge</p>
      </div>
      <div className="w-[240px] flex flex-col min-h-[118px]  items-center  px-4 py-3 bg-[#E5E5E5]">
        <Image
          src="/Assets/pg3.png"
          alt="book"
          className="w-[30px] h-[28px]"
          width={26}
          height={22}
        />
        <h1 className="text-[#4BB559] font-bold py-1">
          Experiential Learning Courses
        </h1>
        <hr className="w-[13%] mb-1 border-[#808080] border-[1.8px]" />
        <p className="text-xs ">
          Exposure to the Real World (Social, Cultural, Historical and Business
          World)
        </p>
      </div>
      <div className="w-[240px] flex flex-col min-h-[118px]  items-center  px-4 py-3 bg-[#E5E5E5]">
        <Image
          src="/Assets/pg4.png"
          alt="book"
          className="w-[26px] h-[22px]"
          width={26}
          height={22}
        />
        <h1 className="text-[#4BB559] font-bold py-1">
          Value Added /Life Skill Courses
        </h1>
        <hr className="w-[13%] mb-1 border-[#808080] border-[1.8px]" />
        <p className="text-xs ">
          Skills that can be Built, Developed and Transferred
        </p>
      </div>
    </div>
  );
};

export default ApplyBox;
