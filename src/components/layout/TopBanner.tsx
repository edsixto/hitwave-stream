
import React from "react";

const TopBanner = () => {
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
      </div>
    </div>
  );
};

export default TopBanner;
