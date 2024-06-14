"use client"

import React, { useEffect, useState }  from 'react'
import Discription from './components/Discription'
import GlobalApi from '@/app/utils/GlobalApi'
import CourseEnroll from './components/CourseEnroll'
import CourseContent from './components/CourseContent'

function CoursePrev({params}) {
  
 const[CourseInfo,SetCourseInfo]=useState([])

useEffect(()=>{
params&&getCourseById()
},[params])



//here CourseId will only work nothing elese as while accepting
//params in Global Api we have used the same name Dont repete same mistake
const getCourseById=()=>{
  GlobalApi.getCoursePrev(params?.CourseId).then(resp=>{
      // console.log(resp)
      SetCourseInfo(resp?.courseList)
  })

}

 
  return (
    <div className='grid grid-cols-1  md:grid-cols-3 p-3 gap-3 '>
     <div className=' col-span-2 bg-white p-2 rounded-2xl'>
      <Discription CourseInfo={CourseInfo} ></Discription>
     </div>
     
    <div className=' col-span-1 bg-white p-2 rounded-2xl'> 
       <CourseEnroll CourseInfo={CourseInfo}></CourseEnroll>
       <CourseContent CourseInfo={CourseInfo}></CourseContent>
      </div>


    </div>
    
  )

}

export default CoursePrev
