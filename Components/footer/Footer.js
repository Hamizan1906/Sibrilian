import Image from 'next/image'
import React from 'react'

const footer = () => {
  return (
    <div className='grid md:flex bg-black w-full h-[200px] text-white justify-center items-center md:gap-[60px]'>
      <Image width={1000} height={1000} alt='logo' src='/logo_white.png' className='w-[280px] -mb-[80px] md:mb-0'
      />
      <h1 className='opacity-55 text-sm md:text-xl'>Developed by Hamizan Ihkamuddin Raharjo</h1>
    </div>
  )
}

export default footer
