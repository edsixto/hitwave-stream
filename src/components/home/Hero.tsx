
import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Radio } from "lucide-react";

const Hero = () => {
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
              href="https://hit95.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent/80 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              This domain is for sale at Hit95.com
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
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              <Play className="h-5 w-5" />
              Listen Live
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Radio className="h-5 w-5" />
              Explore Stations
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
