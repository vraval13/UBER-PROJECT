// import UserContext from '../contexts/UserContext'
"use client";
import Image from 'next/image'
import React , {useContext} from 'react'
import { CaptainDataContext } from '../contexts/CaptainContext'

const CaptainDetails = () => {

  const {captain} = useContext(CaptainDataContext);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3 ">
          <Image className="h-10 w-10 rounded-full object-cover" src={'/random.jpeg'} width={200} height={200} />
          <h4 className="text-lg font-medium capitalize">{captain.fullname.firstname + " " +captain.fullname.lastname}</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹295.20</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start">
        <div className="text-center ">
          <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">15.4</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center ">
        <i className="text-3xl mb-2 font-thin ri-star-line"></i>
          <h5 className="text-lg font-medium">4.6/5.0</h5>
          <p className="text-sm text-gray-600">Ratings achieved</p>
        </div>
        <div className="text-center ">
        <i className="text-3xl mb-2 font-thin ri-road-map-line"></i>
          <h5 className="text-lg font-medium">500+</h5>
          <p className="text-sm text-gray-600">Rides done</p>
        </div>
      </div>

    </div>
  )
}

export default CaptainDetails
