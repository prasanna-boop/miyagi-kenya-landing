"use client";

import React, { MouseEvent, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string;
  duration?: string;
}

export const RippleButton = React.forwardRef<
  HTMLButtonElement,
  RippleButtonProps
>(
  (
    {
      className,
      children,
      rippleColor = "rgba(255, 255, 255, 0.5)",
      duration = "600ms",
      onClick,
      ...props
    },
    ref
  ) => {
    const [buttonRipples, setButtonRipples] = useState<
      Array<{ x: number; y: number; size: number; key: number }>
    >([]);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const newRipple = { x, y, size, key: Date.now() };
      setButtonRipples((prev) => [...prev, newRipple]);

      onClick?.(e);
    };

    useEffect(() => {
      if (buttonRipples.length > 0) {
        const lastRipple = buttonRipples[buttonRipples.length - 1];
        const timeout = setTimeout(() => {
          setButtonRipples((prev) =>
            prev.filter((ripple) => ripple.key !== lastRipple.key)
          );
        }, parseInt(duration));
        return () => clearTimeout(timeout);
      }
    }, [buttonRipples, duration]);

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          "relative cursor-pointer overflow-hidden text-center",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="pointer-events-none absolute inset-0">
          {buttonRipples.map((ripple) => (
            <span
              key={ripple.key}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
                backgroundColor: rippleColor,
                animationDuration: duration,
              }}
              className="absolute animate-rippling rounded-full opacity-30"
            />
          ))}
        </span>
      </button>
    );
  }
);

RippleButton.displayName = "RippleButton";
