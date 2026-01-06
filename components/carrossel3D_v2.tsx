"use client";

import { useEffect, useRef, useState } from "react";
import "./carousel3D.css";

export default function VideoCarousel3D() {
  const videos = ["/v1.mp4", "/v2.mp4", "/v3.mp4"];
  const [rotation, setRotation] = useState(0);
  const angleStep = 360 / videos.length;
  const radius = 350;

  const refCarousel = useRef<HTMLDivElement>(null);
  const refVideos = useRef<HTMLDivElement>(null);
  const rotationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const carouselVideoRefs = useRef<HTMLVideoElement[]>([]);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const currentIndex = Math.abs(rotation / angleStep) % videos.length;

  // gira o carrossel automaticamente
  useEffect(() => {
    rotationIntervalRef.current = setInterval(() => {
      setRotation((prev) => prev - angleStep);
    }, 2000);

    return () => {
      if (rotationIntervalRef.current)
        clearInterval(rotationIntervalRef.current);
    };
  }, [angleStep]);

  // observar visibilidade
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // quando a seção de vídeos está visível
          if (entry.target === refVideos.current && entry.isIntersecting) {
            if (rotationIntervalRef.current) {
              clearInterval(rotationIntervalRef.current);
              rotationIntervalRef.current = null;
            }
            carouselVideoRefs.current.forEach((video) => video?.pause());
            videoRefs.current.forEach((video) => video?.play().catch(() => {}));
          }

          // quando o carrossel está visível
          if (entry.target === refCarousel.current) {
            const videosVisible = entries.some(
              (e) => e.target === refVideos.current && e.isIntersecting
            );
            if (entry.isIntersecting && !videosVisible) {
              // só roda se o carrossel está visível E a seção de vídeos NÃO está visível
              if (!rotationIntervalRef.current) {
                rotationIntervalRef.current = setInterval(() => {
                  setRotation((prev) => prev - angleStep);
                }, 2000);
              }
              carouselVideoRefs.current.forEach((video) =>
                video?.play().catch(() => {})
              );
            } else {
              // pausa vídeos do carrossel e para a rotação
              carouselVideoRefs.current.forEach((video) => video?.pause());
              if (rotationIntervalRef.current) {
                clearInterval(rotationIntervalRef.current);
                rotationIntervalRef.current = null;
              }
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (refVideos.current) observer.observe(refVideos.current);
    if (refCarousel.current) observer.observe(refCarousel.current);

    return () => observer.disconnect();
  }, [angleStep]);

  return (
    <div className="bg mt-20">
      {/* Carrossel 3D */}
      <div
        className="relative w-full max-w-[800px] h-[400px] mx-auto overflow-hidden"
        style={{ perspective: "1200px" }}
        ref={refCarousel}
      >
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {videos.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex items-center justify-center"
              style={{
                transform: `scale(${index === currentIndex ? 1.4 : 0.8})`,
                opacity: index === currentIndex ? 1 : 0.5,
                transition: "all 0.8s ease",
              }}
            >
              <video
                src={src}
                autoPlay
                playsInline
                muted
                loop
                className="w-[70%] h-[70%] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Conteúdo no meio */}
      <div className="bg-gray-500 h-[1200px]">Conteúdo no meio</div>

      {/* Seção de vídeos */}
      <div
        className="w-dvw h-dvh bg-black flex gap-10 justify-center items-center"
        ref={refVideos}
      >
        {/* {videos.map((src, i) => (
          <video
            key={i}
            ref={(el) => (videoRefs.current[i] = el!)}
            src={src}
            controls
            className="w-[300px] h-[200px] rounded-lg shadow-lg"
          />
        ))} */}
      </div>
    </div>
  );
}
