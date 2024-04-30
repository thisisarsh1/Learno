import React from 'react'
import Link from 'next/link'
function Banner() {
  return (
    <Link href={"/sign-in"}>
    <div className='mx-auto  border rounded-3xl bg-white h-[25vh] w-full hover:shadow-xl  transition duration-200 ease-in-out  '>
     <div className="container flex text-center items-center justify-evenly ">
      <img className="w-[30vh]" src='./undraw_programming_re_kg9v.svg'></img>
      <div className="text align-middle">
        <div className='  text-4xl font-semibold text-gray-700'> Welcome to <span className='text-primary'>Lerno</span> </div>
        <div className='   text-2xl font-semibold mt-5 text-gray-500'> A place skills <span className='text-green-600'>Grow !</span> </div>
      </div>
     </div>
    </div>
    </Link>
  )
}

export default Banner
