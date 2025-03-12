
import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      if (now >= targetDate) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      // Calculate the time differences
      const days = differenceInDays(targetDate, now);
      const hours = differenceInHours(targetDate, now) % 24;
      const minutes = differenceInMinutes(targetDate, now) % 60;
      const seconds = differenceInSeconds(targetDate, now) % 60;

      return {
        days,
        hours,
        minutes,
        seconds
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mt-2 flex justify-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-md p-2 w-full max-w-md">
        <div className="text-xs text-white/80 mb-1 flex items-center justify-center">
          <span className="inline-block mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-clock">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </span>
          Offer expires in:
        </div>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="bg-white/20 rounded px-2 py-1.5">
            <div className="text-xl font-bold text-white">{timeLeft.days}</div>
            <div className="text-xs text-white/80">days</div>
          </div>
          <div className="bg-white/20 rounded px-2 py-1.5">
            <div className="text-xl font-bold text-white">{timeLeft.hours}</div>
            <div className="text-xs text-white/80">hours</div>
          </div>
          <div className="bg-white/20 rounded px-2 py-1.5">
            <div className="text-xl font-bold text-white">{timeLeft.minutes}</div>
            <div className="text-xs text-white/80">mins</div>
          </div>
          <div className="bg-white/20 rounded px-2 py-1.5">
            <div className="text-xl font-bold text-white">{timeLeft.seconds}</div>
            <div className="text-xs text-white/80">secs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
