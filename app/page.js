import HeroSection from '@/components/HeroSection/HeroSection'
import Navbar from '@/components/Navbar/Navbar'
import TeamSection from '@/components/TeamSection/TeamSection'
import React from 'react'

export default function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TeamSection />
    </>
  )
}
