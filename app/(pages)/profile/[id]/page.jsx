import AboutMe from '@/components/AboutMe/AboutMe'
import AboutVideo from '@/components/AboutVideo/AboutVideo'
import Contact from '@/components/Contact/Contact'
import Navbar from '@/components/Navbar/Navbar'
import Recommendation from '@/components/Recommendation/Recommendation'
import Record from '@/components/Record/Record'
import Resume from '@/components/Resume/Resume'
import Services from '@/components/Services/Services'
import Skills from '@/components/Skills/Skills'
import Testimonial from '@/components/Testimonial/Testimonial'
import React from 'react'

export default function page() {
  return (
    <>
        <Navbar/>
        <div className='bg-[#FFF5EC] mb-[40px]' >
            <Contact />
            <AboutMe />
            <Services />
            <Record />
            <Resume />
            <Skills />
            <Recommendation />
            <Testimonial />
            <AboutVideo />
        </div>
    </>
  )
}
