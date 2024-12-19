import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
const ConfirmRidePopUp = ({ ride, setConfirmRidePopUpPanel, setRidePopUpPanel }) => {
  const router = useRouter(); // Get the router instance at the top level
  const [otp, setOtp] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }

    console.log("OTP Submitted:", otp);

    try {
      // Construct the URL with query parameters
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/rides/start-ride?rideId=${ride._id}&otp=${otp}`;

      // Use fetch with the constructed URL and headers
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // Check for successful response
      if (response.ok) {
        setConfirmRidePopUpPanel(false);
        setRidePopUpPanel(false);

        // Navigate to the specified route
        router.replace("/CaptainRiding");
      } else {
        // Handle error in response
        const errorData = await response.json();
        alert(errorData.message || "Failed to confirm the ride. Please try again.");
      }
    } catch (error) {
      // Handle unexpected error
      console.error("Error confirming ride:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="relative p-4 bg-white rounded-lg shadow-md">
      <h5
        className="p-1 text-center w-[93%] absolute top-0 cursor-pointer"
        onClick={() => {
          setRidePopUpPanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm this ride to Start</h3>
      <div className="flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <Image
            className="h-12 rounded-full object-cover w-12"
            src="/random1.jpeg"
            width={100}
            height={100}
            alt="User"
          />
          <h2 className="text-lg font-medium capitalize">
            {ride?.user?.fullname?.firstname + " " + ride?.user?.fullname?.lastname || "User Name"}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">{ride?.pickup || "Pickup Location"}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">{ride?.destination || "Destination"}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{ride?.fare || "0.00"}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <form onSubmit={submitHandler}>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="text"
              className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3"
              placeholder="Enter OTP"
            />
            <button
              type="submit"
              className="w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={() => {
                setConfirmRidePopUpPanel(false);
                setRidePopUpPanel(false);
              }}
              className="w-full mt-2 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
