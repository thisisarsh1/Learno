import React from 'react'

function BannerMentor() {
  return (<>
    <div class="flex items-center justify-center h-[7rem] ">
    <div class="text-6xl font-bold bg-gradient-to-r from-primary via-purple-400 to-pink-700 bg-clip-text text-transparent transition-colors duration-1000
     hover:bg-gradient-to-r hover:from-blue-800 hover:via-purple-600 hover:to-pink-400  ease-in  
    ">
      Fill the following FORM !
    </div>
  </div>
  
  
  
  
  <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Fill out the form below to apply for a mentor and enhance your skills and career.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="linkedin" className="leading-7 text-sm text-gray-600">LinkedIn Profile</label>
                <input type="url" id="linkedin" name="linkedin" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="experience" className="leading-7 text-sm text-gray-600">Describe Your Experience</label>
                <textarea id="experience" name="experience" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="goals" className="leading-7 text-sm text-gray-600">Your Goals for Mentorship</label>
                <textarea id="goals" name="goals" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  
  </>
  )
}

export default BannerMentor
