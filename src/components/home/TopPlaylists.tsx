
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const playlists = [
  {
    id: 1,
    title: "Top 40 Hits",
    description: "The most popular tracks right now",
    tracks: 40,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
  },
  {
    id: 2,
    title: "EDM Essentials",
    description: "Best electronic dance music",
    tracks: 32,
    image: "https://images.unsplash.com/photo-1571266028253-6c7f1cac8c1b?q=80&w=2070",
  },
  {
    id: 3,
    title: "Chill Vibes",
    description: "Relaxing tracks for your downtime",
    tracks: 25,
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070",
  },
];

const TopPlaylists = () => {
  return (
    <div className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Top Playlists</h2>
          <Button variant="link" className="text-primary">Browse All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {playlists.map((playlist) => (
            <Card key={playlist.id} className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={playlist.image} 
                  alt={playlist.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-bold text-xl text-white mb-1">{playlist.title}</h3>
                    <p className="text-gray-300 text-sm">{playlist.tracks} tracks</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm mb-3">{playlist.description}</p>
                <Button className="w-full" variant="secondary">Play Playlist</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPlaylists;
