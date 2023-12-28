import Contact from '@/components/Contact/Contact'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

export default function page() {
  return (
    <>
        <Navbar/>
        <div className='bg-[#FFF5EC]'>
            <Contact />
        </div>
    </>
  )
}
