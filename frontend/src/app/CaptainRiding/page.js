"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import "remixicon/fonts/remixicon.css";
import FinishRide from '../Components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const page = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    gsap.to(finishRidePanelRef.current, {
      transform: finishRidePanel ? "translateY(0)" : "translateY(100%)",
      duration: 0.5,
    });
  }, [finishRidePanel]);

  return (
    <div className="h-screen relative flex flex-col justify-end">

      {/* Header */}
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <Image className="w-16" src="/uber-driver.svg" alt="Uber Logo" width={64} height={64} />
        <Link href={'/CaptainHome'} className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      {/* Map Section */}
      <div className="h-4/5">
        <Image
          className="h-full w-full object-cover"
          src="/map.gif"
          alt="Uber Map Animation"
          width={500}
          height={300}
        />
      </div>

      {/* Captain Details Section */}
      <div className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10"
      onClick={()=>{
        setFinishRidePanel(true);
      }}
      >
        <h5 className='p-1 text-center w-[90%] absolute top-0'>
          <i className="text-3xl text-black-200 ri-arrow-up-wide-line"></i></h5>
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 h-screen translate-y-full bg-white px-3 py-10 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}
        />
      </div>

    </div>
  )
}

export default page
