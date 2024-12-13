'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserDataContext } from "@/app/contexts/UserContext"


const UserProtectWrapper = ({ children }) => 
{
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const router = useRouter();
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.push('/UserLogin');
      return;
    }

    const fetchUserProfile = async () => 
    {
      try 
      {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/profile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          throw new Error('Failed to fetch user profile');
        }
      } catch (err) {
        console.error(err);
        localStorage.removeItem('token');
        router.push('/userLogin');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [token, router, setUser]);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>Loading...</div>
      </div>
    );
  }
  

  return <>{children}</>;
};

export default UserProtectWrapper;
