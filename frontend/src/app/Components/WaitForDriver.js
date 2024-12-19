import Image from "next/image";
import React from "react";

const WaitForDriver = ({ setWaitingForDriver, ride }) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          setWaitingForDriver(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      {ride ? (
        <div>
          <div className="flex items-center justify-between">
            <Image src="/car.webp" width={120} height={120} alt="Car" />
            <div className="text-right">
              <h2 className="text-lg font-medium capitalize">
                {ride.captain?.fullname?.firstname + " " + ride?.captain?.fullname?.lastname|| "Driver Name"}
              </h2>
              <h4 className="text-xl font-semibold -mt-1 -mb-1">
                {ride.captain?.vehicle?.plate || "Plate Number"}
              </h4>
              <p className="text-sm text-gray-600">
                White Honda Mobilio - V
              </p>
              <h1 className="text-lg font-semibold">
                OTP: {ride?.otp}
              </h1>
            </div>
          </div>

          <div className="flex gap-2 justify-between flex-col items-center">
            <div className="w-full mt-5">
              <div className="flex items-center gap-5 p-3 border-b-2">
                <i className="text-lg ri-map-pin-user-fill"></i>
                <div>
                  <h3 className="text-lg font-medium">562/11-A</h3>
                  <p className="text-sm -mt-1 text-gray-600">
                    {ride.pickup || "Pickup Location"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-3 border-b-2">
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                  <h3 className="text-lg font-medium">562/11-A</h3>
                  <p className="text-sm -mt-1 text-gray-600">
                    {ride.destination || "Destination"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-3">
                <i className="ri-currency-line"></i>
                <div>
                  <h3 className="text-lg font-medium">₹{ride.fare || 0}</h3>
                  <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading ride details...</p>
      )}
    </div>
  );
};

export default WaitForDriver;
