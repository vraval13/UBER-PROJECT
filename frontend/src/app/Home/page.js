"use client";

import UserProtectWrapper from "@/app/UserProtectWrapper";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import VehiclePanel from "../Components/VehiclePanel";
import ConfirmRide from "../Components/ConfirmRide";
import LookingForDriver from "../Components/LookingForDriver";
import WaitForDriver from "../Components/WaitForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

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

  useGSAP(() => {
    gsap.to(confirmRidePanelRef.current, {
      transform: confirmRidePanel ? "translateY(0)" : "translateY(100%)",
      duration: 0.5,
    });
  }, [confirmRidePanel]);

  useGSAP(() => {
    gsap.to(vehicleFoundRef.current, {
      transform: vehicleFound ? "translateY(0)" : "translateY(100%)",
      duration: 0.5,
    });
  }, [vehicleFound]);

  useGSAP(() => {
    gsap.to(waitingForDriverRef.current, {
      transform: waitingForDriver ? "translateY(0)" : "translateY(100%)",
      duration: 0.5,
    });
  }, [waitingForDriver]);

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

        {/* Footer Panels */}
        <div
          ref={vehiclePanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
        >
          <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
        </div>

        <div
          ref={confirmRidePanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
        >
          <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
        </div>

        <div
          ref={vehicleFoundRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
        >
          <LookingForDriver setVehicleFound={setVehicleFound}/>
        </div>

        <div
          ref={waitingForDriverRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
        >
          <WaitForDriver setWaitingForDriver={setWaitingForDriver}/>
        </div>
      </div>
    </UserProtectWrapper>
  );
};

export default Home;
