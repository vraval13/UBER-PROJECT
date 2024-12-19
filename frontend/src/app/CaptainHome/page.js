"use client";
import React, { useState, useRef, useEffect, useContext } from "react";
import CaptainProtectWrapper from "@/app/CaptainProtectWrapper";
import Link from 'next/link';
import Image from 'next/image';
import "remixicon/fonts/remixicon.css";
import CaptainDetails from '../Components/CaptainDetails';
import RidePopUp from '../Components/RidePopUp';
import ConfirmRidePopUp from "../Components/ConfirmRidePopUp";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { SocketContext } from "../contexts/SocketContext";
import { CaptainDataContext } from "../contexts/CaptainContext";

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(false);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const [ride, setRide] = useState(null);

  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    if (captain && captain._id) {
      // Emit 'join' event
      socket.emit("join", {
        userId: captain._id,
        userType: "captain",
      });

      // Function to update location
      const updateLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {

            console.log({
              userId: captain._id,
              location: {
                ltd: position.coords.latitude,
                lng: position.coords.longitude,
              }
            });

            socket.emit("update-location-captain", {
              userId: captain._id,
              location: {
                ltd: position.coords.latitude,
                lng: position.coords.longitude,
              },
            });
          });
        }
      };

      // Update location every 10 seconds
      const locationInterval = setInterval(updateLocation, 10000);

      // Call immediately on mount
      updateLocation();

      // Cleanup interval on unmount
      // return () => clearInterval(locationInterval);
    }
  }, [socket, captain]);

  socket.on('new-ride', (data) => {
    console.log(data)
    setRide(data)
    setRidePopUpPanel(true)
  })

  async function confirmRide() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/rides/confirm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          rideId: ride._id,
          captainId: captain._id,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to confirm the ride');
      }

      setRidePopUpPanel(false);
      setConfirmRidePopUpPanel(true);
    } catch (error) {
      console.error('Error confirming ride:', error.message);
      // Optionally, handle the error (e.g., display an error message)
    }
  }


  useEffect(() => {
    // Simulating new ride data
    setTimeout(() => {
      setRide({
        captainName: "Vyom Raval",
        distance: "2.2 KM",
        pickup: "562/11-A, XYZ",
        dropoff: "562/11-A, xyz",
        fare: "₹150",
      });
      setRidePopUpPanel(true);
    }, 2000);
  }, []);

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
        {/* Header */}
        <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
          <Image className="w-16" src="/uber-driver.svg" alt="Uber Logo" width={64} height={64} />
          <Link href={'/CaptainLogin'} className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>

        {/* Map Section */}
        <div className="h-3/5">
          <Image
            className="h-full w-full object-cover"
            src="/map.gif"
            alt="Uber Map Animation"
            width={500}
            height={300}
          />
        </div>

        {/* Captain Details Section */}
        <div className="h-2/5 p-6">
          <CaptainDetails />
        </div>

        {/* Ride Pop-Up Panel */}
        <div
          ref={ridePopUpPanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
        >
          {ride && (
            <RidePopUp
              // passenger={passenger}
              setRidePopUpPanel={setRidePopUpPanel}
              setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
              ride={ride}
              confirmRide={confirmRide}
            />
          )}
        </div>

        {/* Confirm Ride Pop-Up Panel */}
        <div
          ref={confirmRidePopUpPanelRef}
          className="fixed w-full z-10 bottom-0 h-screen translate-y-full bg-white px-3 py-10 pt-12"
        >
          <ConfirmRidePopUp
            setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
            setRidePopUpPanel={setRidePopUpPanel}
          />
        </div>

      </div>
    </CaptainProtectWrapper>
  );
};

export default CaptainHome;
