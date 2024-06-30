"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Razorpay from 'razorpay';
import Script from 'next/script';
import { useUser } from "@clerk/nextjs";
import GlobalApi from '@/app/utils/GlobalApi';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';



function page() {
  const[SubscriptionId,setSubscriptionID]=useState(null)
const { user } = useUser();
  const createSubscription=async(planid)=>{
    if(!user){
      toast("Please Login first to Buy Membership")
    }
    else{
      toast("Wait a second payment gateway is right on its way !!")
axios.post("/api/create-subscription",JSON.stringify({
  planId:planid
})).then(resp=>{
  // console.log(resp.data);
  setSubscriptionID(resp.data.id)
 
})}
  }
  useEffect(()=>{
    SubscriptionId&&MakePayment()
  },[SubscriptionId])
  
const MakePayment=()=>{
  
  const options={
    key:process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
    subscription_id:SubscriptionId,
    name:"LERNO pvt ltd",
    description:"LERNO MEMBERSHIP",
    image:'./logo.png',
    prefill:{
      email:user.primaryEmailAddress?.emailAddress,
    },
    handler:async(resp)=>{
      console.log(resp),
      addNewMember(resp?.razorpay_payment_id)
    },theme:{
      color:"#79BBDB"
    },
    
  }
    
  const rzp = new window.Razorpay(options);
    rzp.open()
}


const addNewMember =(paymentId)=>{
GlobalApi.AddNewMember(user.primaryEmailAddress?.emailAddress,paymentId)
.then(resp=>{
  console.log(resp);
  if(resp){
    toast("Payment Successful!")
  }
},(error)=>{
  toast('payment UnSuccessful!')
  console.log(error)
}
)
}


  const pricingTiers = [
    
    {
      title: 'Monthly',
      price: '₹500',
      features: ['Get unlimited access to any content for a month'],
      buttonText: 'BUY NOW',
      id:"plan_ORtrNNj462J7NS"
    },
    {
      title: 'Yearly',
      price: '₹1000',
      features: ['Get unlimited access to any content for an Year'],
      buttonText: 'BUY NOW',
      id:"plan_ORtrYRgHKvozHK"
    },
  ];
  return (
    <>
    <Script 
    id="razorpay-checkout-js"
    src="https://checkout.razorpay.com/v1/checkout.js"></Script>

    <section className="text-black body-font grid grid-cols-1 overflow-hidden ">
    <div className="container   bg-white m-3 rounded-3xl ">
      <div className="flex flex-col text-center  mb-20">
      <div className="flex items-center justify-center h-[5rem] mt-9 ">
    <div className="text-6xl font-bold bg-gradient-to-r from-primary via-purple-400 to-pink-700 bg-clip-text text-transparent transition-colors duration-1000
     hover:bg-gradient-to-r hover:from-blue-800 hover:via-purple-600 hover:to-pink-400  ease-in  
    ">
      TRY OUR MEMBERSHIP !
    </div>
  </div>
        <p className="  leading-relaxed text-base text-gray-500">
          Buy membership to get unlimited access to our fre and paid content !
        </p>
       
      </div>
      <div className="flex flex-wrap m-4 justify-center">
        {pricingTiers.map((tier, index) => (
          <div key={index} className="p-4 xl:w-2/4 md:w-1/2 w-full h-[25rem]">
            <div className="h-full p-6 rounded-lg border-2 border-purple-600 flex flex-col relative overflow-hidden hover:text-[#0F172B] hover:bg-pink-100 transition ease-in duration-200">
              <h2 className="text-5xl tracking-widest title-font mb-1 font-medium pb-3" >
                {tier.title}
              </h2>
              <h1 className="text-md text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none ">
                {tier.price}
              </h1>
              <ul className="flex flex-col space-y-2 pb-3">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="flex items-center mt-auto text-white bg-gray-400  py-2 px-4 w-full focus:outline-none hover:bg-[#0F172B] rounded hover:border-purple-600 transition ease-in duration-200" 
              onClick={()=>createSubscription(tier.id)}>
                {tier.buttonText}

              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  </>
  );
}


 

export default page
