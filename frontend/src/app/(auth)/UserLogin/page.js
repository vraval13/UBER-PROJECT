"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserDataContext } from "../contexts/UserContext";

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const { user, setUser } = useContext(UserDataContext);


  const submitHandler = async (e) => {
    e.preventDefault();
    // setUserData({
    //   email:email,
    //   password:password
    // });
    const userData = {
      email: email,
      password: password
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        localStorage.setItem("token", data.token);
        window.location.href = "/home"; // Redirect to home page

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
        <div className="w-16 mb-10">
          <Image
            src="/logo.png" // Ensure this path is correct and the image is in the `public` folder
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
        <p className='text-center'>New here? <Link href={'/UserSignup'} className='text-blue-600'>Create new Account</Link></p>
      </div>

      <div>
        <Link
          href={'/CaptainLogin'}
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default page
