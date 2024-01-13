'use client';
import React, { useEffect, useState } from 'react';

interface ExtendedCSSProperties extends React.CSSProperties {
  '--value'?: number;
}

let timerId: NodeJS.Timeout;

function CountdownTimer() {
  const [count, setCount] = useState(60);

  useEffect(() => {
    timerId = setInterval(() => {
      if (count === 0) {
        setCount(60); // Reset to 60 when count reaches 0
      } else {
        setCount((c) => c - 1);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [count]);

  const customStyle: ExtendedCSSProperties = { '--value': count };

  return (
    <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
      <div className="flex flex-col p-1.5 bg-secondary rounded-lg text-secondary-content">
        <span className="countdown text-3xl">
          <span style={customStyle}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-1.5 bg-secondary rounded-lg text-secondary-content">
        <span className="countdown text-3xl">
          <span style={customStyle}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-1.5 bg-secondary rounded-lg text-secondary-content">
        <span className="countdown text-3xl">
          <span style={customStyle}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-1.5 bg-secondary rounded-lg text-secondary-content">
        <span className="countdown text-3xl">
          <span style={customStyle}></span>
        </span>
        sec
      </div>
    </div>
  );
}

export default CountdownTimer;
