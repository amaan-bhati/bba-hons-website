import ComponentsSection from "@/components/hero/components-section";
import HeaderSocials from "@/components/hero/header-socials";
import Navbar from "@/components/hero/navbar";
import Image from "next/image";
import React from "react";
import { IoIosArrowDroprightCircle, IoMdArrowDropright } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <div className="bg-[#20364B] min-h-screen flex flex-col ">
        <div className="mx-auto h-full max-w-screen-2xl flex-1 w-full flex flex-col px-2">
          <div className="px-2 space-y-2 h-full">
            <HeaderSocials />
            <Navbar />
          </div>
          <div className="h-full flex-1 flex gap-8 py-8 items-center justify-center lg:justify-between px-4 flex-col md:flex-row">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="space-y-12 text-white">
                <div className="flex gap-12 justify-between">
                  <h1 className="text-lg leading-5">
                    <span className="text-[#4BB559] text-5xl">BBA Hons</span>
                    <br />
                    (4 years) Program
                  </h1>
                </div>
                <div className="">
                  <ArrowSubheadings heading="NEP 2020 compliant" />
                  <ArrowSubheadings
                    heading={
                      <h1>
                        Cross integration of Basic Science,
                        <br /> Social Science and Business courses
                      </h1>
                    }
                  />
                  <ArrowSubheadings
                    heading={
                      <h1>
                        Best Business School in Odisha,
                        <br /> TIMES Business Awards 2023
                      </h1>
                    }
                  />
                  <ArrowSubheadings
                    heading={
                      <h1>
                        Part of KIIT DU, 16th Best University <br /> in India,
                        NIRF, MoE
                      </h1>
                    }
                  />
                  <ArrowSubheadings heading="Multiple Entry and Exit as per NEP" />
                  <ArrowSubheadings heading="Faculty from IIMs and IITs" />
                </div>
              </div>
              <div className="px-4 w-full max-w-xs md:min-w-[300px]">
                <div className="flex gap-2 items-center ">
                  <button className="flex gap-2 items-center bg-[#4BB559] text-white px-2 py-1 hover:bg-green-500 transition-colors duration-300">
                    Register <IoIosArrowDroprightCircle />
                  </button>
                  <button className="flex gap-2 items-center bg-[#4D4D4D] px-4 py-1 text-white hover:bg-gray-600 transition-colors duration-300 ">
                    Login <IoIosArrowDroprightCircle />
                  </button>
                </div>
                <div className="bg-white mt-2 w-full h-[350px]">
                  <iframe
                    src=""
                    frameBorder="0"
                    className="w-full h-full"
                  ></iframe>
                  <div className="mt-2">
                    <button className="flex gap-2 items-center bg-[#4BB559] text-white px-2 py-1 hover:bg-green-500 transition-colors duration-300">
                      Register <IoIosArrowDroprightCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex-shrink-0">
              <Image
                src="/b/hero-right-image.png"
                alt="hero-image-right"
                width={570}
                height={380}
                className="relative z-10 max-w-xs md:max-w-sm xl:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
      <ComponentsSection />
    </>
  );
};

export default Hero;

function ArrowSubheadings({ heading }: { heading: React.ReactNode }) {
  return (
    <div className="flex gap-1 leading-5">
      <IoMdArrowDropright className="text-[#4BB559] text-xl mt-[2px]" />
      {heading}
    </div>
  );
}
