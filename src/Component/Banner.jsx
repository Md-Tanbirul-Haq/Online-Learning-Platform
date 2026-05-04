"use client";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[600px] bg-cover bg-center w-11/12 mx-auto rounded-lg overflow-hidden flex items-center justify-center text-white my-5"
      style={{
        backgroundImage:
          "url('banner.jpg')",
      }}
    >
      
      <div className="bg-black/60 w-full h-full flex items-center justify-center">
        
        <div className="text-center px-4">
          <h1 className="text-4xl mb-10 md:text-6xl font-bold">
            Learn from Industry Experts
          </h1>

          

          <Link className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition" href={"/Courses"} >
            View Courses
          </Link>
          
        </div>

      </div>
    </div>
  );
};

export default Banner;