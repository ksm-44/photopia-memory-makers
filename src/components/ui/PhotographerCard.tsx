
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
      className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg ${
        isFeatured ? 'border-2 border-sunset-500' : 'border border-gray-200 dark:border-gray-700'
      }`}
    >
      <div className="relative">
        {/* Photographer image */}
        <img
          src={image}
          alt={`${name} - photographer`}
          className="w-full h-52 object-cover"
        />
        
        {/* Favorite button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'}`} />
        </button>
        
        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-3 left-3 bg-sunset-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-lg font-semibold">{name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
          <Globe className="h-4 w-4 mr-1" />
          <div className="flex flex-wrap gap-1">
            {languages.map((lang, index) => (
              <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                {lang}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700/50 px-3 py-2 rounded-md mb-4">
          <div className="text-sm">Specialty: <span className="font-medium">{specialty}</span></div>
          <div className="text-sm mt-1">
            Starting at <span className="font-semibold text-sunset-600 dark:text-sunset-400">${price}/hr</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1 border-gray-300 dark:border-gray-600"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact
          </Button>
          <Button 
            size="sm"
            className="flex-1 bg-sunset-500 hover:bg-sunset-600"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhotographerCard;
