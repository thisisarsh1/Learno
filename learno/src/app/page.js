"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GlobalApi from "./utils/GlobalApi";
function Home() {
  
  const router = useRouter();
  const {user,isLoaded}= useUser()
  useEffect(()=>{
    user&&CheckUserMembership()
    if(user){
      router.push("/Dashboard") 
    }
    else{
      isLoaded&&router.push("/courses") 
    }
  },[user])
  
  return (
    <UserButton afterSignOutUrl="/sign-in/"></UserButton>
 
  );
}
export default Home