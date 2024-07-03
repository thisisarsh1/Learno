"use client"
import React from 'react'
import Banner from './_components/Banner'
import CourseList from './_components/CourseList'
import Sidebanners from './_components/Sidebanners'


function page() {
  return (
<div>
    {isMobile ? (
      <div className="text-center mt-5">
       <div className="text align-middle">
      <div className='  text-4xl font-semibold text-gray-700'> Please view this website on PC or laptop </div>
      <div className='   text-2xl font-semibold mt-5 text-gray-500'> it is  not designed for mobiles <span className='text-green-600'>,YET</span> </div>
    </div>
      </div>
    ) : (
    <div className='grid grid-cols-4 mt-3'>
      <div className=' col-span-3  ml-1 '>
        <Banner></Banner>
        <CourseList></CourseList>
      </div>
      <div className=' col-span-1 '>
        <Sidebanners/>
      </div>
  
      
      
    </div>)}</div>
  )
}

export default page
