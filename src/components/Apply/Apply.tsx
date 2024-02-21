import React from "react";
import Image from "next/image";
import ApplyBox from "./ApplyBox";

const Apply = () => {
  return (
    <div className="bg-[#4bb55937] text-center flex flex-col gap-3 items-center px-8  pt-5 pb-16 ">
      <h1 className="font-bold text-[26px] ">Why Apply?</h1>
      <hr className="w-12  border-black mb-2 border-[1.8px]" />

      <div className="flex flex-col lg:flex-row gap-6  text-left max-w-[1500px] items-center justify-between ">
        <div className="font-bold text-sm ">
          <div className="flex gap-4 p-1 items-center">
            <Image
              src="/icons/arrow.png"
              className="w-4 h-4"
              alt="arrow"
              width={15}
              height={6}
            />
            <p>Ranked 2nd in India as per Times B School Ranking 2021</p>
          </div>
          <div className="flex gap-4 p-1 items-center ">
            <Image
              src="/icons/arrow.png"
              className="w-4 h-4"
              alt="arrow"
              width={10}
              height={10}
            />
            <p>Best B School of Odisha – Times Business Awards 2023</p>
          </div>
          <div className="flex gap-4 p-1 items-center ">
            <Image
              src="/icons/arrow.png"
              className="w-4 h-4"
              alt="arrow"
              width={10}
              height={10}
            />
            <p>Accredited by NAAC in A grade</p>
          </div>
          <div className="flex gap-4 p-1 items-center ">
            <Image
              src="/icons/arrow.png"
              className="w-4 h-4"
              alt="arrow"
              width={10}
              height={10}
            />
            <p>
              80% faculty from industry or with Ph.D. & over half the faculty
              from institutions such as IIMs, IITs, TISS, MDI, XLRI and other
              premier institutes
            </p>
          </div>
          <div className="flex gap-4 p-1 items-center ">
            <Image
              src="/icons/arrow.png"
              className="w-4 h-4"
              alt="arrow"
              width={10}
              height={10}
            />
            <p>
              Strong industry connect with more than 100 corporate interactions
              (conclaves, seminars, webinars, conferences, guest lectures) per
              year
            </p>
          </div>
          <div className="flex gap-4 p-1 items-center ">
            <Image
              src="/icons/arrow.png"
              className="w-4 h-4"
              alt="arrow"
              width={10}
              height={10}
            />
            <p>
              35 acre World Class infrastructure with smart classrooms, fully
              residential AC hoss tels and integrated WiFi campus{" "}
            </p>{" "}
          </div>
          <div className="flex gap-4 p-1 items-center ">
            <Image
              src="/icons/arrow.png"
              className="w-4 h-4"
              alt="arrow"
              width={15}
              height={10}
            />
            <p>Global school with students from more than 10 countries</p>{" "}
          </div>
          <div className="flex gap-4 p-1 items-center ">
            <Image
              src="/icons/arrow.png"
              className="w-4 h-4"
              alt="arrow"
              width={30}
              height={30}
            />
            <p>
              Amazing Campus Life with dedicated Clubs and Societies, Knowledge
              Dialogue Series, Alumni Talks and several sports events
            </p>{" "}
          </div>
        </div>
        <ApplyBox />
      </div>
    </div>
  );
};

export default Apply;
