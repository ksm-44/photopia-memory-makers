
import { Link } from 'react-router-dom';
import { Camera, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary/5 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <span className="p-2 rounded-full bg-accent/10">
                <Camera className="h-6 w-6 text-accent" />
              </span>
              <span className="font-display text-2xl">Photopia</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Connect with talented local photographers to capture your perfect travel moments in destinations around the world.
            </p>
            <div className="flex space-x-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="font-display text-lg font-medium mb-5">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/explore" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/photographers" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  Photographers
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="font-display text-lg font-medium mb-5">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* For Photographers */}
          <div className="md:col-span-2">
            <h3 className="font-display text-lg font-medium mb-5">Photographers</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/become-a-photographer" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  Join as Photographer
                </Link>
              </li>
              <li>
                <Link to="/photographer-resources" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/community-guidelines" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link to="/photographer-dashboard" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="font-display text-lg font-medium mb-5">Get Inspired</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe for travel inspiration and exclusive photographer offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-l-md border border-r-0 border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <Button type="submit" className="rounded-l-none bg-accent hover:bg-accent/90">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Photopia. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link to="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
