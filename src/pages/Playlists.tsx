
import React from "react";
import Navbar from "@/components/layout/Navbar";
import MusicPlayer from "@/components/player/MusicPlayer";
import Footer from "@/components/layout/Footer";

const Playlists = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Playlists</h1>
          <p className="text-muted-foreground text-lg">
            Browse our curated playlists. Coming soon!
          </p>
        </div>
      </main>
      <Footer />
      <div className="pb-24"></div>
      <MusicPlayer />
    </div>
  );
};

export default Playlists;
