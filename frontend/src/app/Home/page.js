"use client";

import UserProtectWrapper from "@/app/UserProtectWrapper";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const Home = () => {
  const [pickup, setPickup] = useState(""); // Pickup input state
  const [destination, setDestination] = useState(""); // Destination input state
  const [panelOpen, setPanelOpen] = useState(false); // Expandable panel state
  const [vehiclePanel, setVehiclePanel] = useState(false); // Vehicle options panel state

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Pickup:", pickup, "Destination:", destination);
  };

  // GSAP animations for expandable panel
  useGSAP(() => {
    gsap.to(panelRef.current, {
      height: panelOpen ? "70%" : "0%",
      padding: panelOpen ? 24 : 0,
      duration: 0.5,
    });

    gsap.to(panelCloseRef.current, {
      opacity: panelOpen ? 1 : 0,
      duration: 0.3,
    });
  }, [panelOpen]);

  // GSAP animations for vehicle panel
  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanel ? "translateY(0)" : "translateY(100%)",
      duration: 0.5,
    });
  }, [vehiclePanel]);

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
          <div className="relative bg-white h-[30%] p-6">
            <h5
              ref={panelCloseRef}
              onClick={() => setPanelOpen(false)}
              className="absolute right-6 top-6 text-2xl cursor-pointer"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className="text-2xl font-semibold">Find a trip</h4>
            <form onSubmit={submitHandler} className="relative py-3">
              <input
                onClick={() => setPanelOpen(true)}
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
                type="text"
                placeholder="Add a pick-up location"
              />
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
                type="text"
                placeholder="Enter your destination"
              />
            </form>
          </div>

          {/* Expandable Panel */}
          <div ref={panelRef} className="bg-white h-0 overflow-hidden">
            <LocationSearchPanel
              setPanelOpen={setPanelOpen}
              setVehiclePanel={setVehiclePanel}
              setPickup={setPickup}
            />
          </div>
        </div>

        {/* Footer (Vehicle Options) */}
        <div
          ref={vehiclePanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
        >
          <h2 className="text-2xl font-semibold mb-5">Choose a Vehicle</h2>

          {/* Vehicle Cards */}
          {[
            { name: "UberGo", seats: 4, time: "2 mins away", price: "$193.20", image: "/car.webp" },
            { name: "Moto", seats: 1, time: "3 mins away", price: "$65.17", image: "/bike.webp" },
            { name: "UberAuto", seats: 3, time: "3 mins away", price: "$118.86", image: "/auto.webp" },
          ].map((vehicle, index) => (
            <div
              key={index}
              className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between"
            >
              <Image
                className="h-12"
                src={vehicle.image}
                alt={vehicle.name}
                width={64}
                height={64}
              />
              <div className="-ml-2 w-1/2">
                <h4 className="text-base font-medium">
                  {vehicle.name}{" "}
                  <span className="ml-2">
                    <i className="ri-user-3-fill"></i> {vehicle.seats}
                  </span>
                </h4>
                <h5 className="text-sm font-medium">{vehicle.time}</h5>
                <p className="text-xs">Affordable rides</p>
              </div>
              <h2 className="text-lg font-semibold">{vehicle.price}</h2>
            </div>
          ))}
        </div>
      </div>
    </UserProtectWrapper>
  );
};

export default Home;
