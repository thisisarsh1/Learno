"use client"
import GlobalApi from '@/app/utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import { useUser } from "@clerk/nextjs";
import Discription from '../../CoursePrev/[CourseId]/components/Discription';
import CourseContent from '../../CoursePrev/[CourseId]/components/CourseContent';
import { toast } from "sonner";
function WatchCourse({params}) {
  const { user } = useUser();
  const[CourseInfo,setCourseinfo]=useState([])
  const[activeChap,setActiveChap]=useState([0])
  const [CompletedChapList,setCompletedChapList]=useState([])
  // const activeChap=0;

  useEffect(()=>{
    params&&user&&GetDeets()
  },[params&&user])
  const GetDeets=()=>{
    // const { user } = useUser();
    //enrollId bcos same name as params [inside here]
    GlobalApi.GetUserEnrolledDeets(params.enrollId
      ,user.primaryEmailAddress?.emailAddress).then((resp)=>{
        setCompletedChapList(resp.userEnrollcourses[0]?.completedChapters)
        setCourseinfo(resp.userEnrollcourses[0]?.courseList)
      })
  }
  const GetChapCompleteDeets=(chapID)=>{
    GlobalApi.GetCompletedChaps(params.enrollId,chapID).then((resp)=>{
      

      if(resp){
        toast("You have Marked The course Completed", {
          description: "This Chapter would be marked completed ",
          
        }
        )
        GetDeets();
      }
    })
  }
  return CourseInfo&&(
    <div>
       <div className='grid grid-cols-1  md:grid-cols-3 p-3 gap-3 '>
     <div className=' col-span-2 bg-white p-2 rounded-2xl'>
      <Discription CourseInfo={CourseInfo}
      activeChap={activeChap}
      watchMode={true}
      SetCompletedChap={(chapID)=>GetChapCompleteDeets (chapID)}
      ></Discription>
     </div>
     
    <div className=' col-span-1 bg-white p-2 rounded-2xl'> 
       {/* <CourseEnroll CourseInfo={CourseInfo}
       isUserAlreadyEnrolled={isUserAlreadyEnrolled}></CourseEnroll> */}
       <CourseContent CourseInfo={CourseInfo}
         isUserAlreadyEnrolled={true}
         watchMode={true}
         setactiveChap={(index)=>setActiveChap(index)}
         CompletedChapList={CompletedChapList}
         ></CourseContent>
      </div>


    </div>
    </div>
  )
}

export default WatchCourse
