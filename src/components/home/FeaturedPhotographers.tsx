
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PhotographerCard from '../ui/PhotographerCard';

// Sample data for featured photographers
const photographerData = [
  {
    id: '1',
    name: 'Sophia Lin',
    location: 'Bali, Indonesia',
    specialty: 'Portrait & Lifestyle',
    rating: 4.9,
    reviewCount: 127,
    price: 85,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    languages: ['English', 'Indonesian'],
    isFeatured: true
  },
  {
    id: '2',
    name: 'Miguel Herrera',
    location: 'Barcelona, Spain',
    specialty: 'Street & Architecture',
    rating: 4.8,
    reviewCount: 94,
    price: 75,
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80',
    languages: ['English', 'Spanish'],
    isFeatured: true
  },
  {
    id: '3',
    name: 'Amara Okafor',
    location: 'Santorini, Greece',
    specialty: 'Landscape & Couples',
    rating: 4.9,
    reviewCount: 156,
    price: 90,
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80',
    languages: ['English', 'Greek'],
    isFeatured: true
  },
  {
    id: '4',
    name: 'Rajiv Patel',
    location: 'Jaipur, India',
    specialty: 'Cultural & Travel',
    rating: 4.7,
    reviewCount: 108,
    price: 65,
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80',
    languages: ['English', 'Hindi', 'Punjabi'],
    isFeatured: false
  },
];

const FeaturedPhotographers = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-sunset-600 font-medium mb-2">Handpicked Professionals</p>
            <h2 className="heading-2 mb-3">Featured Photographers</h2>
            <p className="body-text max-w-2xl">
              Discover our community of talented photographers ready to capture your perfect travel moments
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 text-sunset-600 hover:text-sunset-700">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photographerData.map((photographer) => (
            <PhotographerCard 
              key={photographer.id}
              {...photographer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotographers;
