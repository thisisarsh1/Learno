import {  LockKeyhole, LockKeyholeOpen } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import GlobalApi from "@/app/utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
export default function CourseContent({ CourseInfo,isUserAlreadyEnrolled,watchMode=false,setactiveChap}) {
  const[activeIndex,setactiveIndex]=useState([0])

  



  return (
    
    <div className="bg-[#79BBDB] rounded-3xl mt-5 pb-3 pt-2">
      <h2 className="text-3xl text-center m-5 font-bold text-white">Content</h2>

       
      <>
        {CourseInfo.chapter?.map((item, index) => (
          // <Link href={"/WatchCourse/" + resp.createUserEnrollcourse.id}>
          <div key={index}>
            <div 
              className={`flex justify-between text-lg border rounded-lg p-3 m-2 hover:bg-[#E2E2E2] hover:text-black ${activeIndex == index ? 'text-white bg-primary' : 'bg-white text-black'}`}
              onClick={() => {
                if (watchMode)  setactiveChap(index);
                setactiveIndex(index);
                // {() => PushToWatchCourse()}
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
  );
}
