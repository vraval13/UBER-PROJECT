"use client";

import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router
import axios from "axios";
import { CaptainDataContext } from "./contexts/CaptainContext";

const CaptainProtectWrapper = ({ children }) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const router = useRouter();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.push("/CaptainLogin");
      return;
    }

    const validateCaptain = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/captains/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error validating captain:", error);
        localStorage.removeItem("token");
        router.push("/CaptainLogin");
      }
    };

    validateCaptain();
  }, [token, router, setCaptain]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
