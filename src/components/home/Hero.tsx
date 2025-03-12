
import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Radio, Tag, Link, ExternalLink } from "lucide-react";
import CountdownTimer from "../common/CountdownTimer";

const Hero = () => {
  // Set the target date to Friday at 2pm EST (convert to user's local time)
  const targetDate = new Date();
  // Find the next Friday
  targetDate.setDate(targetDate.getDate() + (5 + 7 - targetDate.getDay()) % 7);
  // Set time to 2pm EST (which is 14:00 in 24-hour format)
  // EST is UTC-5, so we're setting to 19:00 UTC
  targetDate.setHours(19, 0, 0, 0);

  return (
    <div className="relative min-h-[60vh] flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-4 inline-block">
            <a 
              href="https://mynamebrand.com/name/Hit95.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent/80 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              This domain is for sale
            </a>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The Hottest Beats
            </span>
            <br />All Day, Every Day
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Stream the best music, live shows, and exclusive DJ mixes on Hit95.
            Contact us at <span className="font-medium">(XXX) XXX-XXXX</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="gap-2">
              <Play className="h-5 w-5" />
              Listen Live
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Radio className="h-5 w-5" />
              Explore Stations
            </Button>
            <Button size="lg" variant="secondary" className="gap-2">
              <Tag className="h-5 w-5" />
              <a 
                href="https://mynamebrand.com/name/Hit95.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left"
              >
                Domain For Sale
              </a>
            </Button>
          </div>
          
          <div className="w-full max-w-md">
            <div className="bg-card/80 backdrop-blur-sm rounded-md p-3 border border-accent/30">
              <div className="text-sm font-medium mb-2 flex items-center justify-center">
                <span className="inline-block mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span className="text-accent font-bold">Limited Offer: $888</span> - Expires in:
              </div>
              <CountdownTimer targetDate={targetDate} />
              <div className="mt-3 flex justify-center">
                <Button size="sm" variant="outline" className="gap-2 w-full">
                  <ExternalLink className="h-4 w-4" />
                  <a 
                    href="https://mynamebrand.com/name/Hit95.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center"
                  >
                    Get This Domain
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
