
import React from "react";
import CountdownTimer from "../common/CountdownTimer";

const TopBanner = () => {
  // Set the target date to Friday at 2pm EST (convert to user's local time)
  const targetDate = new Date();
  // Find the next Friday
  targetDate.setDate(targetDate.getDate() + (5 + 7 - targetDate.getDay()) % 7);
  // Set time to 2pm EST (which is 14:00 in 24-hour format)
  // EST is UTC-5, so we're setting to 19:00 UTC
  targetDate.setHours(19, 0, 0, 0);

  return (
    <div className="bg-gradient-to-r from-primary to-accent py-2 text-white text-center relative z-[55]">
      <div className="container mx-auto px-4">
        <p className="font-medium">
          This temporary website showcases a potential design. The domain Hit95.com is available for sale.{" "}
          <span className="font-bold">Limited offer: $888 until Friday 2pm EST.</span>{" "}
          <a 
            href="https://mynamebrand.com/name/Hit95.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold hover:text-white/90 transition-colors"
          >
            Learn more
          </a>
        </p>
        <CountdownTimer targetDate={targetDate} />
      </div>
    </div>
  );
};

export default TopBanner;
