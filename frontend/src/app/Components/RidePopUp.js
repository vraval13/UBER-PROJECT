import Image from 'next/image';
import React from 'react';

const RidePopUp = (props) => {
  const fullName =
    props.ride?.user?.fullname?.firstname && props.ride?.user?.fullname?.lastname
      ? `${props.ride.user.fullname.firstname} ${props.ride.user.fullname.lastname}`
      : props.ride?.user?.fullname;

  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setRidePopUpPanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <Image
            className="h-12 rounded-full object-cover w-12"
            src={"/random1.jpeg"}
            alt=""
            width={100}
            height={100}
          />
          <h2 className="text-lg font-medium">{fullName}</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">{props.ride?.pickup}</h3>
              <p className="text-sm -mt-1 text-gray-600">Pickup Location</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">{props.ride?.destination}</h3>
              <p className="text-sm -mt-1 text-gray-600">Dropoff Location</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare} </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full">
          <button
            onClick={() => {
              props.setConfirmRidePopUpPanel(true);
              props.setRidePopUpPanel(false);
              props.confirmRide();
            }}
            className="bg-green-600 w-full text-white font-semibold p-2 px-10 rounded-lg"
          >
            Accept
          </button>
          <button
            onClick={() => {
              props.setRidePopUpPanel(false);
            }}
            className="mt-2 w-full bg-gray-300 text-gray-700 font-semibold p-2 px-10 rounded-lg"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
