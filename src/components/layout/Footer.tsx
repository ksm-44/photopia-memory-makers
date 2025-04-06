
import { Link } from 'react-router-dom';
import { Camera, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-sunset-500" />
              <span className="font-display text-xl font-bold">Photopia</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Connect with local photographers to capture your perfect travel moments.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-500 hover:text-sunset-500 transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-500 hover:text-sunset-500 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-500 hover:text-sunset-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Travelers */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">For Travelers</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/how-it-works" className="text-gray-600 dark:text-gray-400 hover:text-sunset-500 dark:hover:text-sunset-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-gray-600 dark:text-gray-400 hover:text-sunset-500 dark:hover:text-sunset-400 transition-colors">
                  Explore Destinations
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-600 dark:text-gray-400 hover:text-sunset-500 dark:hover:text-sunset-400 transition-colors">
                  Safety
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-600 dark:text-gray-400 hover:text-sunset-500 dark:hover:text-sunset-400 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Photographers */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">For Photographers</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/become-a-photographer" className="text-gray-600 dark:text-gray-400 hover:text-sunset-500 dark:hover:text-sunset-400 transition-colors">
                  Join as Photographer
                </Link>
              </li>
              <li>
                <Link to="/photographer-resources" className="text-gray-600 dark:text-gray-400 hover:text-sunset-500 dark:hover:text-sunset-400 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/photographer-guidelines" className="text-gray-600 dark:text-gray-400 hover:text-sunset-500 dark:hover:text-sunset-400 transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link to="/photographer-stories" className="text-gray-600 dark:text-gray-400 hover:text-sunset-500 dark:hover:text-sunset-400 transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to receive travel inspiration and exclusive offers.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-sunset-500"
                />
                <Button type="submit" className="rounded-l-none bg-sunset-500 hover:bg-sunset-600">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Photopia. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-4">
            <Link to="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-sunset-500 dark:hover:text-sunset-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-sunset-500 dark:hover:text-sunset-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-sm text-gray-500 dark:text-gray-400 hover:text-sunset-500 dark:hover:text-sunset-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
