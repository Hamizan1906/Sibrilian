import React, { useState } from 'react'
import Image from 'next/image'
import { Lilita_One } from 'next/font/google'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const lilita_one = Lilita_One({ subsets: ["latin"], weight: "400" });

const foto = [
  <img src='/sasa.png'/>,
  <img src='/sasa.png'/>,
  <img src='/sasa.png'/>,
  <img src='/sasa.png'/>,
  <img src='/sasa.png'/>,
  <img src='/sasa.png'/>,
  <img src='/sasa.png'/>,
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const Tim = () => {
  return (
    <div className='bg-gradient-5 w-full h-[660px] sm:h-[780px] lg:h-[840px]'>
          <div className='flex justify-center items-center py-[60px]'>
              <h1 className={`${lilita_one.className} text-border-2 text-5xl md:text-6xl lg:text-7xl text-white`}>TIM LITERASI</h1>
          </div>
          <div>
            <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            transitionDuration={500}
            className='-z-0'
            >
              <div className='grid justify-center items-center text-center'>
                <img src='/pakhambali.png'></img>
                <h1 className={`${lilita_one.className} text-border-2 text-2xl sm:text-3xl text-white`}>Achmad Hambali, S.Pd., Gr.</h1>
              </div>
              <div className='grid justify-center items-center text-center'>
                <img src='/sasa.png'></img>
                <h1 className={`${lilita_one.className} text-border-2 text-2xl sm:text-3xl text-white`}>Sasa Widya</h1>
              </div>
              <div className='grid justify-center items-center text-center'>
                <img src='/nata.png'></img>
                <h1 className={`${lilita_one.className} text-border-2 text-2xl sm:text-3xl text-white`}>Natasya Ayu Kirani</h1>
              </div>
              <div className='grid justify-center items-center text-center'>
                <img src='/bila.png'></img>
                <h1 className={`${lilita_one.className} text-border-2 text-2xl sm:text-3xl text-white`}>Salsabila Puteri Abi Abdillah</h1>
              </div>
              <div className='grid justify-center items-center text-center'>
                <img src='/ara.png'></img>
                <h1 className={`${lilita_one.className} text-border-2 text-2xl sm:text-3xl text-white`}>Asyara Thiara Ratnawati</h1>
              </div>
              <div className='grid justify-center items-center text-center'>
                <img src='/lemon.png'></img>
                <h1 className={`${lilita_one.className} text-border-2 text-2xl sm:text-3xl text-white`}>Filemon Ogawa Damar Adi Prasetyo</h1>
              </div>
              <div className='grid justify-center items-center text-center'>
                <img src='/hamizan.png'></img>
                <h1 className={`${lilita_one.className} text-border-2 text-2xl sm:text-3xl text-white`}>Hamizan Ihkamuddin Raharjo</h1>
              </div>
              <div className='grid justify-center items-center text-center'>
                <img src='/mahen.png'></img>
                <h1 className={`${lilita_one.className} text-border-2 text-2xl sm:text-3xl text-white`}>Mahendra Surya Lista</h1>
              </div>
              <div className='grid justify-center items-center text-center'>
                <img src='/rahid.png'></img>
                <h1 className={`${lilita_one.className} text-border-2 text-2xl sm:text-3xl text-white`}>Rahid Muhammad Sugiyarto</h1>
              </div>
            </Carousel>;
          </div>      
    </div>
  )
}

export default Tim
