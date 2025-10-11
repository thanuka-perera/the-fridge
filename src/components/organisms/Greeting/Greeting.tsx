'use client'

import { FC, useEffect, useState } from 'react'
import { getGreeting } from '@/util';

export const Greeting: FC = () => {

  const [greeting, setGreeting] = useState('Good Morning');

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <div className="flex flex-col text-center items-center justify-center space-y-3 w-lg">

      <h1 className="text-4xl font-bold text-[#003A59]">
        {greeting}, Jhony!
      </h1>

      <div className="text-lg flex items-center gap-2">

        <span style={{ fontFamily: "'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji','Twemoji Mozilla',sans-serif" }}>
          🌤
        </span>

        <p className="text-gray-500">
          It&apos;s better to go shopping before this Friday
        </p>

      </div>

    </div>
  );
};
