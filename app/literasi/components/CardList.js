'use client'
import React, {useEffect, useState} from 'react'
import Card from './Card' 
import { blog_data } from '../../../public/assets'
import axios from 'axios'


const CardList = () => {
    
    const [menu,setMenu] = useState("Semua");
    const [karyas,setKarya] = useState([]);

    const fetchKarya = async () =>{
      const response = await axios.get('/api/karya');
      setKarya(response.data.karyas);
      console.log(response.data.karyas);
    }

    useEffect(()=>{
      fetchKarya();
    },[])

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={()=>setMenu('Semua')} className={menu==="Semua"?'bg-purple-700 text-white py-1 px-4 rounded-3xl':""}>Semua</button>
        <button onClick={()=>setMenu('Cerpen')} className={menu==="Cerpen"?'bg-purple-700 text-white py-1 px-4 rounded-3xl':""}>Cerpen</button>
        <button onClick={()=>setMenu('Film')} className={menu==="Film"?'bg-purple-700 text-white py-1 px-4 rounded-3xl':""}>Film</button>
        <button onClick={()=>setMenu('Lagu')} className={menu==="Lagu"?'bg-purple-700 text-white py-1 px-4 rounded-3xl':""}>Lagu</button>
        <button onClick={()=>setMenu('Podcast')} className={menu==="Podcast"?'bg-purple-700 text-white py-1 px-4 rounded-3xl':""}>Podcast</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 xl:mx-24'>
        {karyas.filter((item)=> menu==="Semua"?true:item.category===menu).map((item, index)=>{
            return <Card key={index} id={item._id} image={item.image} title={item.title} author={item.author} category={item.category}/>}
        )}

      </div>
    </div>
  )
}

export default CardList
