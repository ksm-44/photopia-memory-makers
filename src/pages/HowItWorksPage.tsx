
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Search, Camera, Calendar, Image, MessageSquare, CreditCard } from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24">
          <div className="container-custom text-center">
            <h1 className="heading-1 mb-6">How Photopia Works</h1>
            <p className="body-text max-w-3xl mx-auto mb-8">
              Connect with local photographers around the world to capture your perfect travel moments. Here's a simple guide to how our platform works for both travelers and photographers.
            </p>
          </div>
        </section>

        {/* For Travelers Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">For Travelers</h2>
              <p className="body-text max-w-2xl mx-auto">
                Getting professional photos of your travels has never been easier
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sunset-100 rounded-full flex items-center justify-center mb-6">
                  <Search className="w-8 h-8 text-sunset-500" />
                </div>
                <h3 className="heading-3 mb-3">Search & Discover</h3>
                <p className="text-gray-600">
                  Enter your travel destination and browse through profiles of local photographers. Filter by specialty, style, price, and availability to find your perfect match.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sunset-100 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-sunset-500" />
                </div>
                <h3 className="heading-3 mb-3">Book & Schedule</h3>
                <p className="text-gray-600">
                  Choose a photography package that suits your needs and book your preferred date and time. Our simple booking process makes planning your photoshoot hassle-free.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sunset-100 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-sunset-500" />
                </div>
                <h3 className="heading-3 mb-3">Connect & Plan</h3>
                <p className="text-gray-600">
                  Chat with your photographer before the shoot to discuss your vision, locations, and any specific shots you'd like. They'll share local insights to create the perfect plan.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sunset-100 rounded-full flex items-center justify-center mb-6">
                  <Camera className="w-8 h-8 text-sunset-500" />
                </div>
                <h3 className="heading-3 mb-3">Enjoy Your Photoshoot</h3>
                <p className="text-gray-600">
                  Meet your photographer at the agreed location and enjoy a professional photoshoot experience. They'll guide you with posing tips while capturing authentic moments.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sunset-100 rounded-full flex items-center justify-center mb-6">
                  <Image className="w-8 h-8 text-sunset-500" />
                </div>
                <h3 className="heading-3 mb-3">Get Your Photos</h3>
                <p className="text-gray-600">
                  Receive your professionally edited photos through our secure platform within the promised timeframe. Download, share, and cherish your travel memories.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sunset-100 rounded-full flex items-center justify-center mb-6">
                  <CreditCard className="w-8 h-8 text-sunset-500" />
                </div>
                <h3 className="heading-3 mb-3">Review & Pay</h3>
                <p className="text-gray-600">
                  Once you're satisfied with your photos, release the payment to the photographer and leave a review to help other travelers find great photographers.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="bg-sunset-500 hover:bg-sunset-600">
                Find a Photographer
              </Button>
            </div>
          </div>
        </section>

        {/* For Photographers Section */}
        <section className="section-padding bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">For Photographers</h2>
              <p className="body-text max-w-2xl mx-auto">
                Grow your photography business and connect with travelers from around the world
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
                <h3 className="heading-3 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-sunset-100 rounded-full flex items-center justify-center mr-3 text-sunset-500 font-bold">1</span>
                  Create Your Profile
                </h3>
                <p className="text-gray-600 mb-4">
                  Sign up as a photographer and create your professional profile. Showcase your best work, highlight your specialties, and set your availability and pricing.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-sunset-500 mr-2 mt-1">✓</span>
                    Upload your portfolio and highlight your style
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunset-500 mr-2 mt-1">✓</span>
                    Set your prices, packages, and availability
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunset-500 mr-2 mt-1">✓</span>
                    Share details about your experience and equipment
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
                <h3 className="heading-3 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-sunset-100 rounded-full flex items-center justify-center mr-3 text-sunset-500 font-bold">2</span>
                  Receive Bookings
                </h3>
                <p className="text-gray-600 mb-4">
                  Travelers will discover your profile and book your services. You'll receive notifications and be able to accept or decline bookings based on your availability.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-sunset-500 mr-2 mt-1">✓</span>
                    Get discovered by travelers visiting your area
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunset-500 mr-2 mt-1">✓</span>
                    Manage your bookings through a simple calendar interface
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunset-500 mr-2 mt-1">✓</span>
                    Communicate with clients through our secure messaging system
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
                <h3 className="heading-3 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-sunset-100 rounded-full flex items-center justify-center mr-3 text-sunset-500 font-bold">3</span>
                  Get Paid & Grow
                </h3>
                <p className="text-gray-600 mb-4">
                  After delivering photos to your clients, you'll receive secure payments through our platform, build your reputation with reviews, and grow your business.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-sunset-500 mr-2 mt-1">✓</span>
                    Receive secure payments for your services
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunset-500 mr-2 mt-1">✓</span>
                    Build your reputation through client reviews
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunset-500 mr-2 mt-1">✓</span>
                    Access analytics to track your performance and growth
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="bg-sunset-500 hover:bg-sunset-600">
                Join as Photographer
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
              <p className="body-text max-w-2xl mx-auto">
                Have questions about how Photopia works? Find answers to common questions below
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-3">How do I pay for my photoshoot?</h3>
                <p className="text-gray-600">
                  Payment is handled securely through our platform. When you book a photographer, the payment is held in escrow and released to the photographer after you receive and approve your photos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">What if I need to cancel my booking?</h3>
                <p className="text-gray-600">
                  Our cancellation policy allows free cancellation up to 72 hours before your scheduled photoshoot. After that, a partial fee may apply. Check each photographer's specific cancellation terms on their profile.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">How long does it take to get my photos?</h3>
                <p className="text-gray-600">
                  Delivery time varies by photographer and package. Typically, you'll receive your edited photos within 3-7 days after your photoshoot. The exact timeframe will be specified in the package details.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Can I request specific photo styles or locations?</h3>
                <p className="text-gray-600">
                  Absolutely! After booking, you can communicate directly with your photographer through our messaging system to discuss your preferences, specific locations, and any inspiration photos you'd like to share.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">How do I become a photographer on Photopia?</h3>
                <p className="text-gray-600">
                  Professional photographers can apply through our website. We review your portfolio and professional experience before approving your profile. Once approved, you can create your packages and start receiving bookings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">What fees does Photopia charge photographers?</h3>
                <p className="text-gray-600">
                  Photopia charges a 15% service fee on each completed booking. This covers our platform costs, marketing, customer service, and secure payment processing. There are no monthly or listing fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sunset-50 dark:bg-gray-900 py-16">
          <div className="container-custom text-center">
            <h2 className="heading-2 mb-6">Ready to Create Amazing Travel Memories?</h2>
            <p className="body-text max-w-3xl mx-auto mb-8">
              Join thousands of travelers who have captured their perfect moments with Photopia's network of professional photographers around the world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-sunset-500 hover:bg-sunset-600">
                Find a Photographer
              </Button>
              <Button size="lg" variant="outline">
                Become a Photographer
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
