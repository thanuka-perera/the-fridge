'use client'
import { FC, useEffect, useState } from 'react'

export const Greeting: FC = () => {
  const [greeting, setGreeting] = useState('Good Morning');

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <div className="flex flex-col text-center items-center justify-center space-y-3 w-lg">
      <h1 className="text-4xl font-bold text-[#003A59]">
        {greeting}, Johny!
      </h1>
      <div className="text-lg flex items-center gap-2">
        <span>🌤</span>
        <p className="text-gray-500">
          It&apos;s better to go shopping before this Friday
        </p>
      </div>
    </div>
  );
};
