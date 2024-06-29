import React from 'react'
import InprogressItems from './InprogressItems'
import Link from 'next/link'

function InProgress({userEnrolledCourse}) {
  return (
    <div>
      <div className=' bg-white rounded-3xl  mt-2 p-4'>
        
            <div>
           
              {userEnrolledCourse.length>0?(<><div className=' text-2xl font-semibold p-2 text-primary'>
            Recently Enrolled Courses :</div>
               <div className='flex justify-between'>
            <div className='grid grid-cols-2 lg:grid-cols-3 mt-3'>
              {
                userEnrolledCourse.map((item,index)=>(
                  <InprogressItems key={index} course={item}></InprogressItems>)
                )}</div>
              </div></>)
                :
                (
           
              // <h1>Go to All Courses page to Enroll To Courses</h1>
              <Link href={'/courses'}>
              <div className="flex items-center justify-center h-[50vh] ">
  <div className="text-4xl font-bold bg-gradient-to-r from-primary via-purple-400 to-pink-700 bg-clip-text text-transparent transition duration-1000
   hover:bg-gradient-to-r hover:from-blue-800 hover:via-purple-600 hover:to-pink-400 ease-in  
  ">
    Navigate to All Courses to Enroll
  </div>
</div></Link>
              )}
            </div>
            
      </div>
    </div>
  )
}

export default InProgress
