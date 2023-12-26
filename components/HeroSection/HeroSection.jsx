'use client'
import {useState} from 'react'
import Image from 'next/image'
import tab1 from '@/public/images/tab1.gif'
import value from '@/public/images/value.svg'
import valueFocus from '@/public/images/value_focus.svg'
import lock from '@/public/images/lock.svg'
import lockFocus from '@/public/images/lock_focus.svg'
import time from '@/public/images/time.svg'
import timeFocus from '@/public/images/time.svg'
import protection from '@/public/images/protection.svg'
import protectionFocus from '@/public/images/protectionFocus.svg'
import plug from '@/public/images/plug.svg'
import plugFocus from '@/public/images/plug_focus.svg'
import browser from '@/public/images/browser.svg'
import browserFocus from '@/public/images/browser_focus.svg'
import globe from '@/public/images/globe2.svg'
import globeFocus from '@/public/images/globe2_focus.svg'
import dollar from '@/public/images/dollar.svg'
import dollarFocus from '@/public/images/dollar_focus.svg'





export default function HeroSection() {
  const [tabValue, setTabValue] = useState('tab6');

  return (
    <>
        <div className='bg-[#FFF7F0] w-full p-[60px]'>
            <div className='w-11/12 m-auto'>
                <div className='m-auto w-[65%] pt-[63px] pb-[37px]'>
                    <div className='m-auto text-[45px] font-medium text-center leading-[49.5px]'>Let's dive into what makes Remotual so awesome</div>
                </div>
                <div className='flex justify-between items-center gap-[14.5px]'>

                    <div className="w-[550px] h-[500px] rounded-[20px] bg-white flex justify-center items-center overflow-hidden p-2"><Image src={tab1} height={1000} width={1000} alt='tab1'></Image></div>


                    <div className='bg-[white] p-[16px] rounded-full flex flex-col justify-center items-center  shadow-[5.13px_5.13px_5.985px_0px_rgba(0,0,0,0.05)]'>
                        <div className='{}hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'>
                            {
                                tabValue === 'tab1' ? <div className='w-[25px] h-[25px]'><Image src={valueFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={value} height={100} width={100}></Image></div>
                            }
                            
                        </div>
                        <div className='hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'>
                            {
                                tabValue === 'tab2' ? <div className='w-[25px] h-[25px]'><Image src={lockFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={lock} height={100} width={100}></Image></div>
                            }
                        </div>
                        <div className='hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'>
                            {
                                tabValue === 'tab3' ? <div className='w-[25px] h-[25px]'><Image src={timeFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={time} height={100} width={100}></Image></div>
                            }
                            
                        </div>
                        <div className='hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'>
                            {
                                tabValue === 'tab4' ? <div className='w-[25px] h-[25px]'><Image src={protectionFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={protection} height={100} width={100}></Image></div>
                            }
                        </div>
                        <div className='hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'>
                            {
                                tabValue === 'tab5' ? <div className='w-[25px] h-[25px]'><Image src={plugFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={plug} height={100} width={100}></Image></div>
                            }
                            
                        </div>
                        <div className='hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'>
                            {
                                tabValue === 'tab6' ? <div className='w-[25px] h-[25px]'><Image src={browserFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={browser} height={100} width={100}></Image></div>
                            }
                        </div>
                        <div className='hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'>
                            {
                                tabValue === 'tab7' ? <div className='w-[25px] h-[25px]'><Image src={dollarFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={dollar} height={100} width={100}></Image></div>
                            }
                            
                        </div>
                        <div className='hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3'>
                            {
                                tabValue === 'tab8' ? <div className='w-[25px] h-[25px]'><Image src={globeFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={globe} height={100} width={100}></Image></div>
                            }
                        </div>
                        
                    </div>



                    <div className="w-[550px] h-[500px] rounded-[20px] overflow-hidden bg-white p-[20px]">
                            <div className='bg-[#FFF8F2] rounded-[10px] py-[10px] px-[20px]'>
                                <div className='text-[13px] font-[500] text-[#FF7A00] uppercase'>Value Proposition</div>
                                <div className='text-[34px] font-medium leading-[40px]'>Dedicated Task Force with a Dedicated EA</div>
                            </div>
                    </div>



                </div>
            </div>
        </div>
    </>
  )
}
