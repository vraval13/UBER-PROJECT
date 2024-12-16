import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Uber Logo */}
      <div className="mb-6">
        <Image
          src="/logo.png" // Make sure the logo image exists in the public folder
          alt="Uber Logo"
          width={150}
          height={50}
        />
      </div>

      {/* Loading Spinner */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

      {/* Loading Text */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-medium text-gray-800">Finding your ride...</h2>
        <p className="text-sm text-gray-500">Please wait while we connect you to the nearest driver.</p>
      </div>
    </div>
  );
};

export default Loading;
