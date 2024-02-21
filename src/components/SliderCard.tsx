import React from "react";
import Image from "next/image";

const SliderCard = () => {
  return (
    <div className="w-screen text-white flex text-sm items-center justify-center mb-20 h-full md:pr-32 ">
      <div className="md:w-[70%] w-full max-w-[800px] flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-green font-bold text-2xl  ">Testimonials</h1>
        <h3 className="text-green font-bold ">PRAGATI CHOPDAR</h3>
        <Image
          src="/profiles/p1.png"
          alt="profile"
          width={140}
          height={140}
          className="w-[140px] h-[140px]"
        ></Image>
        <p >
          With world class infrastructure and tons of opportunities to explore
          oneself, every day we become a better person here. I will always be
          grateful for what KSOM has made me today.
        </p>
      </div>
    </div>
  );
};

export default SliderCard;
