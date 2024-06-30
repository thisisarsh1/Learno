"use client"
import React from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { UserButton, useUser } from '@clerk/nextjs'
import { useContext } from 'react'
import { searchcontext } from '@/app/_context/UserMemberContext'
function Header() {

  const {user,isLoaded} = useUser()
  const{search,setSearch}=useContext(searchcontext)

  return (
    <header className="text-black-600 body-font sticky top-1 z-10 bg-primary bg-opacity-60 backdrop-blur-md rounded-3xl mx-3 md:mx-1 shadow-xl  h-[10vh] sm:h-[10vh] ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row  justify-between  ">
       <div className="search  hidden  md:block ">
          <div className="flex">
            <Search className='mt-[1vh] m-1'></Search>
            <input type='search' className='bg:[#efefef] rounded-3xl  pl-3 h-9 w-[18vw]' placeholder='Search...'onChange={(i)=>{setSearch(i.target.value)}}></input>
        </div>
        </div>{user&& isLoaded?
        <UserButton></UserButton>
        :
           <nav className="flex  ">
          <Link href={'/sign-up'} className="block border rounded-lg p-2 text-primary m-auto sm:pr-2 mb-2 sm:mb-0 hover:text-black hover:bg-[#EEEEEE] bg-white transition duration-100 ease-in">Get Started</Link>
          
        </nav>
        

          
        }
       
        
        
    </div>
    </header>
  )
}

export default Header
