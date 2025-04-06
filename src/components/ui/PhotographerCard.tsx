
import { useState } from 'react';
import { Star, Heart, MapPin, Globe, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotographerCardProps {
  id: string;
  name: string;
  location: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  price: number;
  image: string;
  languages: string[];
  isFeatured?: boolean;
}

const PhotographerCard = ({
  id,
  name,
  location,
  specialty,
  rating,
  reviewCount,
  price,
  image,
  languages,
  isFeatured = false
}: PhotographerCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div 
      className={`group elegant-card transform transition-all duration-500 hover:-translate-y-2 ${
        isFeatured ? 'border-l-4 border-l-accent' : ''
      }`}
    >
      <div className="relative overflow-hidden">
        {/* Photographer image */}
        <img
          src={image}
          alt={`${name} - photographer`}
          className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Favorite button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-sm"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`h-5 w-5 transition-colors ${isFavorite ? 'fill-accent text-accent' : 'text-gray-600 dark:text-gray-300'}`} />
        </button>
        
        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}

        {/* Price badge */}
        <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-primary dark:text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
          ${price}/hr
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-display text-xl font-medium">{name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
          <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span className="font-medium">Specialty:</span> {specialty}
          </p>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Globe className="h-4 w-4 mr-1.5 flex-shrink-0" />
            <div className="flex flex-wrap gap-1">
              {languages.map((lang, index) => (
                <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1 border-gray-200 hover:border-accent hover:text-accent dark:border-gray-600"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact
          </Button>
          <Button 
            size="sm"
            className="flex-1 bg-accent hover:bg-accent/90 text-white"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhotographerCard;
