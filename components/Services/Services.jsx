import React from 'react'
import Image from 'next/image'

import headCircle from '@/public/images/heading_circle.svg'
import serviceThumb from '@/public/images/service_thumb.svg'
import servicePhone from '@/public/images/service_phone.svg'
import serviceProfile from '@/public/images/service_profile.svg'
import serviceChart from '@/public/images/service_chart.svg'

export default function Services() {
  return (
    <>
        <div className='px-5 py-3 mt-[40px] lg:mt-0 lg:shadow-none lg:pl-[30px] lg:pr-[60px]  bg-white rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]'>
            <div className="relative mb-3">
                <div  className='relative right-[10px] bottom-[1px] z-0'><Image src={headCircle}></Image></div>
                <p className='text-[20px] absolute top-0 z-10 font-semibold'><span className='text-[#FF7A00] '>My</span> Services</p>
            </div>
            <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
            <div className='my-[34px] lg:grid lg:grid-cols-2 gap-x-10'>
                <div className='flex items-start lg:flex-col lg:justify-center lg:items-center lg:text-center lg:gap-3'>
                    <Image src={serviceThumb} height={50} width={50}></Image>
                    <div className='ml-5'>
                        <p className='text-[16px] font-semibold mb-2'>Customer Service Management</p>
                        <p className='text-[12.5px] font-normal leading-4 text-justify mb-5'>At Remotual, I lead my customer service skill with a blend of strategy and a customer-first mindset. From fostering a responsive team culture to implementing innovative solutions, it's all about exceeding expectations.</p>
                        <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
                    </div>
                </div>
                <div className='flex items-start mt-5 lg:flex-col lg:justify-center lg:items-center lg:text-center lg:gap-3 lg:mt-0'>
                    <Image src={serviceProfile} height={50} width={50}></Image>
                    <div className='ml-5'>
                        <p className='text-[16px] font-semibold mb-2'>CEO Support</p>
                        <p className='text-[12.5px] font-normal leading-4 text-justify mb-5'>As the go-to support for our CEO Clients, I'm the behind-the-scenes magic maker. From scheduling to strategic execution, I ensure our leadership soars. Ready to elevate together? Let's make things happen.</p>
                        <div className='h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
                    </div>
                </div>
                <div className='flex items-start mt-5 lg:flex-col lg:justify-center lg:items-center lg:text-center lg:gap-3'>
                    <Image src={serviceChart} height={50} width={50}></Image>
                    <div className='ml-5'>
                        <p className='text-[16px] font-semibold mb-2'>Lead Generation</p>
                        <p className='text-[12.5px] font-normal leading-4 text-justify mb-5'>I'm the lead generation maestro. With a blend of data savvy and creative flair, I turn prospects into lasting connections. Ready to elevate your business? Let's connect and make waves together!</p>
                        <div className='lg:hidden h-[1px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
                    </div>
                </div>
                <div className='flex items-start mt-5 lg:flex-col lg:justify-center lg:items-center lg:text-center lg:gap-3'>
                    <Image src={servicePhone} height={50} width={50}></Image>
                    <div className='ml-5'>
                        <p className='text-[16px] font-semibold mb-2'>Inbound/Outbound calls</p>
                        <p className='text-[12.5px] font-normal leading-4 text-justify mb-5'>I'm the lead generation maestro. With a blend of data savvy and creative flair, I turn prospects into lasting connections. Ready to elevate your business? Let's connect and make waves together!</p>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}
