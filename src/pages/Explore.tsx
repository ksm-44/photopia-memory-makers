
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SearchBar from '../components/ui/SearchBar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import PhotographerCard from '../components/ui/PhotographerCard';
import { Filter, MapPin, Camera, Calendar, SlidersHorizontal } from 'lucide-react';

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
        <section className="bg-gray-50 dark:bg-gray-800 py-8">
          <div className="container-custom">
            <h1 className="heading-2 mb-6 text-center">Find Your Perfect Photographer</h1>
            <SearchBar />
          </div>
        </section>

        {/* Main content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Filter sidebar */}
              <div className={`w-full lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="lg:hidden"
                      onClick={() => setShowFilters(false)}
                    >
                      <Filter className="h-4 w-4 mr-1" /> Close
                    </Button>
                  </div>

                  {/* Location filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Location</h3>
                    <div className="flex items-center border rounded-md">
                      <MapPin className="h-4 w-4 ml-2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Enter location"
                        className="w-full p-2 bg-transparent focus:outline-none"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Price range filter */}
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-sm font-medium">Price Range</h3>
                      <span className="text-sm text-gray-500">
                        ${priceRange[0]} - ${priceRange[1]}
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

                  {/* Photography type filter */}
                  <div className="mb-4">
                    <h3 className="text-sm font-medium mb-2">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {specialtyOptions.map(specialty => (
                        <Button
                          key={specialty}
                          variant={selectedSpecialties.includes(specialty) ? "default" : "outline"}
                          size="sm"
                          className={`text-xs ${selectedSpecialties.includes(specialty) ? 'bg-sunset-500 hover:bg-sunset-600' : ''}`}
                          onClick={() => toggleSpecialty(specialty)}
                        >
                          {specialty}
                        </Button>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Photographers grid */}
              <div className="w-full lg:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-lg font-medium">
                    <span>{filteredPhotographers.length} photographers available</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="lg:hidden flex items-center"
                      onClick={() => setShowFilters(true)}
                    >
                      <SlidersHorizontal className="h-4 w-4 mr-1" /> Filters
                    </Button>
                    <select className="border rounded-md p-2 text-sm">
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
                  <div className="text-center py-10">
                    <Camera className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No photographers found</h3>
                    <p className="text-gray-500">Try adjusting your filters for more results</p>
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
