"use client";
import UserProtectWrapper from "@/app/UserProtectWrapper";
import Image from "next/image";
import React, { useState, useContext, useRef } from "react";
import { useGSAP } from "@gsap/react"; // for animation of panel
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
      });
      gsap.to(panelCloseRef.current, { // Fixed typo in ref
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
      });
      gsap.to(panelCloseRef.current, { // Fixed typo in ref
        opacity: 0,
      });
    }
  }, [panelOpen]);

  return (
    <UserProtectWrapper>
      <div className="h-screen relative">
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
        
        {/* Main Content */}
        <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
          <div className="h-[30%] p-6 bg-white relative">
            <h5
              ref={panelCloseRef}
              onClick={() => setPanelOpen(false)}
              className="absolute opacity-0 right-6 top-6 text-2xl cursor-pointer transition-opacity duration-300"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className="text-2xl font-semibold">Find a trip</h4>
            <form onSubmit={submitHandler}>
              <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
              <input
                onClick={() => setPanelOpen(true)}
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
                type="text"
                placeholder="Add a pick-up location"
              />
              <input
                onClick={() => setPanelOpen(true)}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
                type="text"
                placeholder="Enter your destination"
              />
            </form>
          </div>

          <div
            ref={panelRef}
            className="bg-red-500 h-0 transition-height duration-300"
          ></div>
        </div>
      </div>
    </UserProtectWrapper>
  );
};

export default Home;
