"use client";

import { useState, type ReactNode } from "react";

type InteractiveCardProps = {
  children: ReactNode;
};

export default function InteractiveCard({ children }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded-lg transition-shadow duration-200 ${
        isHovered ? "bg-neutral-200 shadow-2xl" : "bg-white shadow-lg"
      }`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
    {/* // <div className="rounded-lg bg-white shadow-lg hover:bg-neutral-200
    // hover:shadow-2xl"> */}
      {children}
    </div>
  );
}
