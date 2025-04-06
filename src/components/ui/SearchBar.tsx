
import { useState } from 'react';
import { Search, MapPin, Calendar, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, date, type });
    // Search functionality will be implemented later
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-1">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 p-3">
          <MapPin className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full bg-transparent focus:outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 p-3">
          <Calendar className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="When do you need a photographer?"
            className="w-full bg-transparent focus:outline-none"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        
        <div className="flex-1 flex items-center p-3">
          <Camera className="h-5 w-5 text-gray-400 mr-2" />
          <select
            className="w-full bg-transparent focus:outline-none"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="" disabled>Select photo type</option>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
            <option value="event">Event</option>
            <option value="social">Social Media</option>
            <option value="video">Video/Reels</option>
          </select>
        </div>
        
        <Button 
          type="submit" 
          className="m-3 bg-sunset-500 hover:bg-sunset-600"
        >
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
