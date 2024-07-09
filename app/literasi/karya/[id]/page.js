'use client'
import React, { useEffect, useState } from 'react'
import { assets, blog_data } from '../../../../public/assets';
import Image from 'next/image';
import axios from 'axios';

const page = ({params}) => {

    const [data, setData] = useState(null);

    const fetchKaryaData = async () => {
        const response = await axios.get('/api/karya',{
            params:{
                id:params.id
            }
        })
        setData(response.data);
    }

    useEffect(()=>{
        fetchKaryaData();
    },[])

  return (data?<>
    <div className='bg-white py-5 px-5 md:px-12 lg:px-12'>
        <div className=' items-center text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
            <h1 className='mt-8 text-[27px] font-semibold'>Perkenalan</h1>
            <p className='text-justify'>{data.text}</p>
        </div>
    </div>
    </>:<></>
  )
}

export default page
