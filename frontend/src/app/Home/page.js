"use client";

import UserProtectWrapper from "@/app/UserProtectWrapper";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import Image from "next/image";
import React, { useState, useRef, useContext, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import VehiclePanel from "../Components/VehiclePanel";
import ConfirmRide from "../Components/ConfirmRide";
import LookingForDriver from "../Components/LookingForDriver";
import WaitForDriver from "../Components/WaitForDriver";
import axios from "axios";
import { SocketContext } from "../contexts/SocketContext";
import { UserDataContext } from "../contexts/UserContext";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [fare, setFare] = useState({});
  const [activeField, setActiveField] = useState(null)
  const [vehicleType, setVehicleType] = useState(null);
  const [ride,setRide] = useState(null);

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  // const {sendMessage} = useContext(SocketContext);
  // const {receiveMessage} = useContext(SocketContext);
  const { socket } = useContext(SocketContext);

  const { user } = useContext(UserDataContext);

  // useEffect(() => {

  //   // if(!user) return 

  //   console.log(user)

  //   socket.emit("join", {
  //     userType: "user",
  //     userId: user._id
  //   })
  // }, [user]);

  // socket.on('ride-confirmed',ride =>{

  //   setVehicleFound(false)
  //   setWaitingForDriver(true);
  //   setRide(ride)
  // });

  // socket.on('ride-started',ride=>{
  //   setWaitingForDriver(false);
  //   // const router = useRouter();
  //   setRide(ride)
  //   router.replace('/Riding')
  // });
  useEffect(() => {
    if (user && user._id) {
      // Emit 'join' event
      socket.emit("join", {
        userId: user._id,
        userType: "user",
      });
    }

    socket.on('ride-confirmed', ride => {
      setVehicleFound(false);
      setWaitingForDriver(true);
      setRide(ride);
    });

    socket.on('ride-started', ride => {
      setWaitingForDriver(false);
      setRide(ride);
      router.replace('/Riding');
    });

    // Clean up the socket event listeners on component unmount
    return () => {
      socket.off('ride-confirmed');
      socket.off('ride-started');
    };
  }, [socket, user, router]);
  
  const handlePickupChange = async (e) => {
    const pickupValue = e.target.value;
    setPickup(pickupValue);

    // Save pickup to localStorage
    localStorage.setItem("pickup", pickupValue);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/maps/get-suggestions?input=${e.target.value}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // if (!response.ok) throw new Error("Failed to fetch pickup suggestions");

      const data = await response.json();
      setPickupSuggestions(data);
    } catch (error) {
      console.error("Error fetching pickup suggestions:", error);
    }
  };

  const handleDestinationChange = async (e) => {
    const destinationValue = e.target.value;
    setDestination(destinationValue);

    // Save destination to localStorage
    localStorage.setItem("destination", destinationValue);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/maps/get-suggestions?input=${e.target.value}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // if (!response.ok) throw new Error("Failed to fetch destination suggestions");

      const data = await response.json();
      setDestinationSuggestions(data);
    } catch (error) {
      console.error("Error fetching destination suggestions:", error);
    }
  };

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

  // import axios from 'axios';

  async function findTrip() {
    try {
      // Open the vehicle panel and close the current panel
      setVehiclePanel(true);
      setPanelOpen(false);

      // Define pickup and destination from localStorage or other accessible variables
      const pickup = localStorage.getItem("pickup") || "";
      const destination = localStorage.getItem("destination") || "";

      console.log('pickup:', pickup);
      console.log('destination:', destination);

      // Perform the API call using fetch
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/rides/get-fare?pickup=${encodeURIComponent(pickup)}&destination=${encodeURIComponent(destination)}`, // Use the Next.js environment variable for the base URL
        {
          method: "GET", // Use GET method with query params
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach token from localStorage
            "Content-Type": "application/json", // Set content type
          },
        }
      );

      // console.log(response.data);
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
      }

      // Parse the response data as JSON
      const data = await response.json();

      // Update fare state with the response data
      setFare(data);

    } catch (error) {
      console.error("Error fetching fare:", error.message);
    }
  }

  async function createRide() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/rides/create`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach token from localStorage
            "Content-Type": "application/json", // Set content type
          },
          body: JSON.stringify({
            pickup: localStorage.getItem("pickup"), // Pickup location
            destination: localStorage.getItem("destination"), // Destination
            vehicleType: vehicleType, // Vehicle type (e.g., 'car', 'moto', 'auto')
          }),
        }
      );

      // Check if response is successful
      if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Ride created successfully:", data);

      // Handle success: update UI or state as needed
      // Example: setRideDetails(data);
    } catch (error) {
      console.error("Error creating ride:", error.message);
    }
  }

  return (
    <UserProtectWrapper>
      <div className="h-screen relative overflow-hidden">
        <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
          <Image className="w-16" src="/logo.png" alt="Uber Logo" width={64} height={64} />
          <Link href={'/UserLogin'} className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
        {/* Logo Section */}
        {/* <div className="absolute left-5 top-5 w-16">
          <Image src="/logo.png" alt="Uber Logo" width={64} height={64} />
        </div> */}

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
                onClick={() => { setPanelOpen(true), setActiveField('pickup') }}
                value={pickup}
                onChange={handlePickupChange}
                className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
                type="text"
                placeholder="Add a pick-up location"
              />
              <input
                onClick={() => {
                  setPanelOpen(true),
                    setActiveField('destination')
                }}
                value={destination}
                onChange={handleDestinationChange}
                className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
                type="text"
                placeholder="Enter your destination"
              />
            </form>
            <button onClick={findTrip} className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full font-semibold">
              Find trip
            </button>
          </div>

          {/* Expandable Panel */}
          <div ref={panelRef} className="bg-white h-0 overflow-hidden">
            <LocationSearchPanel
              suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
              setPanelOpen={setPanelOpen}
              setVehiclePanel={setVehiclePanel}
              setPickup={setPickup}
              setDestination={setDestination}
              activeField={activeField}
            />
          </div>
        </div>

        {/* Footer Panels */}
        <div
          ref={vehiclePanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
        >
          <VehiclePanel selectVehicle={setVehicleType} fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
        </div>

        <div
          ref={confirmRidePanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
        >
          <ConfirmRide
            pickup={pickup}
            destination={destination}
            fare={fare}
            vehicleType={vehicleType}
            createRide={createRide}
            // passenger={passenger}
            setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
        </div>

        <div
          ref={vehicleFoundRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
        >
          <LookingForDriver pickup={pickup}
            destination={destination}
            fare={fare}
            vehicleType={vehicleType}
            createRide={createRide}
            setVehicleFound={setVehicleFound} />
        </div>

        <div
          ref={waitingForDriverRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
        >
          <WaitForDriver 
          ride={ride}
          setVehicleFound={setVehicleFound}
          waitingForDriver={waitingForDriver}
          setWaitingForDriver={setWaitingForDriver} />
        </div>
      </div>
    </UserProtectWrapper>
  );
};

export default Home;
