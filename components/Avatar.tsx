"use client";

import { useState } from "react";

const PHOTO_SRC = "/images/sasha.png";

type AvatarProps = {
  size: number;
  className?: string;
  rounded?: string;
  initialsClassName?: string;
};

export default function Avatar({
  size,
  className = "",
  rounded = "rounded-full",
  initialsClassName = "",
}: AvatarProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={`relative inline-flex items-center justify-center overflow-hidden bg-accent ${rounded} ${className}`}
      style={{ width: size, height: size }}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={PHOTO_SRC}
          alt="Aleksandr Borisov"
          width={size}
          height={size}
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className={`font-display font-medium text-white ${initialsClassName}`}
        >
          AB
        </span>
      )}
    </span>
  );
}
