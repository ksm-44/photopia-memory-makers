
import { Search, Calendar, Camera, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-ocean-500" />,
    title: 'Search Photographers',
    description: 'Find local photographers based on your destination, style preferences, and dates.'
  },
  {
    icon: <Calendar className="h-10 w-10 text-ocean-500" />,
    title: 'Book a Session',
    description: 'Choose your perfect photographer and book a session that matches your travel plans.'
  },
  {
    icon: <Camera className="h-10 w-10 text-ocean-500" />,
    title: 'Capture Memories',
    description: 'Meet your photographer and create stunning photos that will last forever.'
  },
  {
    icon: <Heart className="h-10 w-10 text-ocean-500" />,
    title: 'Share Your Journey',
    description: 'Receive professionally edited photos ready to share with friends or on social media.'
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-ocean-600 font-medium mb-2">Simple Process</p>
          <h2 className="heading-2 mb-4">How Photopia Works</h2>
          <p className="body-text max-w-2xl mx-auto">
            From finding your perfect photographer to receiving stunning photos, 
            our platform makes capturing travel memories effortless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-ocean-50 dark:bg-ocean-900/20 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="heading-3 mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Ready to capture your travel moments?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-ocean-500 hover:bg-ocean-600">
              Find Your Photographer
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
