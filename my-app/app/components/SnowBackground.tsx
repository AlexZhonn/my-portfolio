"use client";

import dynamic from "next/dynamic";

const SnowText = dynamic(() => import("./SnowText"), { ssr: false });

export default function SnowBackground() {
  return (
    <div className="fixed inset-0 z-0 w-screen h-screen">
      <SnowText />
    </div>
  );
}
