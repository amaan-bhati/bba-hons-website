import React from "react";
import Image from "next/image";
import { FacultyData } from "@/constants/Faculty";
import FacultyCard from "./FacultyCard";

const Faculty = () => {
  return (
    <div className="flex items-center flex-col gap-4">
      <h1 className="text-green text-2xl font-bold">Faculty Profiles</h1>
      <hr className="w-12  border-green border-[1.8px] mb-4" />

      <div className="text-[#444444] flex gap-16 flex-wrap items-center justify-center max-w-[1200px]">
        {FacultyData.map((data, index)=>{
            return <FacultyCard key={index} {...data}/>
        })}
       




        
      </div>
    </div>
  );
};

export default Faculty;
