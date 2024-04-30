"use client"

import { BookOpen, Crown, GraduationCap, Grid2x2Icon, LayoutDashboard, LogIn } from "lucide-react";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Grid } from "lucide";
function SideNav() {
  const {user}= useUser()
  const sideitem = [
    {
      id: 5,
      title: "Dashboard",
      icon: <LayoutDashboard/>,
      path:"/Dashboard",
      auth:user
    },
    {
      id: 1,
      title: "All Courses",
      icon: <BookOpen />,
      path:"/courses",
      auth:true
    },
    {
      id: 2,
      title: "Try Premium",
      icon: <Crown />,
      path:"/premium",
      auth:true
    },
    {
      id: 3,
      title: "Be Instructor",
      icon: <GraduationCap />,
      path:"/instructor",
      auth:true
    },
    {
      id: 4,
      title: "Login",
      icon: <LogIn />,
      path:"/sign-in",
      auth:true
    },
    
  ];
//new thing usePath name can access path
const path = usePathname()
// useEffect(()=>{
//   path()
  
// },[])

  return (
    <div className="fixed sm:w-[18rem]  hidden sm:block h-[100vh] bg-primary bg-opacity-60 backdrop-blur-md rounded-3xl m-1">
      <img className="mt-3 ml-2" src="/logo.png" width={250}  alt="Logo" />
      <div className=" mt-10 mx-5 ">
        <hr></hr>
        {sideitem.map((item,index) =>item.auth &&(
          <div key={index}>
          <Link href={item.path}>
            <div className={`mt-5 hover:bg-slate-100 hover:text-black rounded-lg text-white flex p-5 gap-3 transition ease-in-out duration-200 ${path.includes(item.path)&&' text-black bg-slate-900'}`}>
              <div className=" hover:animate-bounce">{item.icon}</div>
              <h2 className="text-lg ml-5">{item.title}</h2>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
