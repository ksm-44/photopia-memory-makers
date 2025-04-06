
import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SearchBar from '../components/ui/SearchBar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import PhotographerCard from '../components/ui/PhotographerCard';
import { Filter, MapPin, Camera, Calendar, SlidersHorizontal } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Mock data for photographers (would come from an API in a real application)
const mockPhotographers = [
  {
    id: "1",
    name: "Alex Morgan",
    location: "Paris, France",
    specialty: "Portrait, Street, Architecture",
    rating: 4.9,
    reviewCount: 127,
    price: 85,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80",
    languages: ["English", "French"],
  },
  {
    id: "2",
    name: "Maya Rodriguez",
    location: "Bali, Indonesia",
    specialty: "Landscape, Beach, Social Media",
    rating: 4.8,
    reviewCount: 94,
    price: 75,
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80",
    languages: ["English", "Indonesian"],
  },
  {
    id: "3",
    name: "Jason Kim",
    location: "Tokyo, Japan",
    specialty: "Urban, Night, Fashion",
    rating: 4.7,
    reviewCount: 86,
    price: 90,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
    languages: ["English", "Japanese"],
  },
  {
    id: "4",
    name: "Sophia Chen",
    location: "Barcelona, Spain",
    specialty: "Portrait, Couple, Events",
    rating: 4.9,
    reviewCount: 112,
    price: 80,
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80",
    languages: ["English", "Spanish"],
  },
  {
    id: "5",
    name: "David Wilson",
    location: "New York, USA",
    specialty: "Street, Urban, Reels",
    rating: 4.8,
    reviewCount: 78,
    price: 95,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80",
    languages: ["English"],
  },
  {
    id: "6",
    name: "Emma Johnson",
    location: "London, UK",
    specialty: "Fashion, Portrait, Social Media",
    rating: 4.6,
    reviewCount: 65,
    price: 88,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    languages: ["English"],
  }
];

