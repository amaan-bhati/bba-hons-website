import React from 'react'
import Image from 'next/image'
interface faculty{
    image: string,
    name:string,
    experience: string
}

const FacultyCard = ({image, name, experience}: faculty) => {
  return (
    <div className="flex flex-col gap-2 w-[270px] items-center  min-h-[300px] text-center">
          <Image
            src={image}
            alt="profile"
            width={133}
            height={133}
            className="w-[133px] h-[133px]"
          ></Image>
          <h1 className="text-lg">{name}</h1>
        <hr className="w-12  border-green border-[1.8px]" />

          <p className="text-[13px]">
            {experience}
          </p>
        </div>
  )
}

export default FacultyCard