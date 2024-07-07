import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <Image src='/flow.gif'
            className='absolute z-10 right-[30px] top-[428px]'
            width={400}
            height={400}
        />
        <div className='absolute bg-gradient-1 flex w-full h-[920px]'/>
        <div>
        <video
            src='/video_background.mp4'
            muted
            autoPlay
            loop
            className='w-full object-cover bg-cover h-[920px]'
        />
        </div>
        
    </div>
  )
}

export default Header
