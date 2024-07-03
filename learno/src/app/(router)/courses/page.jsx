"use client"
import React, { useEffect, useState } from 'react';
import Banner from './_components/Banner';
import CourseList from './_components/CourseList';
import Sidebanners from './_components/Sidebanners';

function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="text-center mt-5">
          <p>Please view this page on a laptop or desktop.</p>
        </div>
      ) : (
        <div className='grid grid-cols-4 mt-3'>
          <div className='col-span-3 ml-1'>
            <Banner />
            <CourseList />
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
