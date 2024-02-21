import Image from "next/image";

const ComponentsSection = () => {
  return (
    <div className="bg-white py-8">
      <h1 className="text-[#4BB559] font-bold text-center text-2xl flex flex-col justify-center">
        Components
        <span className="w-16 h-[2px] bg-[#4BB559] flex self-center my-2"></span>
      </h1>
      <div className="">
        <div className="max-w-screen-2xl mx-auto flex justify-center gap-[1px] flex-wrap">
          <div className="bg-[#4BB559] w-52 h-32 flex flex-col items-center justify-center">
            <Image
              src="/b/components/Group.svg"
              alt="components-group"
              width={35}
              height={35}
              className="border-b-2 pb-1"
            />
            <div className="text-center leading-5 mt-2 font-bold text-white">
              Functional <br /> Courses
            </div>
          </div>
          <div className="bg-[#F4F4F4] w-52 h-32 flex flex-col items-center justify-center">
            <Image
              src="/b/components/target.svg"
              alt="components-group"
              width={35}
              height={35}
              className="border-b-2 pb-1 border-[#4D4D4D]"
            />
            <div className="text-center leading-5 mt-2 font-bold text-[#4D4D4D]">
              Functional <br /> Specialization
            </div>
          </div>
          <div className="bg-[#E5E5E5] w-52 h-32 flex flex-col items-center justify-center">
            <Image
              src="/b/components/hat.svg"
              alt="components-group"
              width={45}
              height={55}
              className="border-b-2 pb-1 pt-2 border-[#4D4D4D]"
            />
            <div className="text-center leading-5 mt-2 font-bold text-[#4D4D4D]">
              Experiential & <br /> Immersive Learning
            </div>
          </div>
          <div className="bg-[#D8D8D8] w-52 h-32 flex flex-col items-center justify-center">
            <Image
              src="/b/components/paper.svg"
              alt="components-group"
              width={35}
              height={35}
              className="border-b-2 pb-1 pt-2 border-[#4D4D4D]"
            />
            <div className="text-center leading-5 mt-2 font-bold text-[#4D4D4D]">
              Life skill
              <br /> Courses
            </div>
          </div>
          <div className="bg-[#CECECE] w-52 h-32 flex flex-col items-center justify-center">
            <Image
              src="/b/components/globe.svg"
              alt="components-group"
              width={30}
              height={35}
              className="border-b-2 pb-1 border-[#4D4D4D]"
            />
            <div className="text-center leading-5 mt-2 font-bold text-[#4D4D4D]">
              Open
              <br /> Electives
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsSection;
