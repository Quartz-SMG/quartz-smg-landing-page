import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  isEnglish: boolean;
  toggleLanguage: () => void;
}

const Navigation = ({ isEnglish, toggleLanguage }: NavigationProps) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    fr: {
      home: "Accueil",
      services: "Services",
      contact: "Contact",
      company: "Quartz SMG"
    },
    en: {
      home: "Home",
      services: "Services", 
      contact: "Contact",
      company: "Quartz SMG"
    }
  };

  const t = isEnglish ? content.en : content.fr;

  const navItems = [
    { path: "/", label: t.home },
    { path: "/services", label: t.services },
    { path: "/contact", label: t.contact }
  ];

  return (
    <nav className="glass border-b border-slate-700/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://ixapoibuyumuuhamvost.supabase.co/storage/v1/object/public/public-assets/app-assets/logo/logo-2.png"
              alt="Quartz SMG Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold gradient-text">{t.company}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-slate-300 hover:text-amber-400 transition-colors",
                  location.pathname === item.path && "text-amber-400 font-medium"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {isEnglish ? "FR" : "EN"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-foreground hover:text-primary transition-colors px-2 py-1",
                    location.pathname === item.path && "text-primary font-medium"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 self-start"
              >
                <Globe className="h-4 w-4" />
                {isEnglish ? "FR" : "EN"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;