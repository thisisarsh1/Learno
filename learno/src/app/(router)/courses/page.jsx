"use client"
import React from 'react'
import Banner from './_components/Banner'
import CourseList from './_components/CourseList'
import Sidebanners from './_components/Sidebanners'


function page() {
  return (
    <div className='grid grid-cols-4 mt-3'>
      <div className=' col-span-3  ml-1 '>
        <Banner></Banner>
        <CourseList></CourseList>
      </div>
      <div className=' col-span-1 '>
        <Sidebanners/>
      </div>

      
      
    </div>
  )
}

export default page
