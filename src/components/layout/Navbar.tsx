
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
              <Camera className="h-6 w-6 text-accent" />
            </span>
            <span className="font-display text-xl font-medium">Photopia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-accent after:w-full after:origin-left after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${isActive('/') ? 'text-accent after:scale-x-100' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/explore" 
              className={`text-sm font-medium hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-accent after:w-full after:origin-left after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${isActive('/explore') ? 'text-accent after:scale-x-100' : ''}`}
            >
              Explore
            </Link>
            <Link 
              to="/photographer/1" 
              className={`text-sm font-medium hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-accent after:w-full after:origin-left after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${isActive('/photographer/1') ? 'text-accent after:scale-x-100' : ''}`}
            >
              Photographers
            </Link>
            <Link 
              to="/how-it-works" 
              className={`text-sm font-medium hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-accent after:w-full after:origin-left after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${isActive('/how-it-works') ? 'text-accent after:scale-x-100' : ''}`}
            >
              How It Works
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="flex items-center text-sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-sm px-4 py-2 border border-gray-200 hover:border-gray-300"
            >
              Sign In
            </Button>
            <Button 
              size="sm" 
              className="text-sm px-4 py-2 bg-accent text-white hover:bg-accent/90"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 md:hidden flex flex-col">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <Camera className="h-8 w-8 text-accent" />
                <span className="font-display text-xl font-medium">Photopia</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="container-custom py-10 space-y-8">
              <Link 
                to="/" 
                className="block text-2xl font-display font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/explore" 
                className="block text-2xl font-display font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Explore
              </Link>
              <Link 
                to="/photographer/1" 
                className="block text-2xl font-display font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Photographers
              </Link>
              <Link 
                to="/how-it-works" 
                className="block text-2xl font-display font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <div className="pt-10 border-t border-gray-100 dark:border-gray-800">
                <Link
                  to="/photographer-dashboard"
                  className="block text-lg font-medium text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="h-5 w-5 inline mr-2" />
                  Photographer Dashboard (Demo)
                </Link>
              </div>
            </div>
          </div>

          <div className="container-custom py-6 border-t border-gray-100 dark:border-gray-800">
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-center" onClick={() => setIsOpen(false)}>
                Sign In
              </Button>
              <Button className="w-full justify-center bg-accent hover:bg-accent/90" onClick={() => setIsOpen(false)}>
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
