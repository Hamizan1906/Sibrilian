import React from 'react'
import Image from 'next/image'
import { blog_data } from '../../../public/assets'
import Link from 'next/link'

const Card = ({title, author, category, image, id}) => {
  return (
    <div className='max-w-[330px] sm:max-[300px] bg-white border-black rounded-2xl border-2xl'>
      <Link href={`literasi/karya/${id}`}>
      <Image src={image} alt='' width={400} height={400} className='border-b border-black'/>
      </Link>
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
      <div className='p-5'>
        <h5 className=' text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-2'>{author}</p>
        <Link href={`literasi/karya/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
            Lanjut baca <Image src='/arrow.svg' width={20} height={20} alt=''/>
        </Link>
      </div>
    </div>
  )
}

export default Card
