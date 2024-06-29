"use client"
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner";
import { UserMerberContext } from "./_context/UserMemberContext";
import { useState } from "react";

const inter = Space_Grotesk({ subsets: ["latin"] });

// export const metadata = {
//   title: "Learno",
//   description: "A place to Grow",
//   icons:{
//     icon:['./favicon-32x32.png?v=4'],
//     apple:['./apple-touch-icon.png?v=4'],
//     shortcut:['./favicon-32x32.png']
//   }
// };

export default function RootLayout({ children }) {
  const [isMember,setIsMember]=useState(false)
  return (
    <ClerkProvider>
      <UserMerberContext.Provider value={{isMember,setIsMember}}>
      <html lang="en">
      
      <body className={inter.className}>{children}
      <Toaster position="top-center" 
      
      /></body>
    </html>
    </UserMerberContext.Provider>
    </ClerkProvider>
  );
}
