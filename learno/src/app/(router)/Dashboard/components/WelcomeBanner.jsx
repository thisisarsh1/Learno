import React from 'react'

function WelcomeBanner({user}) {

  return (
    <div>
     
    <div className='mx-auto  border rounded-3xl bg-white h-[25vh] w-full hover:shadow-xl  transition duration-200 ease-in-out  '>
     <div className="container flex text-center items-center justify-evenly m-3">
      <img className="w-[30vh] " src='./undraw_dashboard_re_3b76.svg'></img>
      <div className="text align-middle">
        <div className='  text-4xl font-semibold text-gray-700'> Welcome back, <span className='text-primary'>{user?.fullName}</span> </div>
        <div className='   text-2xl font-semibold mt-5 text-gray-500'> Keep it up and <span className='text-green-600'>Improve your Progress !</span> </div>
      </div>
     </div>
    </div>
    
    </div>
  )
}

export default WelcomeBanner
