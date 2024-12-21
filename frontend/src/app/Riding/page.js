"use client";
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import "remixicon/fonts/remixicon.css";
import { useEffect,useContext,useState } from 'react';
import { SocketContext } from '../contexts/SocketContext';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import LiveTracking from '../Components/LiveTracking';

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { socket } = useContext(SocketContext);
  const [ride, setRide] = useState(null);

  useEffect(() => {
    const rideId = searchParams.get("rideId");
    const pickup = searchParams.get("pickup");
    const destination = searchParams.get("destination");
    const fare = searchParams.get("fare");
    // const username = searchParams.get("username");
    const captainName = searchParams.get("captainName");

    if (rideId && pickup && destination && fare && captainName) {
      setRide({ _id: rideId, pickup, destination, fare, captain: { fullname: { firstname: captainName } } });
    }
  }, [searchParams]);

  console.log("Ride Data:", ride);
  
  socket.on("ride-ended", () => {
    router.replace('/home');
  });

  return (
    <div className="h-screen">
      <Link href={'/home'} className="fixed bright-2 top-2 h-10 w-5 bg-white flex items-center justify-center rounded-full">
      <i className=" text-lg font-medium ri-home-5-line"></i>
      </Link >
      <div clasName="h-1/2">
        <Image
          className="h-full w-full object-cover"
          src="/map.gif"
          alt="Uber Map Animation"
          width={500}
          height={300}
        />
        {/* <LiveTracking/> */}
      </div>
      <div clasName="h-1/2 p-8">
        <div className="flex items-center justify-between">
          <Image src="/car.webp" width={120} height={120} alt="Car" />
          <div className="text-right p-4">
            <h2 className="text-lg font-medium">{ride?.captain?.fullname?.firstname || "Unknown User"}</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">GJ01 RL 8092</h4>
            <p className="text-sm text-gray-600">White Honda Mobilio - V</p>
          </div>
        </div>

        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">{ride?.pickup || "N/A"}</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Pickup Location
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹{ride?.fare || "N/A"}</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className=" mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
      </div>
    </div>
  )
}

export default page
