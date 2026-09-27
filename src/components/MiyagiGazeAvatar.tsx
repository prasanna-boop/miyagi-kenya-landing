"use client";

import React, { useEffect, useRef } from "react";

interface MiyagiGazeAvatarProps {
  size?: number;
  className?: string;
}

export function MiyagiGazeAvatar({ size = 260, className = "" }: MiyagiGazeAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyesRef = useRef<SVGGElement>(null);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId: number | null = null;

    function onPointerMove(e: MouseEvent | PointerEvent) {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance > 0) {
        const angle = Math.atan2(deltaY, deltaX);
        const intensity = Math.min(1, distance / 400);
        targetX = Math.cos(angle) * (8.5 * intensity);
        targetY = Math.sin(angle) * (6.0 * intensity);
      } else {
        targetX = 0;
        targetY = 0;
      }

      if (!animId) {
        animId = requestAnimationFrame(animateEyes);
      }
    }

    function animateEyes() {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;

      if (eyesRef.current) {
        eyesRef.current.style.transform = `translate(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px)`;
      }

      if (Math.abs(targetX - currentX) > 0.02 || Math.abs(targetY - currentY) > 0.02) {
        animId = requestAnimationFrame(animateEyes);
      } else {
        animId = null;
      }
    }

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("pointermove", onPointerMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: size, height: size }}
      className={`relative select-none shrink-0 flex items-center justify-center ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style={{ width: size, height: size }}
        className="block drop-shadow-[0_20px_50px_rgba(255,107,0,0.35)]"
      >
        {/* Miyagi Orange Mascot Body */}
        <path
          fill="#FF7A00"
          d="M37.53 16.63Q44.84 11.14 53.06 14.98L71.31 23.51Q79.53 27.36 80.45 36.7L82.48 57.43Q83.4 66.78 76.09 72.28L59.87 84.47Q52.57 89.97 44.34 86.13L26.1 77.6Q17.87 73.75 16.96 64.41L14.93 43.68Q14.01 34.33 21.32 28.83L37.53 16.63Z"
        />
        {/* Tracking Eyes */}
        <g ref={eyesRef} fill="#000000" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <path d="M40.62 50.7C40.01 60.54 40.01 60.54 36.03 60.29C32.04 60.04 32.04 60.04 32.66 50.2C33.27 40.36 33.27 40.36 37.25 40.6C41.24 40.85 41.24 40.85 40.62 50.7Z" />
          <path d="M60.95 50.76C59.86 60.72 59.86 60.72 55.73 60.26C51.59 59.81 51.59 59.81 52.69 49.85C53.79 39.89 53.79 39.89 57.92 40.34C62.05 40.8 62.05 40.8 60.95 50.76Z" />
        </g>
      </svg>
    </div>
  );
}

export default MiyagiGazeAvatar;
