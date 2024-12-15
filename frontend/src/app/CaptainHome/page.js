import React from 'react'
import CaptainProtectWrapper from "@/app/CaptainProtectWrapper";
import Link from 'next/link';
import Image from 'next/image';
import "remixicon/fonts/remixicon.css";
import CaptainDetails from '../Components/CaptainDetails';
import RidePopUp from '../Components/RidePopUp';

const page = () => {
  return (
    <CaptainProtectWrapper>
      <div className="h-screen">
        <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
          {/* <div className="left-5 top-5 w-16"> */}
          <Image className="w-16" src="/uber-driver.svg" alt="Uber Logo" width={64} height={64} />
          {/* </div> */}
          <Link href={'/CaptainLogin'} className="  h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link >
        </div>
        <div clasName="h-3/5">
          <Image
            className="h-full w-full object-cover"
            src="/map.gif"
            alt="Uber Map Animation"
            width={500}
            height={300}
          />
        </div>
        <div className="h-2/5 p-6">
          <CaptainDetails/>
        </div>
        <div
          className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12"
        >
          <RidePopUp/>
        </div>
      </div>
    </CaptainProtectWrapper>
  )
}

export default page
