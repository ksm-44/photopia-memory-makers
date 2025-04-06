
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Camera, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-sunset-500" />
            <span className="font-display text-xl font-bold">Photopia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-sunset-500 transition-colors">Home</Link>
            <Link to="/explore" className="font-medium hover:text-sunset-500 transition-colors">Explore</Link>
            <Link to="/photographer/1" className="font-medium hover:text-sunset-500 transition-colors">Photographers</Link>
            <Link to="/how-it-works" className="font-medium hover:text-sunset-500 transition-colors">How It Works</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="flex items-center">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm" className="bg-sunset-500 hover:bg-sunset-600">Join Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 border-t border-gray-100 dark:border-gray-800">
          <div className="container-custom space-y-4">
            <Link 
              to="/" 
              className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/explore" 
              className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Explore
            </Link>
            <Link 
              to="/photographer/1" 
              className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Photographers
            </Link>
            <Link 
              to="/how-it-works" 
              className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <div className="mt-2 space-y-2">
              <Link
                to="/photographer-dashboard"
                className="block p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-sunset-500"
                onClick={() => setIsOpen(false)}
              >
                <User className="h-4 w-4 inline mr-2" />
                Photographer Dashboard (Demo)
              </Link>
            </div>
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <Button variant="outline" className="w-full mb-2">Sign In</Button>
              <Button className="w-full bg-sunset-500 hover:bg-sunset-600">Join Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
