"use client"
import React, { use, useEffect, useState } from 'react'
import WelcomeBanner from './components/welcomeBanner'
import { useUser } from "@clerk/nextjs";
import Sidebanners from '../courses/_components/Sidebanners';
import InProgress from './components/InProgress';
import GlobalApi from '@/app/utils/GlobalApi';
function page() {
  const { user } = useUser();
 
  const [userEnrolledCourse,setUserEnrolledCourse]=useState([])
useEffect(()=>{
  user&&GetUserProgressDeets();

},[user])
  const GetUserProgressDeets=()=>{
    GlobalApi.GetProgressList(user?.primaryEmailAddress?.emailAddress).then((resp)=>{
      setUserEnrolledCourse(resp.userEnrollcourses)
      // console.log(resp.userEnrollcourses)
    })
  }
  return (
    <div className='grid grid-cols-4 mt-3'>
    <div className=' col-span-3  ml-1 '>
    
      <WelcomeBanner user={user}></WelcomeBanner>
      <InProgress userEnrolledCourse={userEnrolledCourse}></InProgress>
     
    </div>
    <div className=' col-span-1 '>
      <Sidebanners/>
    </div>

    
    
  </div>
   
  )
}

export default page
