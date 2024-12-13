"use client";
import Start from "@/app/Start/page";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/home"); // Redirect to the home page if authenticated
    }
  }, []);

  return (
    <>
      <Start />
    </>
  );
}
