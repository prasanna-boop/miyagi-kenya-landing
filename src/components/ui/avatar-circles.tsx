import React from "react";
import { cn } from "@/lib/utils";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

export const AvatarCircles = ({
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-3 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border-2 border-white object-cover shadow-md ring-1 ring-black/10 transform hover:scale-110 hover:z-20 transition-all"
          src={url.imageUrl}
          width={44}
          height={44}
          alt={`Learner ${index + 1}`}
        />
      ))}
    </div>
  );
};
