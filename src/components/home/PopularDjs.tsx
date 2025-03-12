
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const djs = [
  {
    id: 1,
    name: "DJ Astro",
    genre: "Electronic / House",
    followers: "245K",
    image: "https://images.unsplash.com/photo-1567361294892-c00904277582?q=80&w=2071",
  },
  {
    id: 2,
    name: "DJ Luna",
    genre: "Hip Hop / R&B",
    followers: "189K",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070",
  },
  {
    id: 3,
    name: "DJ Pulse",
    genre: "EDM / Dubstep",
    followers: "310K",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
  },
  {
    id: 4,
    name: "DJ Nova",
    genre: "Pop / Dance",
    followers: "126K",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070",
  },
];

const PopularDjs = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Popular DJs</h2>
          <Button variant="link" className="text-primary">Meet All DJs</Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {djs.map((dj) => (
            <Card key={dj.id} className="bg-card border-border hover:bg-card/60 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={dj.image} alt={dj.name} />
                  <AvatarFallback>{dj.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg mb-1">{dj.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{dj.genre}</p>
                <p className="text-xs text-primary mb-4">{dj.followers} followers</p>
                <Button variant="outline" size="sm" className="w-full">Follow</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDjs;
