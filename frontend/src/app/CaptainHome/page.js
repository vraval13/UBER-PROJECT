"use client";
import React, { useState, useRef } from "react";
import CaptainProtectWrapper from "@/app/CaptainProtectWrapper";
import Link from 'next/link';
import Image from 'next/image';
import "remixicon/fonts/remixicon.css";
import CaptainDetails from '../Components/CaptainDetails';
import RidePopUp from '../Components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import ConfirmRidePopUp from "../Components/ConfirmRidePopUp";

const page = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);

  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);

  useGSAP(() => {
    gsap.to(ridePopUpPanelRef.current, {
      transform: ridePopUpPanel ? "translateY(0)" : "translateY(100%)",
      duration: 0.5,
    });
  }, [ridePopUpPanel]);

  useGSAP(() => {
    gsap.to(confirmRidePopUpPanelRef.current, {
      transform: confirmRidePopUpPanel ? "translateY(0)" : "translateY(100%)",
      duration: 0.5,
    });
  }, [confirmRidePopUpPanel]);

  return (
    <CaptainProtectWrapper>
      <div className="h-screen">
        <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
          {/* <div className="left-5 top-5 w-16"> */}
          <Image className="w-16" src="/uber-driver.svg" alt="Uber Logo" width={64} height={64} />
          {/* </div> */}
          <Link href={'/CaptainLogin'} className="  h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link >
        </div>
        <div className="h-3/5">
          <Image
            className="h-full w-full object-cover"
            src="/map.gif"
            alt="Uber Map Animation"
            width={500}
            height={300}
          />
        </div>
        <div className="h-2/5 p-6">
          <CaptainDetails />
        </div>

        <div
          ref={ridePopUpPanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
        >
          <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
        </div>

        <div
          ref={confirmRidePopUpPanelRef}
          className="fixed w-full z-10 bottom-0 h-screen translate-y-full bg-white px-3 py-10 pt-12"
        >
          <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
        </div>

      </div>
    </CaptainProtectWrapper>
  )
}

export default page
