"use client";
import React from "react";
import UserProtectWrapper from "@/app/UserProtectWrapper";

const Home = () => {
  return (
    <UserProtectWrapper>
      <div>Welcome to the Home Page</div>
    </UserProtectWrapper>
  );
};

export default Home;
