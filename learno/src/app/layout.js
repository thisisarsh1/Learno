import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Learno",
  description: "A place to Grow",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
