import React from 'react';
import Image from 'next/image';

const VehiclePanel = ({ setVehiclePanel, setConfirmRidePanel, selectVehicle, fare }) => {
  const vehicles = [
    {
      name: 'UberGo',
      seats: 4,
      time: '2 mins away',
      description: 'Affordable, compact rides',
      price: fare.car,
      image: '/car.webp',
      type: 'car',
    },
    {
      name: 'Moto',
      seats: 1,
      time: '3 mins away',
      description: 'Affordable motorcycle rides',
      price: fare.moto,
      image: '/bike.webp',
      type: 'moto',
    },
    {
      name: 'UberAuto',
      seats: 3,
      time: '3 mins away',
      description: 'Affordable Auto rides',
      price: fare.auto,
      image: '/auto.webp',
      type: 'auto',
    },
  ];

  return (
    <div className="relative bg-white rounded-t-3xl shadow-lg">
      {/* Header with Arrow Icon */}
      <h5
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-gray-200 cursor-pointer"
        onClick={() => setVehiclePanel(false)}
      >
        <i className="text-3xl ri-arrow-down-wide-line"></i>
      </h5>

      {/* Panel Title */}
      <h3 className="text-2xl font-semibold  mb-5 text-center">Choose a Vehicle</h3>

      {/* Vehicle Cards */}
      {vehicles.map((vehicle, index) => (
        <div
          key={index}
          className="flex border-2 hover:border-black mb-2 rounded-xl w-full p-3 items-center justify-between cursor-pointer transition-all"
          onClick={() => {
            setConfirmRidePanel(true);
            selectVehicle(vehicle.type);
          }}
        >
          {/* Vehicle Image */}
          <Image
            className="h-12"
            src={vehicle.image}
            alt={vehicle.name}
            width={64}
            height={64}
          />
          {/* Vehicle Details */}
          <div className="ml-2 w-1/2">
            <h4 className="text-base font-medium">
              {vehicle.name}{' '}
              <span className="text-gray-500">
                <i className="ri-user-3-fill"></i> {vehicle.seats}
              </span>
            </h4>
            <h5 className="text-sm font-medium">{vehicle.time}</h5>
            <p className="text-xs text-gray-600">{vehicle.description}</p>
          </div>
          {/* Vehicle Price */}
          <h2 className="text-lg font-semibold">₹{vehicle.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default VehiclePanel;
