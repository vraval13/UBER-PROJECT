"use client";

import UserProtectWrapper from "@/app/UserProtectWrapper";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Pickup:", pickup, "Destination:", destination);
  };

  // GSAP animations for expandable panel
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: "1.5rem",
        duration: 0.5,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: "0",
        duration: 0.5,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [panelOpen]);

  return (
    <UserProtectWrapper>
      <div className="h-screen relative overflow-hidden">
        {/* Logo Section */}
        <div className="absolute left-5 top-5 w-16">
          <Image src="/logo.png" alt="Uber Logo" width={64} height={64} />
        </div>

        {/* Map Section */}
        <div className="h-screen w-screen">
          <Image
            className="h-full w-full object-cover"
            src="/map.gif"
            alt="Uber Map Animation"
            width={500}
            height={300}
          />
        </div>

        {/* Main Content */}
        <div className="absolute top-0 flex flex-col justify-end h-screen w-full">
          {/* Input Section */}
          <div className="relative bg-white h-[30%] p-6 shadow-lg">
            <h5
              ref={panelCloseRef}
              onClick={() => setPanelOpen(false)}
              className="absolute opacity-0 right-6 top-6 text-2xl cursor-pointer transition-opacity duration-300"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className="text-2xl font-semibold mb-3">Find a trip</h4>
            <form onSubmit={submitHandler}>
              <input
                onClick={() => setPanelOpen(true)}
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="bg-[#eee] px-12 py-3 text-lg rounded-lg w-full mt-5"
                type="text"
                placeholder="Add a pick-up location"
              />
              <input
                onClick={() => setPanelOpen(true)}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-[#eee] px-12 py-3 text-lg rounded-lg w-full mt-4"
                type="text"
                placeholder="Enter your destination"
              />
            </form>
          </div>

          {/* Expandable Panel */}
          <div
            ref={panelRef}
            className="bg-white h-0 overflow-hidden shadow-md transition-all duration-300"
          >
            <LocationSearchPanel />
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 w-full bg-white px-3 py-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-5">Choose a Vehicle</h2>
          <div className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between   ">
            <Image
              className="h-12"
              src="/car.webp"
              alt="Car"
              width={64}
              height={64}
            />
            <div className="-ml-2 w-1/2">
              <h4 className="text-base font-medium">
                UberGo <span className="ml-2"><i className="ri-user-3-fill"></i> 4</span>
              </h4>
              <h5 className="text-sm font-medium">2 mins away</h5>
              <p className="text-xs">
                Affordable, compact rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">$193.20</h2>
          </div>
          <div className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between   ">
            <Image
              className="h-12"
              src="/bike.webp"
              alt="Bike"
              width={64}
              height={64}
            />
            <div className="-ml-2 w-1/2">
              <h4 className="text-base font-medium">
                Moto <span className="ml-2"><i className="ri-user-3-fill"></i> 1</span>
              </h4>
              <h5 className="text-sm font-medium">3 mins away</h5>
              <p className="text-xs">
                Affordable motorcycle rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">$65.17</h2>
          </div>
          <div className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between   ">
            <Image
              className="h-12"
              src="/auto.webp"
              alt="Auto"
              width={64}
              height={64}
            />
            <div className="-ml-2 w-1/2">
              <h4 className="text-base font-medium">
                UberAuto <span className="ml-2"><i className="ri-user-3-fill"></i> 3</span>
              </h4>
              <h5 className="text-sm font-medium">3 mins away</h5>
              <p className="text-xs">
                Affordable Auto rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">$118.86</h2>
          </div>

        </div>
      </div>
    </UserProtectWrapper>
  );
};

export default Home;
