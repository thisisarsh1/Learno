"use client"
import React, { useEffect, useState } from 'react';
import WelcomeBanner from './components/WelcomeBanner';
import { useUser } from "@clerk/nextjs";
import Sidebanners from '../courses/_components/Sidebanners';
import InProgress from './components/InProgress';
import GlobalApi from '@/app/utils/GlobalApi';

function Page() {
  const { user } = useUser();
  const [userEnrolledCourse, setUserEnrolledCourse] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    user && GetUserProgressDeets();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [user]);

  const GetUserProgressDeets = () => {
    GlobalApi.GetProgressList(user?.primaryEmailAddress?.emailAddress).then((resp) => {
      setUserEnrolledCourse(resp.userEnrollcourses);
      // console.log(resp.userEnrollcourses)
    });
  };

  return (
    <div>
      {isMobile ? (
        <div className="text-center mt-5">
         <div className="text align-middle">
        <div className='  text-4xl font-semibold text-gray-700'> Please view this website on PC or laptop </div>
        <div className='   text-2xl font-semibold mt-5 text-gray-500'> it is  not designed for mobiles <span className='text-green-600'>,YET</span> </div>
      </div>
        </div>
      ) : (
        <div className='grid grid-cols-4 mt-3'>
          <div className='col-span-3 ml-1'>
            <WelcomeBanner user={user} />
            <InProgress userEnrolledCourse={userEnrolledCourse} />
          </div>
          <div className='col-span-1'>
            <Sidebanners />
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
