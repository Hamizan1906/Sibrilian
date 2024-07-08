"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Lilita_One } from 'next/font/google'
import Image from 'next/image';

const lilita_one = Lilita_One({ subsets: ["latin"], weight: "400" });

  

const Navbar = () => {
  let [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick); 
  };

  return (
    <header className='w-full h-24 fixed bg-[linear-gradient(#FFD257,#FFA800)] flex justify-center items-center z-20'>
      <nav className='w-[100%] h-24 flex items-center justify-between text-3xl text-white fixed  mx-auto'>
        <div className={`${lilita_one.className} text-border-1 ml-10 text-2xl md:text-3xl`}>
          SI BRILIAN
        </div>
        <div className={`md:static absolute bg-navbar md:min-h-fit min-h-[60vh] md:w-auto left-0  w-full flex items-center px-10 -z-10 ${isClick ? 'top-[0%]' : 'top-[-700%]' }`}>
          <ul className='flex gap-10 md:flex-row flex-col md:items-center md:gap-[4vw] '>
            <li>
              <a><Link href='/' className={`${lilita_one.className} text-border-1`}>HOME</Link></a>
            </li>
            <li>
              <a><Link href='/literasi' className={`${lilita_one.className} text-border-1`}>LITERASI</Link></a>
            </li>
            <li>
              <a><Link href='/form' className={`${lilita_one.className} text-border-1`}>ISI FORM</Link></a>
            </li>
          </ul>
        </div>
        <div className='mr-10 flex gap-5'>
          <button className={`${lilita_one.className} w-[170px] h-[60px] border border-black rounded-[7px] bg-gradient-7 border-2 text-border-1 text-xl shadow-black/50 shadow-md hover:opacity-80 hover:transition`}>KIRIM KARYA</button>
          <Image
          src='/dots.png'
          width={15}
          height={1}
          alt='dots'
          className='md:hidden cursor-pointer '
          onClick={toggleNavbar}>
              
          </Image>
        
        </div>
      </nav>
    </header>
    
  )
}

export default Navbar
