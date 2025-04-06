
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with a local photographer in Bali gave us images beyond what we could have captured ourselves. The insider knowledge of hidden spots made our honeymoon photos absolutely magical.",
    author: "Sarah & James",
    location: "London, UK",
    trip: "Honeymoon in Bali",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    isPhotographer: false
  },
  {
    id: 2,
    quote: "Joining Photopia has transformed my freelance photography business. I now connect with travelers from around the world and share my love for my city through my lens.",
    author: "Carlos Rodriguez",
    location: "Barcelona, Spain",
    specialties: "Street & Architecture Photography",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    isPhotographer: true
  },
  {
    id: 3,
    quote: "As a solo traveler, I was skeptical at first, but my photographer made me feel comfortable and the photos I got were amazing for my travel blog. Worth every penny!",
    author: "Michelle Chang",
    location: "Toronto, Canada",
    trip: "Solo trip to Japan",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    isPhotographer: false
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-sunset-50 to-ocean-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-sunset-600 dark:text-sunset-400 font-medium mb-2">Success Stories</p>
          <h2 className="heading-2 mb-4">What People Are Saying</h2>
          <p className="body-text max-w-2xl mx-auto">
            Hear from travelers and photographers who have experienced Photopia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-gray-100 dark:text-gray-700" />
              <div className="mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                <p className="text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                <p className="text-sunset-600 dark:text-sunset-400 text-sm mt-1">
                  {testimonial.isPhotographer 
                    ? `Photographer: ${testimonial.specialties}` 
                    : `${testimonial.trip}`
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
