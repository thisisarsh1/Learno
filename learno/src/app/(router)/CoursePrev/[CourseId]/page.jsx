"use client"

import React, { useEffect, useState }  from 'react'
import Discription from './components/Discription'
import GlobalApi from '@/app/utils/GlobalApi'
import CourseEnroll from './components/CourseEnroll'
import CourseContent from './components/CourseContent'
import { useUser } from "@clerk/nextjs";
function CoursePrev({params}) {

 const[CourseInfo,SetCourseInfo]=useState([])
const[isUserAlreadyEnrolled,setIsUserAlreadyEnrolled]=useState('');
useEffect(()=>{
params&&getCourseById()
},[params])

useEffect(()=>{
  CourseInfo&&checkEnrollcourse()
},[CourseInfo,])

//here CourseId will only work nothing elese as while accepting
//params in Global Api we have used the same name Dont repete same mistake
const getCourseById=()=>{
  GlobalApi.getCoursePrev(params?.CourseId).then(resp=>{
      // console.log(resp)
      SetCourseInfo(resp?.courseList)
      
  })

}
const { user } = useUser();

const checkEnrollcourse=()=>{
  if (!user) {
    console.log("not user found")
    return
  };
GlobalApi.CheckEnrollment(CourseInfo?.slugId,
  user.primaryEmailAddress?.emailAddress

  ).then(resp=>{
if(resp?.userEnrollcourses[0]?.id){
  console.log(resp)
setIsUserAlreadyEnrolled(resp?.userEnrollcourses[0]?.id)
}
})
}

 
  return (
    <div className='grid grid-cols-1  md:grid-cols-3 p-3 gap-3 '>
     <div className=' col-span-2 bg-white p-2 rounded-2xl'>
      <Discription CourseInfo={CourseInfo} ></Discription>
     </div>
     
    <div className=' col-span-1 bg-white p-2 rounded-2xl'> 
       <CourseEnroll CourseInfo={CourseInfo}
       isUserAlreadyEnrolled={isUserAlreadyEnrolled}></CourseEnroll>
       <CourseContent CourseInfo={CourseInfo}
         isUserAlreadyEnrolled={isUserAlreadyEnrolled}></CourseContent>
      </div>


    </div>
    
  )

}

export default CoursePrev
