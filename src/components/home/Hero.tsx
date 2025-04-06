
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '../ui/SearchBar';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-8 leading-tight animate-fade-up">
            Capture Your <span className="relative inline-block">
              Perfect <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
            </span> Travel Moments
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Connect with local photographers around the world to create stunning memories of your travels
          </p>
          
          {/* Search Bar */}
          <div className="mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <SearchBar />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md shadow-btn hover:shadow-elegant">
              Find a Photographer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:border-white/50 px-6 py-3 rounded-md">
              Become a Photographer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
