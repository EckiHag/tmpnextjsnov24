"use client"

import Link from "next/link";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/background.jpg')" }}>
      <h1 className="text-3xl md:text-5xl font-bold text-shadow-lg">
        Willkommen auf der Startseite
      </h1>
      <div className="flex gap-5 mt-8">
        <Link
          href="/wuerfel"
          className="px-6 py-3 text-lg font-medium bg-black bg-opacity-70 border-2 border-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-white hover:text-black"
        >
          Würfel
        </Link>
        <Link
          href="/matrix"
          className="px-6 py-3 text-lg font-medium bg-black bg-opacity-70 border-2 border-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-white hover:text-black"
        >
          Matrix
        </Link>
        <Link
          href="/test"
          className="px-6 py-3 text-lg font-medium bg-black bg-opacity-70 border-2 border-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-white hover:text-black"
        >
          Test
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
