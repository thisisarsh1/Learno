"use client"
import React, { useContext, useEffect } from "react";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import { useUser } from "@clerk/nextjs";
import GlobalApi from '@/app/utils/GlobalApi'
import { UserMerberContext, searchcontext } from "../_context/UserMemberContext";

function layout({ children }) {
  const { user } = useUser()
  
const {isMember,setIsMember}=useContext(UserMerberContext)
  useEffect(()=>{
    user&&CheckUserMembership()
  },[user])
  const CheckUserMembership =()=>{
    GlobalApi.checkmembership(user.primaryEmailAddress?.emailAddress).then(resp=>{
      console.log(resp)
      if(resp?.memberships.length>0){
        console.log("its a member")
        setIsMember(true)
      }
    })
  }
  return (
    <div className="mt-1">
      <SideNav></SideNav>
      <div className="sm:ml-[18.5rem]">
        <Header></Header>
        {children}
        </div>
    </div>
  );
}

export default layout;
