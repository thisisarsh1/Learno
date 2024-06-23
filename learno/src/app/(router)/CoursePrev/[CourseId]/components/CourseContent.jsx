import {  LockKeyhole, LockKeyholeOpen,CheckCheck } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import GlobalApi from "@/app/utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
export default function CourseContent({ CourseInfo,isUserAlreadyEnrolled,watchMode=false,setactiveChap,CompletedChapList}) {
  const[activeIndex,setactiveIndex]=useState([0])

  
const CheckCompleted = (chapId) => {  

  
  return CompletedChapList.find(item => item.chapId == chapId);
  
  
}


  return (
    
    <div className="bg-whiterounded-3xl mt-5 pb-3 pt-2">
      <h2 className="text-3xl text-center m-5 font-bold text-[#79BBDB]">Content</h2>

       
      <>
        {CourseInfo.chapter?.map((item,index) => (
          // <Link href={"/WatchCourse/" + resp.createUserEnrollcourse.id}>
          <div key={index}>
            <div 
              className={`flex justify-between text-lg border rounded-lg p-3 m-2 hover:text-white hover:bg-[#696969] 
              
              ${CheckCompleted(item.id) ? `border-gray-600 bg-green-300`:``}
              ${activeIndex == index && 'bg-[#64c8e1] text-white border-blue-600'}
               `}
              onClick={() => {
                if (watchMode)  setactiveChap(index);
                setactiveIndex(index);
               
              }}
            >
              {index + 1}. {item.name}
              <div>
                {(activeIndex >= index || isUserAlreadyEnrolled ? <LockKeyholeOpen /> : <LockKeyhole />)}
              </div>
            </div>
          </div>
          // </Link>
        ))}
      </>
    
  </div>
  );
}
