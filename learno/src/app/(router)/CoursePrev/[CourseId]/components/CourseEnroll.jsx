import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import GlobalApi from "@/app/utils/GlobalApi";
import { toast } from "sonner";
import { useEffect } from "react";

export default function CourseEnroll({ CourseInfo,isUserAlreadyEnrolled }) {
  const membership = false;
  
  const { user } = useUser();
useEffect(()=>{
  // console.log('isUserAlreadyEnrolled',isUserAlreadyEnrolled)
},[])
  const router = useRouter();
  const OnEnrollCourse = () => {
   
    GlobalApi.enrollTocourse(
      CourseInfo?.slugId,
      user.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      
      
      if (resp) {

        
          toast("User enroll Successful", {
            description: "User Enroled to this course",
           
          })

        router.push("/WatchCourse/" + resp.createUserEnrollcourse.id);
      }
    });
  };
  // check if already added or not

  return (
    <div>
      {user && (membership || CourseInfo.free)&&!isUserAlreadyEnrolled ? (
        <div className="bg-[#79BBDB] rounded-2xl p-3 text-center">
          <div className="text-2xl font-extrabold text-white text-center p-3 ">
            ENROL NOW !
          </div>
          <div className="text-lg text-white ">
            Jump into the course, let's learn, build, and conquer projects!
          </div>

          <button
            type="button"
            className=" my-5 text-primary bg-white hover:bg-[#E2E2E2] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            onClick={() => OnEnrollCourse()}
          >
            ENROL NOW
          </button>
        </div>
      ) : !user ? (
        <div className="bg-[#79BBDB] rounded-2xl p-3 text-center">
          <div className="text-2xl font-extrabold text-white text-center p-3 ">
            Sign In  !
          </div>
          <div className="text-lg text-white ">
            Singn in first to learn, build, and conquer projects!
          </div>
          <Link href={"/sign-in"}>
            <button
              type="button"
              className=" my-5 text-primary bg-white hover:bg-[#E2E2E2] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              SIGN IN
            </button>
          </Link>
          {/* {console.log("unsuccessful")} */}
        </div>
      ) : !isUserAlreadyEnrolled && !membership &&
        <div className="bg-[#79BBDB] rounded-2xl p-3 text-center">
          <div className="text-2xl font-extrabold text-white text-center p-3 ">
            ENROL TO THE COURSE !
          </div>
          <div className="text-lg text-white ">
            Subscribe monthly for unlimited access to all courses now!!
          </div>
          <Link href={"/premium"}>
            <button
              type="button"
              className=" my-5 text-primary bg-white hover:bg-[#E2E2E2] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Buy Membership at just ₹500
            </button>
          </Link>
        </div>}
      
      
      {isUserAlreadyEnrolled && <div className="bg-[#79BBDB] rounded-2xl p-3 text-center">
          <div className="text-2xl font-extrabold text-white text-center p-3 ">
            Continue Learning
          </div>
          <div className="text-lg text-white ">
            Continue Learning and building your project Further
          </div>
          <Link href={"/WatchCourse/" + isUserAlreadyEnrolled}>
            <button
              type="button"
              className=" my-5 text-primary bg-white hover:bg-[#E2E2E2] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Continue
            </button>
          </Link>
        </div>}
      
    </div>
  );
}
