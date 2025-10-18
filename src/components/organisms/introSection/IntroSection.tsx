"use client";

import { FC, useEffect, useState } from "react";
import { getGreeting } from "@/util";

export const IntroSection: FC = () => {
  const [greeting, setGreeting] = useState("Good Morning");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  if (!greeting) return null;

  return (
    <div className="flex flex-col items-center justify-center space-y-3 w-full max-w-2xl text-center">
      <h1 className="text-3xl sm-text-4xl lg:text-4xl font-bold text-[#003A59] w-full">
        {greeting}, Jhony!
      </h1>

      <div className="flex items-center gap-3 justify-center text-gray-600 text-base sm:text-lg">
        <span
          className="text-xl"
          style={{
            fontFamily:
              "'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji','Twemoji Mozilla',sans-serif",
          }}
        >
          🌤
        </span>

        <p className="text-gray-500 max-w-sm">
          It&apos;s better to go shopping before this Friday
        </p>
      </div>
    </div>
  );
};
