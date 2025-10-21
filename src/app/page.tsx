"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const dotNumbers = ".".repeat((count % 3) + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-dvh bg-gray-950 text-white">
      <h1 className="text-center text-2xl">Building{dotNumbers}</h1>
    </div>
  );
}
