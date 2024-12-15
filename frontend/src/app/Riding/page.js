import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import "remixicon/fonts/remixicon.css";

const page = () => {
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
      </div>
      <div clasName="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <Image src="/car.webp" width={120} height={120} alt="Car" />
          <div className="text-right">
            <h2 className="text-lg font-medium">Vyom</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">GJ01 RL 8092</h4>
            <p className="text-sm text-gray-600">White Honda Mobilio - V</p>
          </div>
        </div>

        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Kakariya Talav, Ahmedabad
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">$193.20</h3>
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
