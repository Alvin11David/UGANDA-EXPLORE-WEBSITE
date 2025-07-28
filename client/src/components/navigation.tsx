import { useState, useEffect } from "react";
import "./navigation.css";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MapPin, Menu } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Features", id: "features" },
    { label: "Technology", id: "technology" },
    { label: "Gallery", id: "gallery" },
    { label: "Team", id: "team" },
  ];

  return (
    <nav className="navigation">
      <div className="container">
        <div className="navigation-inner">
          <div className="navigation-logo">
            <div className="navigation-logo-icon">
              <MapPin size={20} />
            </div>
            <span className="navigation-brand">Uganda Explore</span>
          </div>

          {/* Desktop Navigation */}
          <div className="navigation-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="navigation-link"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                    window.location.href = "/app-release.apk";
                  }}
              className="btn btn-primary"
            >
              Download
            </button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="navigation-mobile-toggle">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="mobile-menu-links">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="mobile-menu-link"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("download")}
                  className="btn btn-primary"
                  style={{ marginTop: "1rem" }}
                >
                  Download
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
