
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
    <div className="grid grid-cols-4 gap-2 text-center">
      <div className="bg-accent/10 rounded px-2 py-1.5">
        <div className="text-xl font-bold text-accent">{timeLeft.days}</div>
        <div className="text-xs text-muted-foreground">days</div>
      </div>
      <div className="bg-accent/10 rounded px-2 py-1.5">
        <div className="text-xl font-bold text-accent">{timeLeft.hours}</div>
        <div className="text-xs text-muted-foreground">hours</div>
      </div>
      <div className="bg-accent/10 rounded px-2 py-1.5">
        <div className="text-xl font-bold text-accent">{timeLeft.minutes}</div>
        <div className="text-xs text-muted-foreground">mins</div>
      </div>
      <div className="bg-accent/10 rounded px-2 py-1.5">
        <div className="text-xl font-bold text-accent">{timeLeft.seconds}</div>
        <div className="text-xs text-muted-foreground">secs</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
