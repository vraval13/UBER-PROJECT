"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useContext } from "react";
import { CaptainDataContext } from '@/app/contexts/CaptainContext';

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});


  const { captain, setCaptain } = useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    // setCaptainData({
    //   email: email,
    //   password: password
    // });
    const captain = {
      email: email,
      password: password
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/captains/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(captain),
      });

      if (response.ok) {
        const data = await response.json();
        setCaptain(data.user);
        localStorage.setItem("token", data.token);
        window.location.href = "/CaptainHome"; // Redirect to home page

        // Reset form fields

        setEmail('');
        setPassword('');
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData.message || errorData);
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <div className="w-20 mb-3">
          <Image
            src="/uber-driver.svg" // Ensure this path is correct and the image is in the `public` folder
            alt="Uber Logo"
            width={64} // Adjusted dimensions for better display
            height={64}
          />
        </div>
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email' placeholder='email@example.com' />
          <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password' placeholder='password' />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'
          >Login</button>
        </form>
        <p className='text-center'>Join a fleet? <Link href={'/CaptainSignup'} className='text-blue-600'>Register as a Captain</Link></p>
      </div>

      <div>
        <Link
          href={'/UserLogin'}
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default page
