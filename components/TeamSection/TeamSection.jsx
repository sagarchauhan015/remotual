import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import teamUpper from '@/public/images/team_upper.svg'
import teamDown from '@/public/images/team_down.svg'

import team1 from '@/public/images/team_profile1.svg'
import team2 from '@/public/images/team_profile2.svg'
import team3 from '@/public/images/team_profile3.svg'
import team4 from '@/public/images/team_profile4.svg'
import team5 from '@/public/images/team_profile5.svg'
import team6 from '@/public/images/team_profile6.svg'
import viewProfile from '@/public/images/view_profile.svg'
import dataJson from '@/utils/dataJson'

export default function TeamSection() {
  return (
    <>
        <div className='bg-[#222222]'>
            <div className='w-full'><Image src={teamUpper} height={2000} width={2000} ></Image></div>
            <div className='h-[fit-content] w-11/12 m-auto md:hidden'>
                <div className='text-center mt-[50px]'>
                    <div className='text-[#FF7A00] text-[34px] font-semibold'>Your Team Success.</div>
                    <div className='text-white text-[18px]'>Meet our Top-class EA's</div>
                </div>
                <div className='mt-[50px]'>

                    {
                        dataJson.salesPage.teams.team.map((team) => {
                            return(
                                <div className="bg-white w-full px-[20px] my-4 py-[18px] rounded-[18px] flex justify-center items-center">
                                    <div className='h-[100px] w-[100px] rounded-full'><Image src={team.image} height={1000} width={1000}></Image></div>
                                    <div className='ml-[20px]'>
                                        <div className='text-[18px] font-semibold'>{team.name}</div>
                                        <div className='text-[14px]'>{team.title}</div>
                                        <div className='mt-5'>
                                            <a href={team.redirect_url} target="_blank" className='text-[#FF7A00] text-[14px] font-medium'>View Profile ➔</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="hidden md:flex md:flex-col md:justify-center md:items-center w-11/12 m-auto h-[680px] relative">
                <div className='text-center'>
                    <div className='text-[#FF7A00] text-[45px] font-semibold'>Building Your Team Success.</div>
                    <div className='text-white text-[26px]'>Meet our Top-class EA's</div>
                </div>
                <div className="absolute w-full h-full">
                    <Link href="/profile/mika">
                        <div className='group h-[170px] w-[170px] rounded-full absolute left-28 top-10 bg-[url("../public/images/team_profile1.svg")] bg-no-repeat bg-cover'>
                            <div className='flex justify-center items-center w-full h-full rounded-full transition-all duration-500 ease-linear cursor-pointer hover:bg-[rgba(255,123,0,0.7)]'>
                                <div className='hidden transition-all duration-500 group-hover:flex justify-center flex-col items-center'>
                                    <Image src={viewProfile}></Image>
                                    <p className='text-white'>Preview</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/profile/carlota">
                        <div className='group h-[150px] w-[150px] rounded-full absolute bottom-40 bg-[url("../public/images/team_profile2.svg")] bg-no-repeat bg-cover'>
                            <div className='flex justify-center items-center w-full h-full rounded-full transition-all duration-500 ease-linear cursor-pointer hover:bg-[rgba(255,123,0,0.7)]'>
                                <div className='hidden transition-all duration-500 group-hover:flex justify-center flex-col items-center'>
                                    <Image src={viewProfile}></Image>
                                    <p className='text-white'>Preview</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                      <Link href="/profile/hoda">
                        <div className='group h-[146px] w-[146px] rounded-full absolute bottom-[130px] right-[280px] bg-[url("../public/images/team_profile3.svg")] bg-no-repeat bg-cover'>
                            <div className='flex justify-center items-center w-full h-full rounded-full transition-all duration-500 ease-linear cursor-pointer hover:bg-[rgba(255,123,0,0.7)]'>
                                <div className='hidden transition-all duration-500 group-hover:flex justify-center flex-col items-center'>
                                    <Image src={viewProfile}></Image>
                                    <p className='text-white'>Preview</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/profile/jacqueline">
                        <div className='group h-[150px] w-[150px] rounded-full absolute right-0 top-[35%] bg-[url("../public/images/team_profile4.svg")] bg-no-repeat bg-cover'>
                            <div className='flex justify-center items-center w-full h-full rounded-full transition-all duration-500 ease-linear cursor-pointer hover:bg-[rgba(255,123,0,0.7)]'>
                                <div className='hidden transition-all duration-500 group-hover:flex justify-center flex-col items-center'>
                                    <Image src={viewProfile}></Image>
                                    <p className='text-white'>Preview</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/profile/jae">
                        <div className='group h-[190px] w-[190px] rounded-full absolute bottom-12 left-[28%] bg-[url("../public/images/team_profile5.svg")] bg-no-repeat bg-cover'>
                            <div className='flex justify-center items-center w-full h-full rounded-full transition-all duration-500 ease-linear cursor-pointer hover:bg-[rgba(255,123,0,0.7)]'>
                                <div className='hidden transition-all duration-500 group-hover:flex justify-center flex-col items-center'>
                                    <Image src={viewProfile}></Image>
                                    <p className='text-white'>Preview</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/profile/mudassar">
                        <div className='group h-[120px] w-[120px] rounded-full absolute right-[30%] top-24 bg-[url("../public/images/team_profile6.svg")] bg-no-repeat bg-cover'>
                            <div className='flex justify-center items-center w-full h-full rounded-full transition-all duration-500 ease-linear cursor-pointer hover:bg-[rgba(255,123,0,0.7)]'>
                                <div className='hidden transition-all duration-500 group-hover:flex justify-center flex-col items-center'>
                                    <Image src={viewProfile}></Image>
                                    <p className='text-white'>Preview</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='mt-[60px] md:mt-0'><Image src={teamDown} height={2000} width={2000} ></Image></div>
        </div>
    </>
  )
}
