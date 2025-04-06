
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '../ui/SearchBar';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up">
            Capture Your Perfect Travel Moments
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Connect with local photographers worldwide to capture your journey exactly how you envision it
          </p>
          
          {/* Search Bar */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <SearchBar />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-sunset-500 hover:bg-sunset-600">
              Find a Photographer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Become a Photographer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
