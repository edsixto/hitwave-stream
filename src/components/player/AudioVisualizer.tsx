
import React from "react";

const AudioVisualizer = () => {
  // Create an array with 12 items for the visualizer bars
  const bars = Array.from({ length: 12 }, (_, i) => i);
  
  return (
    <div className="audio-visualizer">
      {bars.map((i) => (
        <span 
          key={i} 
          style={{ '--delay': i } as React.CSSProperties}
          className="transform transition-all duration-300"
        />
      ))}
    </div>
  );
};

export default AudioVisualizer;
