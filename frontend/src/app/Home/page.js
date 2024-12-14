"use client";
import React from "react";
import UserProtectWrapper from "@/app/UserProtectWrapper";
import Image from "next/image";
import { useState } from "react/cjs/react.production";

const Home = () => 
{
  const [pickup,setPickup] = useState('');
  const [destination,setDestination] = useState('');
  const submitHandler = (e) =>{
    e.preventDefault();
  }
  return (
    <UserProtectWrapper>
      <div className="h-screen relative" >
        {/* Logo Section */}
        <div className="w-16 absolute left-5 top-5">
          <Image
            src="/logo.png" // Ensure this path is correct
            alt="Uber Logo"
            width={64}
            height={64}
          />
        </div>

        {/* Map GIF Section */}
        <div className="h-screen w-screen">
          <Image
            className="h-full w-full object-cover"
            src="/map.gif" // Ensure the map.gif is in the `public` folder
            alt="Uber Map Animation"
            width={500} // Adjust the dimensions as needed
            height={300}
          />
        </div>
        <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
          <div className="h-[30%] p-5 bg-white relative">
            <h4 className="text-2xl font-semibold">Find a trip</h4>
            <form onSubmit={(e)=>{
              submitHandler(e);
            }}>
              <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
              <input 
              value={pickup}
              onChange={(e)=>{
                setPickup(e.target.value)
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5" type="text" placeholder="Add a pick-up location" />
              <input 
              value={destination}
              onChange={(e)=>{
                setDestination(e.target.value)
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3" type="text" placeholder="Enter your destination" />
            </form>
          </div>

          <div className=" bg-red-500 h-0">

          </div>
        </div>
      </div>
    </UserProtectWrapper>
  );
};

export default Home;
