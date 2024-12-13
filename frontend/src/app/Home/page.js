import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen pt-8 flex justify-between flex-col w-full"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <div className="w-16 ml-8">
          <Image
            src="/logo.png" // Ensure this path is correct and the image is in the `public` folder
            alt="Uber Logo"
            width={64} // Adjusted dimensions for better display
            height={64}
          />
        </div>
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-2xl font-bold">Get Started with Uber</h2>
          <Link href={'/UserLogin'} className=" flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
