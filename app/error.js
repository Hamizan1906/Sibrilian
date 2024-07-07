'use client'
import Image from 'next/image'
import React from 'react'

const error = () => {
  return (
    <div className='w-full h-[1080px] bg-gradient-6'>
      <Image width={800} height={800} alt='error' src='./bila.png'/>
    </div>
  )
}

export default error
