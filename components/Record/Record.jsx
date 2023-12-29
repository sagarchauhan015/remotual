import React from 'react'
import Image from 'next/image'

import headCircle from '@/public/images/heading_circle.svg'
import serviceProfile from '@/public/images/service_profile.svg'



export default function Record() {
  return (
    <>
        <div className='px-5 py-3 mt-[40px] bg-white rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]'>
            <div className="relative mb-3">
                <div  className='relative right-[10px] bottom-[1px] z-0'><Image src={headCircle}></Image></div>
                <p className='text-[20px] absolute top-0 z-10 font-semibold'><span className='text-[#FF7A00] '>Track</span> Record</p>
            </div>
            <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
            <div className='grid grid-cols-2 justify-center place-items-center mt-4'>
                <div className='w-full p-4 grid place-items-center border-r-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'>
                    <Image src={serviceProfile} height={50} width={50}></Image>
                    <p className='font-semibold text-[30px] my-2'>50+</p>
                    <p className='font-semibold text-[13px]'>Clients</p>
                </div>
                <div className='w-full p-4 grid place-items-center'>
                    <Image src={serviceProfile} height={50} width={50}></Image>
                    <p className='font-semibold text-[30px] my-2'>50+</p>
                    <p className='font-semibold text-[13px]'>Clients</p>
                </div>
                <div className='w-full p-4 grid place-items-center'>
                    <Image src={serviceProfile} height={50} width={50}></Image>
                    <p className='font-semibold text-[30px] my-2'>50+</p>
                    <p className='font-semibold text-[13px]'>Clients</p>
                </div>
                <div className='w-full p-4 grid place-items-center'>
                    <Image src={serviceProfile} height={50} width={50}></Image>
                    <p className='font-semibold text-[30px] my-2'>50+</p>
                    <p className='font-semibold text-[13px]'>Clients</p>
                </div>
            </div>
        </div>
    </>
  )
}
