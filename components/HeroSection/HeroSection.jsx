'use client'
import {useState} from 'react'
import Image from 'next/image'
import valueGif from '@/public/images/valueGif.gif'
import lockGif from '@/public/images/lockGif.gif'
// import timeGif from '@/public/images/timeGif.gif'
import protectionGif from '@/public/images/protectionGif.gif'
import browserGif from '@/public/images/browserGif.gif'
import globeGif from '@/public/images/globeGif.png'
// import dollarGif from '@/public/images/dollarGif.gif'
import plugGif from '@/public/images/plugGif.gif'
import value from '@/public/images/value.svg'
import valueFocus from '@/public/images/value_focus.svg'
import lock from '@/public/images/lock.svg'
import lockFocus from '@/public/images/lock_focus.svg'
import time from '@/public/images/time.svg'
import timeFocus from '@/public/images/time_focus.svg'
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
  const [tabValue, setTabValue] = useState('tab1');

  function handleTabValue(value){
    setTabValue(value);
  }

  return (
    <>
        <div className='bg-[#FFF7F0] w-full pb-[60px]'>
            <div className='w-11/12 m-auto'>
                <div className='m-auto md:w-[62%] w-full pt-[63px] pb-[37px]'>
                    <div className='m-auto md:text-[45px] text-[34px] font-semibold text-center leading-[49.5px]'>Let's dive into what makes Remotual so awesome</div>
                </div>
                <div className='flex justify-between items-center gap-[20px] flex-col md:flex-row '>

                    <div className="w-full md:w-[600px] md:h-[510px] rounded-[20px] order-2 md:order-1 shadow-[6px_6px_7px_0px_rgba(0,0,0,0.05)] bg-white flex justify-center items-center overflow-hidden">
                        {
                            {
                                'tab1': <><Image src={valueGif} height={1000} width={1000} alt='gif'></Image></>,
                                'tab2': <><Image src={lockGif} height={1000} width={1000} alt='gif'></Image></>,
                                'tab3': <><Image src={valueGif} height={1000} width={1000} alt='gif'></Image></>,
                                'tab4': <><Image src={protectionGif} height={1000} width={1000} alt='gif'></Image></>,
                                'tab5': <><Image src={plugGif} height={1000} width={1000} alt='gif'></Image></>,
                                'tab6': <><Image src={browserGif} height={1000} width={1000} alt='gif'></Image></>,
                                'tab7': <><Image src={valueGif} height={1000} width={1000} alt='gif'></Image></>,
                                'tab8': <><Image src={globeGif} height={1000} width={1000} alt='gif'></Image></>,
                            }[tabValue]
                        }
                    </div>



                    <div className='bg-[white] p-[16px] md:rounded-full grid grid-cols-4 md:grid-cols-1 place-items-center rounded-[18px] w-full md:w-[fit-content] order-1 md:order-2 justify-center items-center  shadow-[5.13px_5.13px_5.985px_0px_rgba(0,0,0,0.05)]'>
                        <div onClick={() => handleTabValue('tab1')} className={tabValue === 'tab1' ? 'bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]' : 'hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'}>
                            {
                                tabValue === 'tab1' ? <div className='w-[25px] h-[25px]'><Image src={valueFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={value} height={100} width={100}></Image></div>
                            }
                            
                        </div>
                        <div onClick={() => handleTabValue('tab2')} className={tabValue === 'tab2' ? 'bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]' : 'hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'}>
                            {
                                tabValue === 'tab2' ? <div className='w-[25px] h-[25px]'><Image src={lockFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={lock} height={100} width={100}></Image></div>
                            }
                        </div>
                        <div onClick={() => handleTabValue('tab3')} className={tabValue === 'tab3' ? 'bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]' : 'hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'}>
                            {
                                tabValue === 'tab3' ? <div className='w-[25px] h-[25px]'><Image src={timeFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={time} height={100} width={100}></Image></div>
                            }
                            
                        </div>
                        <div onClick={() => handleTabValue('tab4')} className={tabValue === 'tab4' ? 'bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]' : 'hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'}>
                            {
                                tabValue === 'tab4' ? <div className='w-[25px] h-[25px]'><Image src={protectionFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={protection} height={100} width={100}></Image></div>
                            }
                        </div>
                        <div onClick={() => handleTabValue('tab5')} className={tabValue === 'tab5' ? 'bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]' : 'hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'}>
                            {
                                tabValue === 'tab5' ? <div className='w-[25px] h-[25px]'><Image src={plugFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={plug} height={100} width={100}></Image></div>
                            }
                            
                        </div>
                        <div onClick={() => handleTabValue('tab6')} className={tabValue === 'tab6' ? 'bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]' : 'hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'}>
                            {
                                tabValue === 'tab6' ? <div className='w-[25px] h-[25px]'><Image src={browserFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={browser} height={100} width={100}></Image></div>
                            }
                        </div>
                        <div onClick={() => handleTabValue('tab7')} className={tabValue === 'tab7' ? 'bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]' : 'hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3 mb-[14px]'}>
                            {
                                tabValue === 'tab7' ? <div className='w-[25px] h-[25px]'><Image src={dollarFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={dollar} height={100} width={100}></Image></div>
                            }
                            
                        </div>
                        <div onClick={() => handleTabValue('tab8')} className={tabValue === 'tab8' ? 'bg-[#FFF5EC] transition ease-linear duration-1000 rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3' : 'hover:bg-[#FFF5EC] rounded-full w-[fit-content] cursor-pointer flex justify-center items-center p-3'}>
                            {
                                tabValue === 'tab8' ? <div className='w-[25px] h-[25px]'><Image src={globeFocus} height={100} width={100}></Image></div> : <div className='w-[25px] h-[25px]'><Image src={globe} height={100} width={100}></Image></div>
                            }
                        </div>
                        
                    </div>



                    <div className="w-full md:w-[600px] shadow-[6px_6px_7px_0px_rgba(0,0,0,0.05)] order-3 md:order-3 md:max-h-[510px] h-[fit-content] transition-all duration-1000 ease-linear rounded-[20px] md:overflow-scroll bg-white p-[20px]">
                            {
                                {
                                    'tab1': <>
                                                <div className='bg-[#FFF8F2] rounded-[10px] py-[10px] px-[20px]'>
                                                    <div className='text-[13px] font-[500] text-[#FF7A00] uppercase'>Value Proposition</div>
                                                    <div className='text-[29px] md:text-[34px] font-medium leading-[40px]'>Dedicated Task Force with a Dedicated EA</div>
                                                </div>

                                                <div className="mt-[20px]">
                                                    <div className="flex justify-center items-center">
                                                        <div className="bg-[#FFF5EC] p-4 rounded-full">
                                                            <div className='w-[25px] h-[25px] text-orange-600'><Image src={value} height={100} width={100}></Image></div>
                                                        </div>
                                                        <div className="font-[300] ml-2 text-[14px]">
                                                            <p>Why settle for a single VA or the hassle of managing multiple individual VAs when you can have your own Oceans-11 Style Team, led by a dedicated EA who can be your single point of contact?</p>
                                                        </div>
                                                    </div>
                                                    <div className="border-[0.5px] border-solid my-4 border-[#BDBDBD]"></div>
                                                    <div className="flex justify-center items-center">
                                                        <div className="bg-[#FFF5EC] p-4 rounded-full">
                                                            <div className='w-[25px] h-[25px] text-orange-600'><Image src={value} height={100} width={100}></Image></div>
                                                        </div>
                                                        <div className="font-[300] ml-2 text-[14px]">
                                                            <p>Each team member has gone through rigorous vetting, background checks, and comprehensive training before joining your project. Excellence isn't just a goal; it's our standard.</p>
                                                        </div>
                                                    </div>
                                                    <div className="border-[0.5px] border-solid my-4 border-[#BDBDBD]"></div>
                                                    <div className="flex justify-center items-center">
                                                        <div className="bg-[#FFF5EC] p-4 rounded-full">
                                                            <div className='w-[25px] h-[25px] text-orange-600'><Image src={value} height={100} width={100}></Image></div>
                                                        </div>
                                                        <div className="font-[300] ml-2 text-[14px]">
                                                            <p>Our EAs are elite, tech-savvy, and versatile. They seamlessly step into roles like Project Managers, Coordinators, and Operations Managers. When you choose us, you're choosing nothing less than excellence.</p>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="w-[fit-content] bg-[#FF7A00] px-5 py-3 text-white rounded-full mt-4 cursor-pointer">Get Started</div>
                                            </>,

                                        'tab2' : <>
                                                    <div className='bg-[#FFF8F2] rounded-[10px] py-[10px] px-[20px]'>
                                                        <div className='text-[13px] font-[500] text-[#FF7A00] uppercase'>Value Proposition</div>
                                                        <div className='text-[34px] font-medium leading-[40px]'>Unlock Limitless Growth with Us!</div>
                                                    </div>

                                                    <div className="mt-[20px]">
                                                        <div className="flex justify-center items-center">
                                                            <div className="bg-[#FFF5EC] p-4 rounded-full">
                                                                <div className='w-[25px] h-[25px] text-orange-600'><Image src={lock} height={100} width={100}></Image></div>
                                                            </div>
                                                            <div className="font-[300] ml-2 text-[14px]">
                                                                <p>Meet our scalable wizards! No matter your needs, we've got you covered - and the best part? We're all right under one roof!</p>
                                                            </div>
                                                        </div>
                                                        <div className="border-[0.5px] border-solid my-4 border-[#BDBDBD]"></div>
                                                        <div className="flex justify-center items-center">
                                                            <div className="bg-[#FFF5EC] p-4 rounded-full">
                                                                <div className='w-[25px] h-[25px] text-orange-600'><Image src={lock} height={100} width={100}></Image></div>
                                                            </div>
                                                            <div className="font-[300] ml-2 text-[14px]">
                                                                <p>Request services like lead generation, research, bookkeeping, SEO, graphic design, cold calling, marketing, sales, web development, and more as your needs evolve - we've got your back!</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-[fit-content] bg-[#FF7A00] px-5 py-3 text-white rounded-full mt-4 cursor-pointer">Get Started</div>
                                                </>,
                                        'tab3': <>
                                        <div className='bg-[#FFF8F2] rounded-[10px] py-[10px] px-[20px]'>
                                            <div className='text-[13px] font-[500] text-[#FF7A00] uppercase'>Value Proposition</div>
                                            <div className='text-[34px] font-medium leading-[40px]'>Efficiency Crusaders</div>
                                        </div>

                                        <div className="mt-[20px]">
                                            <div className="flex justify-center items-center">
                                                <div className="bg-[#FFF5EC] p-4 rounded-full">
                                                    <div className='w-[25px] h-[25px] text-orange-600'><Image src={time} height={100} width={100}></Image></div>
                                                </div>
                                                <div className="font-[300] ml-2 text-[14px]">
                                                    <p>We're fueled by efficiency, not hours billed. We're on a mission to streamline, cut costs, and supercharge your productivity.</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="w-[fit-content] bg-[#FF7A00] px-5 py-3 text-white rounded-full mt-4 cursor-pointer">Get Started</div>
                                    </>,

                                'tab4': <>
                                <div className='bg-[#FFF8F2] rounded-[10px] py-[10px] px-[20px]'>
                                    <div className='text-[13px] font-[500] text-[#FF7A00] uppercase'>Value Proposition</div>
                                    <div className='text-[34px] font-medium leading-[40px]'>EA Churn Protection</div>
                                </div>

                                <div className="mt-[20px]">
                                    <div className="flex justify-center items-center">
                                        <div className="bg-[#FFF5EC] p-4 rounded-full">
                                            <div className='w-[25px] h-[25px] text-orange-600'><Image src={protection} height={100} width={100}></Image></div>
                                        </div>
                                        <div className="font-[300] ml-2 text-[14px]">
                                            <p>Say goodbye to job posts, screening, interviews, and endless onboarding. No more worries about disappearing assistants.</p>
                                        </div>
                                    </div>
                                    <div className="border-[0.5px] border-solid my-4 border-[#BDBDBD]"></div>
                                    <div className="flex justify-center items-center">
                                        <div className="bg-[#FFF5EC] p-4 rounded-full">
                                            <div className='w-[25px] h-[25px] text-orange-600'><Image src={protection} height={100} width={100}></Image></div>
                                        </div>
                                        <div className="font-[300] ml-2 text-[14px]">
                                            <p>With Remotual, scale up and down effortlessly 🌟, never fret about the chaos of VA turnover. We guarantee backup and rock-solid Standard Operating Procedures for unwavering stability.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[fit-content] bg-[#FF7A00] px-5 py-3 text-white rounded-full mt-4 cursor-pointer">Get Started</div>
                            </>,

                            'tab5': <>
                            <div className='bg-[#FFF8F2] rounded-[10px] py-[10px] px-[20px]'>
                                <div className='text-[13px] font-[500] text-[#FF7A00] uppercase'>Value Proposition</div>
                                <div className='text-[34px] font-medium leading-[40px]'>Plug-And-Play</div>
                            </div>

                            <div className="mt-[20px]">
                                <div className="flex justify-center items-center">
                                    <div className="bg-[#FFF5EC] p-4 rounded-full">
                                        <div className='w-[25px] h-[25px] text-orange-600'><Image src={plug} height={100} width={100}></Image></div>
                                    </div>
                                    <div className="font-[300] ml-2 text-[14px]">
                                        <p>Our tech-savvy EAs effortlessly fuse into your tech stack, supercharging your digital prowess. Our plug-and-play onboarding means we hit the ground running for your business - no sweat, no stress.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[fit-content] bg-[#FF7A00] px-5 py-3 text-white rounded-full mt-4 cursor-pointer">Get Started</div>
                            </>,

                        'tab6': <>
                        <div className='bg-[#FFF8F2] rounded-[10px] py-[10px] px-[20px]'>
                            <div className='text-[13px] font-[500] text-[#FF7A00] uppercase'>Value Proposition</div>
                            <div className='text-[34px] font-medium leading-[40px]'>Live Command Center</div>
                        </div>

                        <div className="mt-[20px]">
                            <div className="flex justify-center items-center">
                                <div className="bg-[#FFF5EC] p-4 rounded-full">
                                    <div className='w-[25px] h-[25px] text-orange-600'><Image src={browser} height={100} width={100}></Image></div>
                                </div>
                                <div className="font-[300] ml-2 text-[14px]">
                                    <p>Gain unparalleled visibility with our real-time dashboards. Track tasks, time, trends, and take total control of your operations.</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[fit-content] bg-[#FF7A00] px-5 py-3 text-white rounded-full mt-4 cursor-pointer">Get Started</div>
                        </>,

                        'tab7': <>
                            <div className='bg-[#FFF8F2] rounded-[10px] py-[10px] px-[20px]'>
                                <div className='text-[13px] font-[500] text-[#FF7A00] uppercase'>Value Proposition</div>
                                <div className='text-[34px] font-medium leading-[40px]'>Plug-And-Play</div>
                            </div>

                            <div className="mt-[20px]">
                                <div className="flex justify-center items-center">
                                    <div className="bg-[#FFF5EC] p-4 rounded-full">
                                        <div className='w-[25px] h-[25px] text-orange-600'><Image src={dollar} height={100} width={100}></Image></div>
                                    </div>
                                    <div className="font-[300] ml-2 text-[14px]">
                                        <p>Our tech-savvy EAs effortlessly fuse into your tech stack, supercharging your digital prowess. Our plug-and-play onboarding means we hit the ground running for your business - no sweat, no stress.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[fit-content] bg-[#FF7A00] px-5 py-3 text-white rounded-full mt-4 cursor-pointer">Get Started</div>
                            </>,

                            'tab8': <>
                            <div className='bg-[#FFF8F2] rounded-[10px] py-[10px] px-[20px]'>
                                <div className='text-[13px] font-[500] text-[#FF7A00] uppercase'>Value Proposition</div>
                                <div className='text-[34px] font-medium leading-[40px]'>The Backbone for Global Commerce</div>
                            </div>

                            <div className="mt-[20px]">
                                <div className="flex justify-center items-center">
                                    <div className="bg-[#FFF5EC] p-4 rounded-full">
                                        <div className='w-[25px] h-[25px] text-orange-600'><Image src={globe} height={100} width={100}></Image></div>
                                    </div>
                                    <div className="font-[300] ml-2 text-[14px]">
                                        <p>We fosters seamless teamwork across borders through advanced communication tools.</p>
                                    </div>
                                </div>
                                <div className="border-[0.5px] border-solid my-4 border-[#BDBDBD]"></div>
                                <div className="flex justify-center items-center">
                                    <div className="bg-[#FFF5EC] p-4 rounded-full">
                                        <div className='w-[25px] h-[25px] text-orange-600'><Image src={globe} height={100} width={100}></Image></div>
                                    </div>
                                    <div className="font-[300] ml-2 text-[14px]">
                                        <p>Serving as a centralized hub, We simplifies global business processes and enhances transaction efficiency.</p>
                                    </div>
                                </div>
                                <div className="border-[0.5px] border-solid my-4 border-[#BDBDBD]"></div>
                                <div className="flex justify-center items-center">
                                    <div className="bg-[#FFF5EC] p-4 rounded-full">
                                        <div className='w-[25px] h-[25px] text-orange-600'><Image src={globe} height={100} width={100}></Image></div>
                                    </div>
                                    <div className="font-[300] ml-2 text-[14px]">
                                        <p>We democratizes talent acquisition, providing businesses with a competitive edge by accessing and retaining a diverse global workforce.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[fit-content] bg-[#FF7A00] px-5 py-3 text-white rounded-full mt-4 cursor-pointer">Get Started</div>
                            </>,


                                }[tabValue]
                            }
                    </div>



                </div>
            </div>
        </div>
    </>
  )
}
