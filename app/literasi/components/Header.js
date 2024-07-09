import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div className=' bg-gradient-10 w-full h-[700px] flex justify-center items-center'>
            <Image src={'/banner.png'} width={1700} height={700} className='border border-black border-4 md:border-8 ml-5 mr-5 rounded-xl shadow-2xl'/>
        </div>
        <div>
            
        </div>
    </div>
    
  )
}

export default Header
