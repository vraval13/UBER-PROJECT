import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
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
      <form>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          required type='email' placeholder='email@example.com' />
        <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
        <input
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          required type='password' placeholder='password' />
        <button
          className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'
        >Login</button>
      </form>
      <p className='text-center'>New here? <Link href={'/UserSignup'} className='text-blue-600'>Create new Account</Link></p>
      </div>

      <div>
        <button
        className='bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as Captain</button>
      </div>
    </div>
  )
}

export default page
