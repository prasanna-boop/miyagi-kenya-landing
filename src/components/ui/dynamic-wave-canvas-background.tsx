"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HeroWaveProps {
  className?: string;
}

export const HeroWave: React.FC<HeroWaveProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number, height: number, imageData: ImageData, data: Uint8ClampedArray;
    const SCALE = 2;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width = Math.floor(canvas.width / SCALE);
      height = Math.floor(canvas.height / SCALE);
      imageData = ctx.createImageData(width, height);
      data = imageData.data;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const startTime = Date.now();

    const SIN_TABLE = new Float32Array(1024);
    const COS_TABLE = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) {
      const angle = (i / 1024) * Math.PI * 2;
      SIN_TABLE[i] = Math.sin(angle);
      COS_TABLE[i] = Math.cos(angle);
    }

    const fastSin = (x: number) => {
      const index = Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024) & 1023;
      return SIN_TABLE[index];
    };

    const fastCos = (x: number) => {
      const index = Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024) & 1023;
      return COS_TABLE[index];
    };

    let animationFrameId: number;

    const render = () => {
      const time = (Date.now() - startTime) * 0.0006;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const u_x = (2 * x - width) / height;
          const u_y = (2 * y - height) / height;

          let a = 0;
          let d = 0;

          for (let i = 0; i < 4; i++) {
            a += fastCos(i - d + time * 0.5 - a * u_x);
            d += fastSin(i * u_y + a);
          }

          const wave = (fastSin(a) + fastCos(d)) * 0.5;
          // Smooth, luminous light aesthetic in white, soft grey, and gentle pastel orange
          const intensity = 0.85 + 0.15 * wave;
          const baseGrey = 0.94 + 0.04 * fastCos(u_x + u_y + time * 0.2);
          const orangeWarmth = 0.06 * fastSin(a * 1.2 + time * 0.25);
          const greyShift = 0.03 * fastCos(d * 1.5 + time * 0.15);

          // White, soft grey, and subtle light orange RGB composition
          const r = Math.max(0, Math.min(1, baseGrey + orangeWarmth * 1.4 + 0.02)) * intensity;
          const g = Math.max(0, Math.min(1, baseGrey + orangeWarmth * 0.5 - greyShift * 0.5)) * intensity;
          const b = Math.max(0, Math.min(1, baseGrey - orangeWarmth * 1.2 - greyShift)) * intensity;

          const index = (y * width + x) * 4;
          data[index] = r * 255;
          data[index + 1] = g * 255;
          data[index + 2] = b * 255;
          data[index + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      if (SCALE > 1) {
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className={cn("absolute inset-0 w-full h-full", className)} />;
};

export default HeroWave;
