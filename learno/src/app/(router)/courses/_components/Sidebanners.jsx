"use client"
import React, { useEffect } from 'react'

import GlobalApi from '@/app/utils/GlobalApi'
import { useState } from 'react'
import { TrendingUp } from 'lucide-react'

function Sidebanners() {
const[banner,setbanner]=useState([])
    useEffect(()=>{
        getBanner()
    },[])
    const getBanner=()=>{
        GlobalApi.getsideBar().then(resp=>{
            // console.log(resp);
           
            setbanner(resp?.sideBars)
        })}
  return (<div className='rounded-2xl bg-white h-[90vh] m-1  fixed'>
    <div className='mx-auto text-green-400 text-2xl font-bold p-1 flex justify-around '>Trending Courses<TrendingUp></TrendingUp></div>
    
      {banner.length>0? banner.map((item,index)=>(
          <div key={index}>
            <a href={item.url}>
          <div className=' m-1 border min-h-[10rem] rounded-2xl bg-slate-200 mt-5 p-1 hover:border-primary transition duration-200 ease-in-out hover:shadow-md'>

          <img className='p-2' src={item.banner.url} alt="imgs" />
          <h3>{item.name}</h3>
          </div>
          </a>
          </div>
          
        ))
        
          
      
    
    : [1,2,3].map((item,index)=>(
      <div key={index}>
      <div className='m-1 border min-h-[10rem] rounded-2xl bg-slate-200 mt-5 p-1  animate-pulse'>
        <div className='  mt-2 bg-slate-500 rounded-2xl animate-pulse'></div> </div></div>
    ))}
    </div>
  )
  
}


export default Sidebanners
