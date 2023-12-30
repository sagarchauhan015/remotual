import React from 'react'
import Image from 'next/image'

import headCircle from '@/public/images/heading_circle.svg'


export default function AboutMe() {
  return (
    <>
        <div className="lg:mt-0 lg:shadow-none bg-white mt-[40px] p-[20px] rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]">
            <div className="relative mb-3">
                <div  className='relative right-[10px] bottom-[1px] z-0'><Image src={headCircle}></Image></div>
                <p className='text-[20px] absolute top-0 z-10 font-semibold'><span className='text-[#FF7A00] '>About</span> Me</p>
            </div>

            <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>

            <p className="text-[12.5px] mt-[20px] text-justify font-normal">
            I’m Mikka Mae, an Executive Assistant at Remotual.  I have
            experience of international client collaboration in diverse 
            industries including real estate, coaching, CEO support, and media expertise as well as graphic and web design.
            </p>

            <div>
                <div className="flex justify-between items-center my-3 text-[12.5px] font-normal">
                    <div className='bg-[#FF7A00] text-white px-5'>Age....</div>
                    <div>25</div>
                </div>
                <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
                <div className="flex justify-between items-center my-3 text-[12.5px] font-normal">
                    <div className='bg-[#FF7A00] text-white px-5'>Location....</div>
                    <div>India</div>
                </div>
                <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
                <div className="flex justify-between items-center my-3 text-[12.5px] font-normal">
                    <div className='bg-[#FF7A00] text-white px-5'>Availability....</div>
                    <div>40 hours/week</div>
                </div>
                <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
                <div className="flex justify-between items-center mt-3 text-[12.5px] font-normal">
                    <div className='bg-[#FF7A00] text-white px-5'>EA Experience....</div>
                    <div>6+ years</div>
                </div>
            </div>
        </div>
    </>
  )
}
