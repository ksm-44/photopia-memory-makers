
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import PhotographerCard from '../ui/PhotographerCard';
import SectionTitle from '../ui/SectionTitle';

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
  const cardRef1 = useAnimateOnScroll<HTMLDivElement>();
  const cardRef2 = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.05 });
  const cardRef3 = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.05 });
  const cardRef4 = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.05 });
  
  const refs = [cardRef1, cardRef2, cardRef3, cardRef4];

  return (
    <section className="section-padding bg-primary/[0.01] relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-accent/[0.03] rounded-r-3xl"></div>
      </div>
      
      <div className="container-custom">
        <SectionTitle 
          subtitle="Handpicked Professionals"
          title="Featured Photographers"
          description="Discover our community of talented photographers ready to capture your perfect travel moments"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {photographerData.map((photographer, index) => (
            <div key={photographer.id} ref={refs[index]} style={{ animationDelay: `${index * 0.15}s` }}>
              <PhotographerCard {...photographer} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="px-8 py-6 text-base border-gray-200 hover:border-accent hover:text-accent"
          >
            View All Photographers <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotographers;
