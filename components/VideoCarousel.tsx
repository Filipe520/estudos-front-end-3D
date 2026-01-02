"use client";

import { useState, useEffect } from "react";

interface PropVideos {
  videos: string[];
}

export default function VideoCarousel({ videos }: PropVideos) {
  const [rotation, setRotation] = useState(0);
  const angleStep = 360 / videos.length;
  const radius = 500; // distância do centro

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev - angleStep);
    }, 8000); // gira a cada 3s
    return () => clearInterval(interval);
  }, [angleStep]);

  return (
    <div
      className="relative w-[600px] h-[400px] mx-auto"
      style={{ perspective: "1000px" }}
    >
      <div
        className="absolute inset-0 transition-transform duration-1000"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotation}deg)`,
        }}
      >
        {videos.map((src, index) => {
          const angle = angleStep * index;
          return (
            <video
              key={index}
              src={src}
              autoPlay
              playsInline
              muted
              loop
              className="absolute w-[70%] h-[70%] object-cover rounded-2xl shadow-lg"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
