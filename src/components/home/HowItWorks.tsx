
import { Search, Calendar, Camera, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '../ui/SectionTitle';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';

const steps = [
  {
    icon: <Search className="h-12 w-12 text-accent" />,
    title: 'Search Photographers',
    description: 'Find local photographers based on your destination, style preferences, and dates.'
  },
  {
    icon: <Calendar className="h-12 w-12 text-accent" />,
    title: 'Book a Session',
    description: 'Choose your perfect photographer and book a session that matches your travel plans.'
  },
  {
    icon: <Camera className="h-12 w-12 text-accent" />,
    title: 'Capture Memories',
    description: 'Meet your photographer and create stunning photos that will last forever.'
  },
  {
    icon: <Heart className="h-12 w-12 text-accent" />,
    title: 'Share Your Journey',
    description: 'Receive professionally edited photos ready to share with friends or on social media.'
  }
];

const HowItWorks = () => {
  const ref1 = useAnimateOnScroll<HTMLDivElement>();
  const ref2 = useAnimateOnScroll<HTMLDivElement>();
  const ref3 = useAnimateOnScroll<HTMLDivElement>();
  const ref4 = useAnimateOnScroll<HTMLDivElement>();
  
  const refs = [ref1, ref2, ref3, ref4];

  return (
    <section className="section-padding relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 rounded-full bg-accent-alt/10 blur-3xl opacity-70"></div>
      
      <div className="container-custom relative">
        <SectionTitle
          subtitle="Simple Process"
          title="How Photopia Works"
          description="From finding your perfect photographer to receiving stunning photos, our platform makes capturing travel memories effortless"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              ref={refs[index]}
              style={{ animationDelay: `${index * 0.15}s` }}
              className="elegant-card group p-6 md:p-8 text-center relative overflow-hidden"
            >
              {/* Step number */}
              <span className="absolute top-4 right-4 font-display text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                {index + 1}
              </span>
              
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  {step.icon}
                </div>
              </div>
              <h3 className="heading-3 mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-display font-medium mb-6">
            Ready to capture your travel moments?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-base bg-cta-primary hover:bg-cta-primary/90 text-white"
            >
              Find Your Photographer
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-base border-gray-200 hover:border-gray-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
