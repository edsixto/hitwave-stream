
import React from "react";
import Navbar from "@/components/layout/Navbar";
import MusicPlayer from "@/components/player/MusicPlayer";
import Hero from "@/components/home/Hero";
import FeaturedShows from "@/components/home/FeaturedShows";
import TopPlaylists from "@/components/home/TopPlaylists";
import PopularDjs from "@/components/home/PopularDjs";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <FeaturedShows />
        <TopPlaylists />
        <PopularDjs />
      </main>
      <Footer />
      <div className="pb-24"></div> {/* Space for the player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
