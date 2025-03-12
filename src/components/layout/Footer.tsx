
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Mail, ExternalLink, Tag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card pt-12 pb-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Hit<span className="text-primary">95</span></h3>
            <p className="text-muted-foreground mb-4">
              Your premier destination for the hottest music, exclusive shows, and the best DJ mixes.
              Contact us at <span className="font-medium">(XXX) XXX-XXXX</span>
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-4">
              <Button size="sm" variant="outline" className="gap-2 w-full">
                <Tag className="h-4 w-4" />
                <a 
                  href="https://mynamebrand.com/name/Hit95.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left"
                >
                  This Domain Is For Sale
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Shows</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Playlists</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Schedule</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">DJs</a></li>
              <li>
                <a 
                  href="https://mynamebrand.com/name/Hit95.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition"
                >
                  This Domain is For Sale
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Terms of Service</a></li>
            </ul>
            <div className="mt-4">
              <Button size="sm" variant="secondary" className="gap-2 w-full">
                <ExternalLink className="h-4 w-4" />
                <a 
                  href="https://mynamebrand.com/name/Hit95.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left"
                >
                  Buy Hit95.com Now
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Subscribe to Newsletter</h4>
            <p className="text-muted-foreground mb-4">Get updates on new shows, playlists, and events.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-secondary" disabled />
              <Button disabled>
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <div className="mt-4 p-3 border border-accent/50 rounded-md bg-background/50">
              <p className="text-sm text-accent">
                <strong>Domain for Sale:</strong> Interested in Hit95.com? 
                <a 
                  href="https://mynamebrand.com/name/Hit95.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold underline ml-1 hover:text-primary"
                >
                  Click here for details
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-border text-sm text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} Hit95. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
