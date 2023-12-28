import React from 'react'
import Image from 'next/image'
import user1 from '@/public/images/user_mika.svg'

export default function Contact() {
  return (
    <>
        <div className='w-full rounded-lg overflow-hidden'>
            <div className='w-full'><Image src={user1}></Image> </div>
            <div>Mika Mae U.</div>
            <div>Executive Assistant</div>
            <div className='flex '>
                <Image></Image>
                <Image></Image>
                <Image></Image>
            </div>
            <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
            <div className=""><button className='border-none'>Hire Me</button></div>
        </div>
    </>
  )
}
