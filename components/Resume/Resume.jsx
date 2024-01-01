import React from "react"
import line from "@/public/images/line.svg"
import Image from "next/image"
import line2 from "@/public/images/line2.svg"
import experience from "@/public/images/experience.svg"
import education from "@/public/images/education.svg"
import headCircle from '@/public/images/heading_circle.svg'


export default function Resume() {
  return (
    <div className="lg:mt-0 lg:shadow-none lg:pl-[30px] lg:pr-[60px] bg-white mt-[40px] p-[20px] rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]">
        <div className="relative mb-3">
            <div  className='relative right-[10px] bottom-[1px] z-0'><Image src={headCircle}></Image></div>
            <p className='text-[20px] absolute top-0 z-10 font-semibold'><span className='text-[#FF7A00] '>Resume</span></p>
        </div>
        <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>

      <div className="md:flex md:gap-10">
        <div>
          <div className="flex gap-3 items-center mt-6">
            <Image src={experience}></Image>
            <p className="text-[18px] font-semibold">Experience</p>
          </div>
          <div className="my-[10px]">
            <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
          </div>
          <div className="text-[13px] text-[#FF7A00] font-semibold border-[2px] w-fit px-6 py-[2px] border-[#FF7A00] rounded-[6px]">
            Aug2023-Present
          </div>
          <p className="text-[18px] font-medium mt-4">Executive Assistant</p>
          <p className="mt-2 text-[15px] text-[#BDBDBD]">Remotual</p>
          <div className="mt-3 px-6 text-[12.5px] text-justify ">
            <ul className="list-disc">
              <li className="">
                As the go-to support for our CEO Clients, I'm the
                behind-the-scenes magic maker.
              </li>
              <li className="">
                From scheduling to strategic execution, I ensure our leadership
                soars.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="lg:mt-6 flex gap-3 items-center  mt-4">
            <Image src={education}></Image>
            <p className="text-[18px] font-semibold">Education</p>
          </div>
          <div className="my-[10px]">
            <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
          </div>
          <div className="text-[13px] text-[#BDBDBD] font-semibold border-[2px] w-fit px-6 py-[2px] border-[#BDBDBD] rounded-[6px]">
            2015-2019
          </div>
          <p className="text-[18px] font-medium mt-4">
            Bachelor of Science in Psychology
          </p>
          <p className="mt-2 text-[15px] text-[#BDBDBD]">
            University of San Jose Recoletos
          </p>
          <div className="mt-3 px-6 text-[12.5px] text-justify">
            <ul className="list-disc">
              <li>
                As the go-to support for our CEO Clients, I'm the
                behind-the-scenes magic maker.
              </li>
              <li>
                From scheduling to strategic execution, I ensure our leadership
                soars.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}