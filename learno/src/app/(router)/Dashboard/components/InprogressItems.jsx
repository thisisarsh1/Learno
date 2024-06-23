import React from 'react'
import Link from 'next/link'
import { Progress } from "@/components/ui/progress"

function InprogressItems({course}) {
  const GetCompletedChapPerc=(item)=>{
    const perc=Math.floor((item?.completedChapters?.length/item.courseList?.totalChapters)*100);
      return perc;
  }
  return (
    
    
       
            
              <Link href={"/CoursePrev/"+course.courseList?.slugId}>
                <div className=' m-1 border min-h-[22rem] rounded-2xl bg-slate-200 mt-5 p-1 hover:border-primary transition duration-200 ease-in-out hover:shadow-md'>
      <div className="object-cover ">
      <img className='rounded-2xl  mt-2  ' src={course.courseList?.banner.url} alt="imgs" />
      <div className="group ">
      <h3 className='text-base mt-1'>{course.courseList?.name}</h3>
      <h3 className=' text-gray-500 text-sm mt-3'>Instructor:- {course.courseList?.author} sir</h3>
      </div>
      <div className="text-green-600 my-3">{course.courseList?.free?"Free":"Paid"}</div>
      <div className=' text-md text-gray-500'>
      {GetCompletedChapPerc(course)}%
    <span className=' float-right'> {course?.completedChapters?.length}/ {course.courseList?.totalChapters}  Chapters</span>
      </div>
      <Progress value={GetCompletedChapPerc(course)} className='mt-2'/>

    </div>
    </div>
</Link>
    
              

            
        
      

      
  )
}

export default InprogressItems
