"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Home() {
  
  const router = useRouter();
  const {user,isLoaded}= useUser();
  useEffect(()=>{
    
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