"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const CaptainLogout = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/CaptainLogin");
      return;
    }

    localStorage.removeItem("token");
    router.push("/CaptainLogin");
  }, []);

  return <div>Logging you out...</div>;
};

export default CaptainLogout;
