import React from 'react'
import Image from 'next/image'
import teamUpper from '@/public/images/team_upper.svg'
import teamDown from '@/public/images/team_down.svg'



import team1 from '@/public/images/team_profile1.svg'
import team2 from '@/public/images/team_profile2.svg'
import team3 from '@/public/images/team_profile3.svg'
import team4 from '@/public/images/team_profile4.svg'

export default function TeamSection() {
  return (
    <>
        <div className='bg-black'>
            <div><Image src={teamUpper} height={1000} width={1000} ></Image></div>
            <div className='h-[fit-content] w-11/12 m-auto md:hidden'>
                <div className='text-center mt-[50px]'>
                    <div className='text-[#FF7A00] text-[34px] font-semibold'>Your Team Success.</div>
                    <div className='text-white text-[18px]'>Meet our Top-class EA's</div>
                </div>
                <div className='mt-[50px]'>
                    <div className="bg-white w-full px-[20px] my-4 py-[18px] rounded-[18px] flex">
                        <div className='h-[100px] w-[100px] rounded-full'><Image src={team1} height={1000} width={1000}></Image></div>
                        <div className='ml-[20px]'>
                            <div className='text-[18px] font-semibold'>Mikka Mae</div>
                            <div className='text-[14px]'>Executive Assitant at Remotual</div>
                            <div className='mt-5'>
                                <a href="/" className='text-[#FF7A00] text-[14px] font-medium'>View Profile ➔</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white w-full px-[20px] my-4 py-[18px] rounded-[18px] flex">
                        <div className='h-[100px] w-[100px] rounded-full'><Image src={team2} height={1000} width={1000}></Image></div>
                        <div className='ml-[20px]'>
                            <div className='text-[18px] font-semibold'>Cartola A.</div>
                            <div className='text-[14px]'>Executive Assitant at Remotual</div>
                            <div className='mt-5'>
                                <a href="/" className='text-[#FF7A00] text-[14px] font-medium'>View Profile ➔</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white w-full px-[20px] my-4 py-[18px] rounded-[18px] flex">
                        <div className='h-[100px] w-[100px] rounded-full'><Image src={team3} height={1000} width={1000}></Image></div>
                        <div className='ml-[20px]'>
                            <div className='text-[18px] font-semibold'>Hoda A.</div>
                            <div className='text-[14px]'>Executive Assitant at Remotual</div>
                            <div className='mt-5'>
                                <a href="/" className='text-[#FF7A00] text-[14px] font-medium'>View Profile ➔</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white w-full px-[20px] my-4 py-[18px] rounded-[18px] flex">
                        <div className='h-[100px] w-[100px] rounded-full'><Image src={team4} height={1000} width={1000}></Image></div>
                        <div className='ml-[20px]'>
                            <div className='text-[18px] font-semibold'>Mikka Mae</div>
                            <div className='text-[14px]'>Executive Assitant at Remotual</div>
                            <div className='mt-5'>
                                <a href="/" className='text-[#FF7A00] text-[14px] font-medium'>View Profile ➔</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white w-full px-[20px] my-4 py-[18px] rounded-[18px] flex">
                        <div className='h-[100px] w-[100px] rounded-full'><Image src={team2} height={1000} width={1000}></Image></div>
                        <div className='ml-[20px]'>
                            <div className='text-[18px] font-semibold'>Jacqueline F.</div>
                            <div className='text-[14px]'>Executive Assitant at Remotual</div>
                            <div className='mt-5'>
                                <a href="/" className='text-[#FF7A00] text-[14px] font-medium'>View Profile ➔</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="hidden md:block w-11/12 m-auto">
                <div className='text-center mt-[50px]'>
                    <div className='text-[#FF7A00] text-[34px] font-semibold'>Building Your Team Success.</div>
                    <div className='text-white text-[18px]'>Meet our Top-class EA's</div>
                </div>
            </div>
            <div className='mt-[60px]'><Image src={teamDown} height={1000} width={1000} ></Image></div>
        </div>
    </>
  )
}
