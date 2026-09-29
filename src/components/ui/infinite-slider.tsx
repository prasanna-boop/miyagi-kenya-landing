"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface InfiniteSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  reverse?: boolean;
}

export function InfiniteSlider({
  children,
  gap = 20,
  duration = 75,
  reverse = false,
  className,
  ...props
}: InfiniteSliderProps) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]",
        className
      )}
      {...props}
    >
      <div
        style={{
          gap: `${gap}px`,
          paddingRight: `${gap}px`,
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
        className="flex shrink-0 animate-infinite-slide-horizontal items-center group-hover:[animation-play-state:paused]"
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        style={{
          gap: `${gap}px`,
          paddingRight: `${gap}px`,
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
        className="flex shrink-0 animate-infinite-slide-horizontal items-center group-hover:[animation-play-state:paused]"
      >
        {children}
      </div>
    </div>
  );
}
