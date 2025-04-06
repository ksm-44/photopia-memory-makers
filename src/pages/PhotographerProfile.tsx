
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Calendar, Camera, Clock, Globe, Heart, MapPin, MessageSquare, Star, Video, User, Image } from 'lucide-react';

const PhotographerProfile = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  // Mock data - in a real app, this would be fetched based on the ID parameter
  const photographer = {
    id: 1,
    name: "Alex Morgan",
    location: "Paris, France",
    rating: 4.9,
    reviewCount: 127,
    languages: ["English", "French"],
    responseTime: "Within 2 hours",
    memberSince: "January 2021",
    about: "Professional photographer with 7+ years of experience specializing in portrait and street photography. My style combines vibrant urban landscapes with intimate portraits that capture authentic moments. I love working with travelers to help them create memorable content.",
    profileImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
    portfolio: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80",
        type: "portrait"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80",
        type: "street"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80",
        type: "architecture"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80",
        type: "portrait"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
        type: "street"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80",
        type: "architecture"
      }
    ],
    packages: [
      {
        id: "basic",
        name: "Basic Portrait Session",
        price: 85,
        duration: "1 hour",
        photos: 15,
        description: "Perfect for individuals or couples wanting quality portraits at iconic locations.",
        includes: [
          "15 professionally edited photos",
          "1 iconic location",
          "Outfit change",
          "Digital delivery within 3 days"
        ]
      },
      {
        id: "standard",
        name: "Half-Day Adventure",
        price: 170,
        duration: "3 hours",
        photos: 30,
        description: "Explore multiple locations and create a diverse portfolio of travel memories.",
        includes: [
          "30 professionally edited photos",
          "2-3 locations",
          "Multiple outfit changes",
          "Digital delivery within 5 days",
          "Photography guide to best spots"
        ]
      },
      {
        id: "premium",
        name: "Social Media Package",
        price: 250,
        duration: "4 hours",
        photos: 40,
        videos: 2,
        description: "Complete content creation package with photos and video reels for social media.",
        includes: [
          "40 professionally edited photos",
          "2 custom video reels (60s each)",
          "3-4 prime locations",
          "Multiple outfit changes",
          "Digital delivery within 5 days",
          "Social media caption suggestions",
          "Priority editing"
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        user: "Emma L.",
        date: "October 2023",
        rating: 5,
        content: "Alex was amazing! He knew all the best spots in Paris and made us feel so comfortable during the shoot. The photos turned out better than we could have imagined."
      },
      {
        id: 2,
        user: "James T.",
        date: "September 2023",
        rating: 5,
        content: "Incredible experience from start to finish. Alex is professional, creative, and fun to work with. He captured our honeymoon perfectly."
      },
      {
        id: 3,
        user: "Sarah M.",
        date: "August 2023",
        rating: 4,
        content: "Great photographer with an eye for unique compositions. Got my photos back quickly and they look amazing on my Instagram!"
      }
    ],
    availability: [
      "2025-04-10", "2025-04-11", "2025-04-12", "2025-04-15", "2025-04-16", "2025-04-18", "2025-04-20", "2025-04-21"
    ]
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedPackage) {
      alert('Please select both a date and a package');
      return;
    }
    
    // In a real app, this would initiate the booking process
    console.log(`Booking for ${selectedDate}, package: ${selectedPackage}`);
    alert(`Booking request sent for ${selectedDate}! Alex will contact you shortly to confirm.`);
  };

  const availableDates = photographer.availability.map(date => {
    const d = new Date(date);
    return `${d.toLocaleDateString('en-US', { month: 'short' })} ${d.getDate()}`;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Cover Image */}
        <div 
          className="relative w-full h-64 md:h-96"
          style={{
            backgroundImage: `url(${photographer.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        </div>

        <div className="container-custom">
          {/* Photographer Basic Info */}
          <div className="relative -mt-20 mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4">
              <img 
                src={photographer.profileImage} 
                alt={photographer.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
              />
              <div className="flex-1 text-white md:mb-4">
                <h1 className="text-3xl font-bold">{photographer.name}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{photographer.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                    <span>{photographer.rating} ({photographer.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="md:mb-4 flex gap-2">
                <Button variant="outline" className="bg-white text-gray-800 border-gray-300">
                  <Heart className="h-4 w-4 mr-2" /> Save
                </Button>
                <Button className="bg-sunset-500 hover:bg-sunset-600">
                  <MessageSquare className="h-4 w-4 mr-2" /> Contact
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-6">
          <div className="container-custom">
            <Tabs defaultValue="portfolio">
              <TabsList className="w-full flex justify-start mb-8 border-b overflow-x-auto">
                <TabsTrigger value="portfolio" className="flex-1 md:flex-none">Portfolio</TabsTrigger>
                <TabsTrigger value="packages" className="flex-1 md:flex-none">Packages</TabsTrigger>
                <TabsTrigger value="about" className="flex-1 md:flex-none">About</TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1 md:flex-none">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="portfolio" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {photographer.portfolio.map(item => (
                    <div key={item.id} className="relative group overflow-hidden rounded-lg aspect-square">
                      <img 
                        src={item.image} 
                        alt={`Portfolio ${item.id}`} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="outline" className="text-white border-white hover:bg-white/20">
                          <Image className="h-4 w-4 mr-2" /> View Larger
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="packages" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photographer.packages.map(pkg => (
                    <Card 
                      key={pkg.id} 
                      className={`border-2 transition-all ${selectedPackage === pkg.id ? 'border-sunset-500 shadow-lg' : 'border-gray-200'}`}
                    >
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                        <div className="text-2xl font-bold mb-4">${pkg.price}</div>
                        <p className="text-gray-600 mb-4">{pkg.description}</p>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{pkg.duration}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-4">
                          <Camera className="h-4 w-4 mr-2" />
                          <span>{pkg.photos} edited photos</span>
                          {pkg.videos && (
                            <>
                              <span className="mx-2">•</span>
                              <Video className="h-4 w-4 mr-2" />
                              <span>{pkg.videos} video reels</span>
                            </>
                          )}
                        </div>
                        
                        <div className="mt-4 mb-6">
                          <h4 className="font-medium mb-2">What's included:</h4>
                          <ul className="space-y-1">
                            {pkg.includes.map((item, idx) => (
                              <li key={idx} className="text-sm flex items-start">
                                <span className="text-sunset-500 mr-2">✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          className={`w-full ${selectedPackage === pkg.id ? 'bg-sunset-500 hover:bg-sunset-600' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                          onClick={() => setSelectedPackage(pkg.id)}
                          variant={selectedPackage === pkg.id ? "default" : "outline"}
                        >
                          {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="about" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">About {photographer.name}</h2>
                      <p className="text-gray-600">{photographer.about}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">My Style & Approach</h3>
                      <p className="text-gray-600 mb-4">
                        I believe in capturing authentic moments that tell your unique story. My approach combines candid shots with light direction to create natural-looking yet polished images.
                      </p>
                      <p className="text-gray-600">
                        Before each session, I'll discuss your preferences and vision. During our shoot, I'll help with posing while keeping things relaxed and fun. My goal is to create images that not only look beautiful but also genuinely reflect your personality.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-medium mb-4">Quick Info</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Globe className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Languages</p>
                            <p className="text-gray-600">{photographer.languages.join(", ")}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Response Time</p>
                            <p className="text-gray-600">{photographer.responseTime}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <User className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                          <div>
                            <p className="font-medium">Member Since</p>
                            <p className="text-gray-600">{photographer.memberSince}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    {photographer.reviews.map(review => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 mb-6 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold">{review.user}</div>
                          <div className="text-gray-500 text-sm">{review.date}</div>
                        </div>
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{review.content}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Card className="p-6 sticky top-6">
                      <h3 className="text-lg font-semibold mb-4">Book {photographer.name}</h3>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Select Date</h4>
                        <div className="flex flex-wrap gap-2">
                          {availableDates.map((date, idx) => (
                            <Button 
                              key={idx}
                              variant={selectedDate === photographer.availability[idx] ? "default" : "outline"}
                              size="sm"
                              className={`${selectedDate === photographer.availability[idx] ? 'bg-sunset-500 hover:bg-sunset-600' : ''}`}
                              onClick={() => setSelectedDate(photographer.availability[idx])}
                            >
                              <Calendar className="h-3 w-3 mr-1" />
                              {date}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-medium mb-2">Select Package</h4>
                        <select 
                          className="w-full p-2 border border-gray-300 rounded-md"
                          value={selectedPackage}
                          onChange={(e) => setSelectedPackage(e.target.value)}
                        >
                          <option value="">-- Select a package --</option>
                          {photographer.packages.map(pkg => (
                            <option key={pkg.id} value={pkg.id}>
                              {pkg.name} - ${pkg.price}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <Button 
                        className="w-full bg-sunset-500 hover:bg-sunset-600"
                        onClick={handleBooking}
                      >
                        Book Now
                      </Button>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PhotographerProfile;
