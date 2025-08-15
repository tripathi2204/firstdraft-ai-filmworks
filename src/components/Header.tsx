import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Film } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: "Shooting Schedule", href: "/services/shooting-schedule" },
    { name: "Script Breakdown", href: "/services/script-breakdown" },
    { name: "Film Budgeting", href: "/services/film-budgeting" },
    { name: "AI Pitch Deck", href: "/services/ai-pitch-deck" },
    { name: "Film Business Plan", href: "/services/film-business-plan" },
    { name: "AI Film Trailer", href: "/services/ai-film-trailer" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Film className="h-6 w-6 text-accent" />
            <span className="font-nav font-bold text-xl text-foreground group-hover:text-accent transition-colors">
              First Draft Filmworks
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center space-x-1 font-nav text-foreground hover:text-accent transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Services Dropdown */}
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-card z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-2 text-sm font-nav text-card-foreground hover:bg-muted hover:text-accent transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`font-nav transition-colors ${
                isActive("/about") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              About Me
            </Link>

            <a
              href="#testimonials"
              className="font-nav transition-colors text-foreground hover:text-accent"
            >
              Testimonials
            </a>

            <Link
              to="/blog"
              className={`font-nav transition-colors ${
                isActive("/blog") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Blog
            </Link>

            <Button variant="nav-cta" size="sm" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-nav font-semibold text-muted-foreground">
                  Services
                </div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-6 py-2 text-sm font-nav text-card-foreground hover:bg-muted hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/about"
                className="block px-3 py-2 text-sm font-nav text-card-foreground hover:bg-muted hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>

              <a
                href="#testimonials"
                className="block px-3 py-2 text-sm font-nav text-card-foreground hover:bg-muted hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>

              <Link
                to="/blog"
                className="block px-3 py-2 text-sm font-nav text-card-foreground hover:bg-muted hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>

              <div className="px-3 py-2">
                <Button variant="nav-cta" size="sm" className="w-full" asChild>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;