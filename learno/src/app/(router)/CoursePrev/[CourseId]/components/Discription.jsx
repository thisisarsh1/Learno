"use client";
import React from "react";
import Markdown from 'react-markdown'
function Discription({CourseInfo}) {
  // const xyz="https://ap-south-1.graphassets.com/clufm1rv617z508pl9jklcpo3/cluml3o3k0ox307ppxys0s4lc"
  return (
    <div>
      <div className=" text-4xl font-extrabold text-center">
        {CourseInfo.name}
      </div>
      <div className="text-lg text-gray-500 font-semibold m-2 ">
        Instructor:{CourseInfo.author}
      </div>
      <div className="flex m-2">
        Tags :
        <div className=" border-2 bg-slate-400 rounded-2xl px-2 mx-2 text-white">
          {CourseInfo.tags}
        </div>
      </div>
      {CourseInfo.free ? (
        <div className="text-2xl font-semibold text-green-500 text-right m-2">
          Free
        </div>
      ) : (
        <div className=" text-2xl font-semibold text-right m-2">Paid:₹500</div>
      )}
     

      {CourseInfo && CourseInfo.chapter && (
        <div>
      <div className="text-2xl font-bold my-3 text-primary">{CourseInfo.chapter[0]?.name}</div>
  <video width={1000} height={250} controls className='rounded-lg' poster={CourseInfo.banner?.url}>
    <source src={CourseInfo.chapter[0]?.video?.url} type='video/mp4' />

  </video>
  </div>
)}
    


      <div className="text-xl font-bold mt-9">
        Discription:-</div> 
        <Markdown className="text-md m-2 ">{CourseInfo.discription}</Markdown>
      
    </div>
  );
}

export default Discription;
