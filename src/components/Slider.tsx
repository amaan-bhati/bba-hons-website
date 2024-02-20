"use client"
import React from "react";
import "swiper/css";
import SliderCard from "./SliderCard";
import {  Autoplay, Pagination } from "swiper/modules";

import "swiper/css/bundle";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <div className="w-screen bg-[#20364B] flex items-center my-16 justify-center p-20">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        // cssMode={true}
        // mousewheel={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
        pagination={true}
        // navigation={true}

        // className="pl-40 "
        modules={[Autoplay, Pagination]}
        loop={false}
      >
        <SwiperSlide>
          {/* <h1>Hi</h1> */}
          <SliderCard/>
        </SwiperSlide>

        <SwiperSlide>
          {/* <h1>Hi</h1> */}
          <SliderCard/>

        </SwiperSlide>
        <SwiperSlide>
          {/* <h1>Hi</h1> */}
          <SliderCard/>

        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
