"use client"

import React from "react";

const RotatingCirclesPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      {/* Bewegende Kreise */}
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full animate-float opacity-70"></div>
      <div className="absolute w-52 h-52 bg-blue-400 rounded-full animate-float-reverse opacity-70"></div>
      <div className="absolute w-32 h-32 bg-yellow-400 rounded-full animate-float-slower opacity-70"></div>
      {/* Text */}
      <h1 className="absolute inset-0 flex justify-center items-center z-10 text-white text-3xl font-bold drop-shadow-lg">
        Floating Circles
      </h1>
    </div>
  );
};

export default RotatingCirclesPage;
