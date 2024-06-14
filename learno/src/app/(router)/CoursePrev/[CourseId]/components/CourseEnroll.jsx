import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import GlobalApi from "@/app/utils/GlobalApi";
import { toast } from "sonner";

export default function CourseEnroll({ CourseInfo }) {
  const membership = true;
  
  const { user } = useUser();
  console.log(user.primaryEmailAddress?.emailAddress)
  const router = useRouter();
  const OnEnrollCourse = () => {
    if (!CourseInfo || !user) {
      console.error("CourseInfo or user is not defined");
      return;
    }

    const courseSlug = CourseInfo.slugId;


    if (!courseSlug) {
      console.error("Course slug or user email is missing");
      return;
    }

    GlobalApi.enrollTocourse(
      CourseInfo?.slugId,
      user.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      console.log("successful");
      console.log(resp);
      if (resp) {

        
          toast("User enroll Successful", {
            description: "User Enroled to this course",
           
          })

        router.push("/WatchCourse/" + resp.createUserEnrollcourse.id);
      }
    });
  };
  return (
    <div>
      {user && (membership || CourseInfo.free) ? (
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
            ENROL NOW !
          </div>
          <div className="text-lg text-white ">
            Jump into the course, let's learn, build, and conquer projects!
          </div>
          <Link href={"/sign-in"}>
            <button
              type="button"
              className=" my-5 text-primary bg-white hover:bg-[#E2E2E2] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              ENROL NOW
            </button>
          </Link>
          {console.log("unsuccessful")}
        </div>
      ) : (
        <div className="bg-[#79BBDB] rounded-2xl p-3 text-center">
          <div className="text-2xl font-extrabold text-white text-center p-3 ">
            ENROL TO THE COURSE !
          </div>
          <div className="text-lg text-white ">
            Subscribe monthly for unlimited access to all courses now!!
          </div>
          <Link href={"/"}>
            <button
              type="button"
              className=" my-5 text-primary bg-white hover:bg-[#E2E2E2] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Buy Membership at just ₹500
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
