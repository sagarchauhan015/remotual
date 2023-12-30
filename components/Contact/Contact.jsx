import React from 'react'
import Image from 'next/image'
import user1 from '@/public/images/user_mika.svg'
import linkedinImg from '@/public/images/linkedIN.svg'
import mailImg from '@/public/images/mail.svg'
import phoneImg from '@/public/images/phone.svg'

export default function Contact() {
  return (
    <>
        <div className='lg:w-[fit-content] lg:flex lg:flex-col lg:justify-between lg:h-full m-auto bg-white rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]'>
            <div className='w-full flex justify-center'><Image src={user1}></Image> </div>
            <div className='text-[28px] text-semibold mt-[27px] text-center'>Mika Mae U.</div>
            <div className='text-[12px] font-[600] text-center uppercase text-[#FF7A00] my-[14px]'>Executive Assistant</div>
            <div className='flex justify-center mb-[18px] lg:mb-[22px]'>
                <div className='w-[26px] h-[26px] cursor-pointer'><Image src={linkedinImg}></Image></div>
                <div className='w-[26px] h-[26px] cursor-pointer mx-2'><Image src={mailImg}></Image></div>
                <div className='w-[26px] h-[26px] cursor-pointer'><Image src={phoneImg}></Image></div>
            </div>
            <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
            <div className="mt-[10px] text-center"><button className='w-[50%] border-none rounded-full py-2 px-10 mb-3 hover:bg-[#FF7A00] transition duration-500 ease-linear hover:text-white'>Hire Me</button></div>
        </div>
    </>
  )
}
