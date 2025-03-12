
import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hit<span className="text-white">95</span>
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="text-foreground hover:text-primary transition">
            Home
          </Link>
          <Link to="/shows" className="text-muted-foreground hover:text-primary transition">
            Shows
          </Link>
          <Link to="/playlists" className="text-muted-foreground hover:text-primary transition">
            Playlists
          </Link>
          <Link to="/schedule" className="text-muted-foreground hover:text-primary transition">
            Schedule
          </Link>
          <Link to="/djs" className="text-muted-foreground hover:text-primary transition">
            DJs
          </Link>
          <a 
            href="https://hit95.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent font-medium hover:text-primary transition"
          >
            For Sale
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="secondary" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm" className="hidden md:flex">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
