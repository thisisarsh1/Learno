import React from 'react'
import Link from 'next/link'
export default function CourseEnroll() {
  const membership=false;
  return (
    <div>
      {membership?
    
    <div className="bg-[#79BBDB] rounded-2xl p-3 text-center">
      <div className="text-2xl font-extrabold text-white text-center p-3 ">ENROL NOW !</div>
<div className="text-lg text-white ">Jump into the course, let's learn, build, and conquer projects!</div>
<Link href={"/"}>
<button type="button" className=" my-5 text-primary bg-white hover:bg-[#E2E2E2] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">ENROL NOW</button>
 </Link>   
</div>

:
<div className="bg-[#79BBDB] rounded-2xl p-3 text-center">
      <div className="text-2xl font-extrabold text-white text-center p-3 ">ENROL TO THE COURSE !</div>
<div className="text-lg text-white ">Subscribe monthly for unlimited access to all courses now!!</div>
<Link href={"/"}>
<button type="button" className=" my-5 text-primary bg-white hover:bg-[#E2E2E2] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Buy Membership at just ₹500</button>
 </Link>   
</div>
}
    </div>
  )
}
