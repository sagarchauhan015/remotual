'use client'
import React, {useState} from 'react'
import BottomNav from '../BottomNav/BottomNav'
import Contact from '../Contact/Contact'
import AboutMe from '../AboutMe/AboutMe'
import Services from '../Services/Services'
import Resume from '../Resume/Resume'
import Skills from '../Skills/Skills'
import Recommendation from '../Recommendation/Recommendation'
import Testimonial from '../Testimonial/Testimonial'
import AboutVideo from '../AboutVideo/AboutVideo'
import Record from '../Record/Record'

export default function WebProfilePage() {
  const [tabName, setTabName] = useState('profile')

  function handleTabName(tabvalue){
    console.log(tabvalue);
    setTabName(tabvalue);
  }

  return (
    <>
        <div className='h-[75vh] w-11/12 overflow-scroll flex gap-10 justify-between items-start'>
            <div>
                <BottomNav
                    handleTabName={handleTabName}
                    tabName={tabName}
                />
            </div>
            <div className='w-full h-full flex justify-center items-center relative'>
                <div className='w-[50%] h-full relative z-20'>
                    <Contact />
                </div>
                {
                    {
                        'profile': 
                        <>
                            <div className='w-full h-[95%] overflow-scroll bg-white z-0 rounded-[0_8px_8px_0] '>
                                <AboutMe />
                                <Services />
                                <Record />
                            </div>
                        </>,
                        'resume': 
                        <>
                            <div className='w-full h-[95%] overflow-scroll bg-white z-0 rounded-[0_8px_8px_0] '>
                                <Resume />
                                <Skills />
                            </div>
                        </>,
                        'feedback': 
                        <>
                            <div className='w-full h-[95%] overflow-scroll bg-white z-0 rounded-[0_8px_8px_0] '>
                                <Recommendation />
                                <Testimonial />
                            </div>
                        </>,
                        'playlist': 
                        <>
                            <div className='w-full h-[95%] overflow-scroll bg-white z-0 rounded-[0_8px_8px_0] '>
                                <AboutVideo />
                            </div>
                        </>,
                    }[tabName]
                }
                
            </div>
        </div>
    </>
  )
}
