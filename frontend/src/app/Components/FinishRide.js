"use client";

import Image from "next/image";
import React from "react";
import "remixicon/fonts/remixicon.css";
import { useRouter } from "next/navigation";

const FinishRide = ({ ride, setFinishRidePanel }) => {
  const router = useRouter();

  // Function to handle the end ride process
  async function endRide() {
    if (!ride || !ride._id) {
      console.error("Ride data is not available");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/rides/end-ride`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ rideId: ride._id }),
        }
      );

      if (response.ok) {
        router.replace("/CaptainHome");
      } else {
        console.error("Failed to end ride");
      }
    } catch (error) {
      console.error("Error ending ride:", error);
    }
  }
  return (
    <div className="relative">
      {/* Panel header with close icon */}
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => setFinishRidePanel(false)}
      >
        <i className="text-3xl text-gray-800 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 pt-10">Finish this Ride</h3>

      {/* Ride Information */}
      <div className="flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <Image
            src="/random1.jpeg"
            alt="User Image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h2 className="text-lg font-medium">
            {ride?.user?.fullname?.firstname || "Unknown User"}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2KM</h5>
      </div>

      {/* Ride Details */}
      <div className="flex flex-col gap-2 mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="text-lg ri-map-pin-user-fill"></i>
          <div>
            <h3 className="text-lg font-medium">{ride?.pickup || "N/A"}</h3>
            <p className="text-sm text-gray-600">Pickup Location</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium">{ride?.destination || "N/A"}</h3>
            <p className="text-sm text-gray-600">Dropoff Location</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3">
          <i className="text-lg ri-currency-line"></i>
          <div>
            <h3 className="text-lg font-medium">₹{ride?.fare || "N/A"}</h3>
            <p className="text-sm text-gray-600">Cash</p>
          </div>
        </div>
      </div>

      {/* Finish Ride Button */}
      <div className="mt-10">
        <button
          onClick={endRide}
          className="w-full text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
        >
          Finish Ride
        </button>
      </div>
    </div>
  );
};

export default FinishRide;

// "use client";

// import React from "react";
// import Image from "next/image";
// import "remixicon/fonts/remixicon.css";
// import { useRouter } from "next/navigation";

// const FinishRide = ({ ride, setFinishRidePanel }) => {
//   const router = useRouter();

//   // Function to handle the end ride process
//   async function endRide() {
//     if (!ride || !ride._id) {
//       console.error("Ride data is not available");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/rides/end-ride`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//           body: JSON.stringify({ rideId: ride._id }),
//         }
//       );

//       if (response.ok) {
//         router.replace("/captain-home");
//       } else {
//         console.error("Failed to end ride");
//       }
//     } catch (error) {
//       console.error("Error ending ride:", error);
//     }
//   }

//   return (
//     <div>
//       <h5
//         className="p-1 text