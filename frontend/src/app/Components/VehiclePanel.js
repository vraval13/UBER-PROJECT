import React from 'react'
import Image from 'next/image';
const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0 " onClick={() => {
        props.setVehiclePanel(false);
      }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

      {/* Vehicle Cards */}
      {[
        { name: "UberGo", seats: 4, time: "2 mins away", price: "$193.20", image: "/car.webp" },
        { name: "Moto", seats: 1, time: "3 mins away", price: "$65.17", image: "/bike.webp" },
        { name: "UberAuto", seats: 3, time: "3 mins away", price: "$118.86", image: "/auto.webp" },
      ].map((vehicle, index) => (
        <div
          onClick={()=>{
            props.setConfirmRidePanel(true);
          }}
          key={index}
          className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between"
        >
          <Image
            className="h-12"
            src={vehicle.image}
            alt={vehicle.name}
            width={64}
            height={64}
          />
          <div className="-ml-2 w-1/2">
            <h4 className="text-base font-medium">
              {vehicle.name}{" "}
              <span className="ml-2">
                <i className="ri-user-3-fill"></i> {vehicle.seats}
              </span>
            </h4>
            <h5 className="text-sm font-medium">{vehicle.time}</h5>
            <p className="text-xs">Affordable rides</p>
          </div>
          <h2 className="text-lg font-semibold">{vehicle.price}</h2>
        </div>
      ))}
    </div>
  )
}

export default VehiclePanel
