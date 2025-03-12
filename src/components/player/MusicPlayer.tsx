
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  Radio 
} from "lucide-react";
import AudioVisualizer from "./AudioVisualizer";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 w-full md:w-1/3">
            <div className="relative h-12 w-12 rounded overflow-hidden bg-secondary flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <Radio className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold truncate">Now Playing</span>
              <span className="text-sm text-muted-foreground truncate">
                {isPlaying ? "Top Hits Radio Mix - DJ Astro" : "Hit95 Radio - Click play to start"}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col items-center w-full md:w-1/3 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-muted-foreground hover:text-foreground"
              >
                <SkipBack className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="default" 
                size="icon" 
                className="h-10 w-10 rounded-full"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5 ml-0.5" />
                )}
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="text-muted-foreground hover:text-foreground"
              >
                <SkipForward className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="w-full mt-2 flex justify-center">
              {isPlaying ? (
                <AudioVisualizer />
              ) : (
                <div className="h-4"></div>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-2 w-full md:w-1/3 justify-end mt-4 md:mt-0">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider
              value={volume}
              min={0}
              max={100}
              step={1}
              className="w-24"
              onValueChange={setVolume}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
