import React from "react";
import { Link } from "react-router-dom";
import { Film, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-film-dark border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Film className="h-6 w-6 text-accent" />
              <span className="font-nav font-bold text-xl text-foreground">
                First Draft Filmworks
              </span>
            </div>
            <p className="text-muted-foreground">
              To get in touch please mail me at{" "}
              <a 
                href="mailto:firstdraftfilmworks@gmail.com"
                className="hover:text-accent transition-colors"
              >
                firstdraftfilmworks@gmail.com
              </a>
            </p>
          </div>

          {/* Legals */}
          <div className="space-y-4">
            <h3 className="font-nav font-semibold text-lg text-foreground">
              Legals
            </h3>
            <div className="space-y-2">
              <a 
                href="https://firstdraftfilmworks.com/terms/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="https://firstdraftfilmworks.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-nav font-semibold text-lg text-foreground">
              Services
            </h3>
            <div className="space-y-2">
              <Link 
                to="/services/shooting-schedule" 
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Shooting Schedule
              </Link>
              <Link 
                to="/services/script-breakdown" 
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Script Breakdown
              </Link>
              <Link 
                to="/services/film-budgeting" 
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Film Budgeting
              </Link>
              <Link 
                to="/services/ai-pitch-deck" 
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                AI Pitch Deck
              </Link>
              <Link 
                to="/services/film-business-plan" 
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Film Business Plan
              </Link>
              <Link 
                to="/services/ai-film-trailer" 
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                AI Film Trailer
              </Link>
            </div>
          </div>

          {/* Blog */}
          <div className="space-y-4">
            <h3 className="font-nav font-semibold text-lg text-foreground">
              Blog
            </h3>
            <a 
              href="https://firstdraftfilmworks.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground hover:text-accent transition-colors"
            >
              Latest Articles
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} First Draft Filmworks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;