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
    <div className="w-full bg-[#20364B] flex items-center my-16 justify-center md:p-20 py-10 px-4 ">
    
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        // cssMode={true}
        // mousewheel={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter:true
          }}
        pagination={true}

        modules={[Autoplay, Pagination]}
        loop={false}
      >
        <SwiperSlide>

          <SliderCard/>
        </SwiperSlide>

        <SwiperSlide>

          <SliderCard/>

        </SwiperSlide>
        <SwiperSlide>

          <SliderCard/>

        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
