
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Clock } from "lucide-react";

const shows = [
  {
    id: 1,
    title: "Morning Buzz",
    host: "DJ Sarah",
    time: "6:00 - 10:00 AM",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070",
    isLive: true,
  },
  {
    id: 2,
    title: "Lunch Break Beats",
    host: "DJ Marcus",
    time: "12:00 - 2:00 PM",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070",
    isLive: false,
  },
  {
    id: 3,
    title: "Drive Time Mix",
    host: "DJ Raven",
    time: "5:00 - 8:00 PM",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1974",
    isLive: false,
  },
  {
    id: 4,
    title: "Late Night Vibes",
    host: "DJ Alex",
    time: "10:00 PM - 1:00 AM",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070",
    isLive: false,
  },
];

const FeaturedShows = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Shows</h2>
          <Button variant="link" className="text-primary">View All Shows</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shows.map((show) => (
            <Card key={show.id} className="bg-card border-border overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={show.image} 
                  alt={show.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                {show.isLive && (
                  <Badge 
                    variant="default" 
                    className="absolute top-2 right-2 gap-1 bg-primary text-primary-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse-opacity"></span>
                    LIVE NOW
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">{show.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">Hosted by {show.host}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {show.time}
                  </div>
                  <Button size="sm" variant="secondary" className="h-8 w-8 rounded-full p-0">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedShows;
