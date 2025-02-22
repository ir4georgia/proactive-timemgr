'use client';

import { useState, useEffect } from 'react';

export default function DateTimeComp() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    // Correct the time on the client after hydration
    // https://nextjs.org/docs/messages/react-hydration-error
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-base font-bold italic">
      {dateTime.toLocaleString()}
    </div>
  );
}