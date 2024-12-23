"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const UserLogout = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/UserLogin");
      return;
    }

    localStorage.removeItem("token");
    router.push("/UserLogin");
  }, []);

  return <div>Logging you out...</div>;
};

export default UserLogout;
