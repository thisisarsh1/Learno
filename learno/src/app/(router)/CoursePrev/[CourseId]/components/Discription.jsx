"use client";
import React from "react";
import Markdown from 'react-markdown'
function Discription({CourseInfo,activeChap,watchMode=false,SetCompletedChap}) {

  // console.log("helloyo",CourseInfo.chapter?.smallDisc)
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
     

      {CourseInfo.chapter && (
        <div>
      <div className="text-2xl font-bold my-3 text-primary">{CourseInfo.chapter[activeChap]?.name}</div>
  <video width={1000} 
  height={250}
  controls 
  className='rounded-lg'
  poster={CourseInfo.banner?.url} 
  // videoUrl={CourseInfo.chapter[0]?.video?.url}
  key={CourseInfo.chapter[activeChap]?.video?.url}>
    <source src={CourseInfo.chapter[activeChap]?.video?.url} type='video/mp4' />

  </video>
  </div>
)}
    


    {CourseInfo.chapter && CourseInfo.chapter &&(<><div className="text-xl font-bold mt-9">
       

    <>{watchMode&&(<span>
          <div className="my-5 flex flex-row justify-between ">
  About This Courses:-
    <button className="bg-primary text-white hover:bg-[#0F172B] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    onClick={()=>SetCompletedChap(CourseInfo.chapter[activeChap]?.id)}
    >
      Mark as Completed
    </button>
  </div>

        </span>)}</>
        
      
          
       </div>
         <Markdown className="text-md m-2 ">{CourseInfo.chapter[activeChap]?.smallDisc}</Markdown>
        <Markdown className="text-md m-2 ">{CourseInfo.discription}</Markdown>
        
        </>)}
    
    </div>
  );
}

export default Discription;
