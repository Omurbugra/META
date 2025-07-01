
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
  ];

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isHome && !isScrolled 
      ? "bg-transparent" 
      : "bg-black/95 backdrop-blur-sm border-b border-gray-800"
  }`;

  const linkClasses = (path: string) => `
    relative px-4 py-2 text-sm font-medium transition-colors duration-200 tracking-wide
    ${location.pathname === path 
      ? "text-white" 
      : "text-gray-300 hover:text-white"
    }
    after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white 
    after:left-0 after:bottom-0 after:scale-x-0 after:origin-right after:transition-transform 
    after:duration-300 hover:after:scale-x-100 hover:after:origin-left
    ${location.pathname === path ? "after:scale-x-100" : ""}
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-widest text-white">
              META JFA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={linkClasses(item.path)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-gray-300 hover:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors tracking-wide ${
                    location.pathname === item.path
                      ? "text-white bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