const Explore = () => {
  const [priceRange, setPriceRange] = useState([50, 150]);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [location, setLocation] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const specialtyOptions = ["Portrait", "Landscape", "Street", "Fashion", "Event", "Social Media", "Architecture", "Night", "Beach", "Urban", "Couple", "Reels", "Video"];

  const toggleSpecialty = (specialty: string) => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter(s => s !== specialty));
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };

  const filteredPhotographers = mockPhotographers.filter(photographer => {
    const matchesLocation = location === '' || 
      photographer.location.toLowerCase().includes(location.toLowerCase());
    
    const matchesPrice = photographer.price >= priceRange[0] && 
      photographer.price <= priceRange[1];
    
    const matchesSpecialties = selectedSpecialties.length === 0 || 
      selectedSpecialties.some(s => photographer.specialty.includes(s));
    
    return matchesLocation && matchesPrice && matchesSpecialties;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero section with search */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-alt/20 bg-blend-multiply"></div>
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M0 .5h60m-60 5h60m-60 5h60m-60 5h60m-60 5h60m-60 5h60m-60 5h60m-60 5h60m-60 5h60m-60 5h60M.5 0v60m5-60v60m5-60v60m5-60v60m5-60v60m5-60v60m5-60v60m5-60v60m5-60v60m5-60v60" fill="none" stroke="#d9a5b3" opacity=".05" stroke-width=".5"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"></rect></svg>
          </div>
          
          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-2 mb-6 text-center">Find Your Perfect Photographer</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Connect with local photographers who know the best spots and can capture your journey beautifully
              </p>
              <SearchBar />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filter sidebar */}
              <div className={`w-full lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <Card className="p-6 shadow-card sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-display font-medium">Filters</h2>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="lg:hidden"
                      onClick={() => setShowFilters(false)}
                    >
                      <Filter className="h-4 w-4 mr-1" /> Close
                    </Button>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="location" className="border-none">
                      <AccordionTrigger className="py-2 hover:no-underline">
                        <span className="flex items-center text-base font-medium">
                          <MapPin className="h-4 w-4 mr-2 text-accent" /> Location
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-4">
                        <div className="flex items-center border rounded-md bg-white">
                          <MapPin className="h-4 w-4 ml-3 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Enter destination"
                            className="w-full p-3 bg-transparent focus:outline-none text-sm"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="price" className="border-none">
                      <AccordionTrigger className="py-2 hover:no-underline">
                        <span className="flex items-center text-base font-medium">
                          <Calendar className="h-4 w-4 mr-2 text-accent" /> Price Range
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-4">
                        <div className="px-2">
                          <div className="flex justify-between mb-4">
                            <span className="text-sm font-medium">
                              ${priceRange[0]}
                            </span>
                            <span className="text-sm font-medium">
                              ${priceRange[1]}
                            </span>
                          </div>
                          <Slider
                            defaultValue={[50, 150]}
                            max={300}
                            step={10}
                            value={priceRange}
                            onValueChange={setPriceRange}
                            className="my-4"
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="specialties" className="border-none">
                      <AccordionTrigger className="py-2 hover:no-underline">
                        <span className="flex items-center text-base font-medium">
                          <Camera className="h-4 w-4 mr-2 text-accent" /> Specialties
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-4">
                        <div className="flex flex-wrap gap-2">
                          {specialtyOptions.map(specialty => (
                            <Button
                              key={specialty}
                              variant={selectedSpecialties.includes(specialty) ? "default" : "outline"}
                              size="sm"
                              className={`text-xs ${selectedSpecialties.includes(specialty) ? 'bg-accent hover:bg-accent/90' : ''}`}
                              onClick={() => toggleSpecialty(specialty)}
                            >
                              {specialty}
                            </Button>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="mt-6 flex justify-between">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs"
                      onClick={() => {
                        setSelectedSpecialties([]);
                        setPriceRange([50, 150]);
                        setLocation('');
                      }}
                    >
                      Clear All
                    </Button>
                    <Button 
                      size="sm" 
                      className="text-xs bg-accent hover:bg-accent/90"
                    >
                      Apply Filters
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Photographers grid */}
              <div className="w-full lg:w-3/4">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-2xl font-display font-medium mb-2">Available Photographers</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">{filteredPhotographers.length} photographers</span> available to book
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="lg:hidden flex items-center"
                      onClick={() => setShowFilters(true)}
                    >
                      <SlidersHorizontal className="h-4 w-4 mr-1" /> Filters
                    </Button>
                    <select className="border rounded-md p-2 text-sm bg-transparent">
                      <option value="recommended">Recommended</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="top-rated">Top Rated</option>
                    </select>
                  </div>
                </div>

                {filteredPhotographers.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPhotographers.map(photographer => (
                      <PhotographerCard
                        key={photographer.id}
                        id={photographer.id}
                        name={photographer.name}
                        location={photographer.location}
                        specialty={photographer.specialty}
                        rating={photographer.rating}
                        reviewCount={photographer.reviewCount}
                        price={photographer.price}
                        image={photographer.image}
                        languages={photographer.languages}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 bg-white dark:bg-gray-800 rounded-lg shadow-card p-8">
                    <Camera className="h-16 w-16 mx-auto text-accent/40 mb-4" />
                    <h3 className="text-xl font-medium mb-2">No photographers found</h3>
                    <p className="text-gray-500 mb-4">Try adjusting your filters for more results</p>
                    <Button 
                      onClick={() => {
                        setSelectedSpecialties([]);
                        setPriceRange([50, 150]);
                        setLocation('');
                      }}
                      className="bg-accent hover:bg-accent/90"
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}

                {filteredPhotographers.length > 0 && (
                  <div className="mt-10 flex justify-center">
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" disabled className="w-9 p-0">
                        1
                      </Button>
                      <Button variant="outline" size="sm" className="w-9 p-0">
                        2
                      </Button>
                      <Button variant="outline" size="sm" className="w-9 p-0">
                        3
                      </Button>
                      <span className="px-2">...</span>
                      <Button variant="outline" size="sm" className="w-9 p-0">
                        8
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
