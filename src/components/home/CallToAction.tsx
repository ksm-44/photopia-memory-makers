
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, User } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Travelers */}
          <div className="bg-ocean-50 dark:bg-ocean-900/20 p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-ocean-100 dark:bg-ocean-800/30 rounded-full opacity-50" />
            <div className="absolute right-12 bottom-12 w-28 h-28 bg-ocean-200 dark:bg-ocean-700/30 rounded-full opacity-50" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 bg-ocean-100 dark:bg-ocean-800/50 rounded-full mb-6">
                <User className="h-8 w-8 text-ocean-600 dark:text-ocean-300" />
              </div>
              
              <h3 className="heading-2 mb-4">For Travelers</h3>
              <p className="body-text mb-8 max-w-md">
                Find local photographers who know the best spots and can capture your journey in a unique way. Create memories that last a lifetime.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-ocean-200 dark:bg-ocean-700 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-ocean-700 dark:text-ocean-200 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Access to talented local photographers</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-ocean-200 dark:bg-ocean-700 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-ocean-700 dark:text-ocean-200 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Personalized photoshoot experiences</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-ocean-200 dark:bg-ocean-700 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-ocean-700 dark:text-ocean-200 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Social media-ready photos & videos</span>
                </li>
              </ul>
              
              <Button className="bg-ocean-600 hover:bg-ocean-700">
                Find Photographers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* For Photographers */}
          <div className="bg-sunset-50 dark:bg-sunset-900/20 p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-sunset-100 dark:bg-sunset-800/30 rounded-full opacity-50" />
            <div className="absolute right-12 bottom-12 w-28 h-28 bg-sunset-200 dark:bg-sunset-700/30 rounded-full opacity-50" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 bg-sunset-100 dark:bg-sunset-800/50 rounded-full mb-6">
                <Camera className="h-8 w-8 text-sunset-600 dark:text-sunset-300" />
              </div>
              
              <h3 className="heading-2 mb-4">For Photographers</h3>
              <p className="body-text mb-8 max-w-md">
                Join our global community of photographers. Showcase your skills, grow your business, and connect with travelers from around the world.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-sunset-200 dark:bg-sunset-700 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-sunset-700 dark:text-sunset-200 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Expand your client base globally</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-sunset-200 dark:bg-sunset-700 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-sunset-700 dark:text-sunset-200 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Set your own rates and availability</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-sunset-200 dark:bg-sunset-700 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-sunset-700 dark:text-sunset-200 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Showcase your portfolio to travelers</span>
                </li>
              </ul>
              
              <Button className="bg-sunset-600 hover:bg-sunset-700">
                Join as Photographer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
