import Image from 'next/image';
import React from 'react'

const ConfirmRide = (props) => {
  const vehicleImages = {
    car: '/car.webp',
    moto: '/bike.webp',
    auto: '/auto.webp',
  };

  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0 " onClick={() => {
        props.setConfirmRidePanel(false);
      }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>

      <div className="flex gap-2 justify-between  flex-col items-center">
        <Image
          src={vehicleImages[props.vehicleType]}
          alt=''
          width={150}
          height={150}
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium ">{props.pickup}</h3>
              <p className="text-sm -mt-1 text-gray-600">Pickup Location</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium ">{props.destination}</h3>
              <p className="text-sm -mt-1 text-gray-600">Dropoff Location</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium ">₹{props.fare[props.vehicleType]}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <button onClick={()=>{
          props.setVehicleFound(true)
          props.setConfirmRidePanel(false)
          props.createRide()
        }}className=" mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg">Confirm</button>
      </div>
    </div>
  )
}

export default ConfirmRide
