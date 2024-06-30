
import GlobalApi from '@/app/utils/GlobalApi'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useContext } from 'react'
import { searchcontext } from '@/app/_context/UserMemberContext'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


  

function CourseList() {
  const{search,setSearch}=useContext(searchcontext)
    const[courseList,setcourseList]= useState([])
    useEffect(()=>{
        getCourses()
    },[])
    //Fetch course list
    const getCourses=()=>{
        GlobalApi.getAllCourseList().then(resp=>{
            
            setcourseList(resp?.courseLists)
        })
    }
  return (
    <div className=' bg-white rounded-3xl  mt-2'>
        <div className='flex justify-between'>
      <div className="text-primary text-3xl font-semibold ml-2 mt-1">All Courses</div>
      <div className="filter mt-1 mr-2">


      <Select >
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Filter.." />
  </SelectTrigger>
  <SelectContent >
    <SelectItem value="light">All</SelectItem>
    <SelectItem value="dark">Paid</SelectItem>
    <SelectItem value="system">Free</SelectItem>
  </SelectContent>
</Select>



      </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 mt-3'>
      {courseList.length > 0 ? (
  courseList
    .filter((val) => {
      if (search === " ") {
        return val;
      } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    })
    .map((item, index) => (
      <div key={index}>
        <Link href={"/CoursePrev/" + item.slugId}>
          <div className='m-1 border min-h-[20rem] rounded-2xl bg-slate-200 mt-5 p-1 hover:border-primary transition duration-200 ease-in-out hover:shadow-md'>
            <div className="object-cover">
              <img className='rounded-2xl mt-2' src={item.banner.url} alt="imgs" />
              <div className="group">
                <h3 className='text-base mt-1'>{item.name}</h3>
                <h3 className='text-gray-500 text-sm mt-3'>Instructor:- {item.author} sir</h3>
              </div>
              <div className="text-green-600 my-3">{item.free ? "Free" : "Paid"}</div>
            </div>
          </div>
        </Link>
      </div>
    ))
) : (
  [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
    <div key={index}>
      <div className='m-1 border min-h-[20rem] rounded-2xl bg-slate-200 mt-5 p-1 animate-pulse'>
        <div className='mt-2 bg-slate-500 rounded-2xl animate-pulse'></div>
      </div>
    </div>
  ))
)}

      </div>
    </div>
  )
}

export default CourseList
