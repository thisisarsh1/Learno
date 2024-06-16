"use client"
import {  LockKeyhole, LockKeyholeOpen } from "lucide-react";
import React, { useEffect, useState }  from 'react'
import Discription from './components/Discription'
import GlobalApi from '@/app/utils/GlobalApi'
import CourseEnroll from './components/CourseEnroll'
import CourseContent from './components/CourseContent'
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
function CoursePrev({params,watchMode=true,setactiveChap}) {
  const[activeIndex,setactiveIndex]=useState([0])
 const[CourseInfo,SetCourseInfo]=useState([])
const[isUserAlreadyEnrolled,setIsUserAlreadyEnrolled]=useState('');
useEffect(()=>{
params&&getCourseById()
},[params])

const router = useRouter();
const[activeChap,setActiveChap]=useState([0])

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
  // console.log(resp)
setIsUserAlreadyEnrolled(resp?.userEnrollcourses[0]?.id)
}
})
}


    const PushToWatchCourse = () => {
   
      GlobalApi.enrollTocourse(
        CourseInfo?.slugId,
        user.primaryEmailAddress?.emailAddress
      ).then((resp) => {
        
   
        if (!isUserAlreadyEnrolled) {
  
          
            toast("You are not Enrolled in Course", {
              description: "Plz Enroll to Course inorder to Learn further Chapters",
             
            })
  
          
        }
        else{
          router.push("/WatchCourse/" + resp.createUserEnrollcourse.id);
        }
      });
    };
 
  return (
    <div className='grid grid-cols-1  md:grid-cols-3 p-3 gap-3 '>
     <div className=' col-span-2 bg-white p-2 rounded-2xl'>
      <Discription CourseInfo={CourseInfo}
      activeChap={activeChap}
      ></Discription>
     </div>
     
    <div className=' col-span-1 bg-white p-2 rounded-2xl'> 
       <CourseEnroll CourseInfo={CourseInfo}
       isUserAlreadyEnrolled={isUserAlreadyEnrolled}></CourseEnroll>
       {/* <CourseContent CourseInfo={CourseInfo}
         isUserAlreadyEnrolled={isUserAlreadyEnrolled}
         watchMode={true}
         setactiveChap={0}
         
         ></CourseContent> */}

<div className="bg-[#79BBDB] rounded-3xl mt-5 pb-3 pt-2">
      <h2 className="text-3xl text-center m-5 font-bold text-white">Content</h2>

       
      <>
        {CourseInfo.chapter?.map((item, index) => (
          // <Link href={"/WatchCourse/" + resp.createUserEnrollcourse.id}>
          <div key={index}>
            <div 
              className={`flex justify-between text-lg border rounded-lg p-3 m-2 hover:bg-[#E2E2E2] hover:text-black ${activeIndex == index ? 'text-white bg-primary' : 'bg-white text-black'}`}
              onClick={() => {
                
                 PushToWatchCourse()
              }}
            >
              {index + 1}. {item.name}
              <div>
                {activeIndex >= index || isUserAlreadyEnrolled ? <LockKeyholeOpen /> : <LockKeyhole />}
              </div>
            </div>
          </div>
          // </Link>
        ))}
      </>
    
  </div>
      </div>


    </div>
    
  )

}

export default CoursePrev
