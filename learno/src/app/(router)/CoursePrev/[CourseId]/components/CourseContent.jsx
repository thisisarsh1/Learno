import {  LockKeyhole, LockKeyholeOpen } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
export default function CourseContent({ CourseInfo,isUserAlreadyEnrolled }) {
  const[activeIndex,setactiveIndex]=useState([0])
  return (
    
    <div className="bg-[#79BBDB] rounded-3xl mt-5 pb-3 pt-2">
      <h2 className="text-3xl text-center m-5 font-bold text-white">Content</h2>
      {CourseInfo.chapter?.map((item, index) => (
        <div key={index}>
          <Link href={'/'}>
          <div className={ ` flex justify-between text-lg border  rounded-3xl p-3 m-2 hover:bg-[#E2E2E2] hover:text-black  ${activeIndex==index||isUserAlreadyEnrolled? ` text-white  bg-primary`:``}`}>
            {index + 1}. {item.name}
            <div>
              {activeIndex>=index||isUserAlreadyEnrolled?<LockKeyholeOpen></LockKeyholeOpen>:<LockKeyhole></LockKeyhole>}
              
            </div>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
