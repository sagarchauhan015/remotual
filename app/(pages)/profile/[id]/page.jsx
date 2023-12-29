import Contact from '@/components/Contact/Contact'
import Navbar from '@/components/Navbar/Navbar'
import Record from '@/components/Record/Record'
import Services from '@/components/Services/Services'
import React from 'react'

export default function page() {
  return (
    <>
        <Navbar/>
        <div className='bg-[#FFF5EC]'>
            <Contact />
            <Services />
            <Record />
        </div>
    </>
  )
}
