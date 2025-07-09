
import { useEffect, useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';

const OurWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const works = [
    {
      id: 1,
      title: "Restaurant Chain Website",
      category: "Food & Dining",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
      rating: 5,
      client: "Spice Garden",
      deliveryTime: "18 hours"
    },
    {
      id: 2,
      title: "Fashion Boutique Store",
      category: "Fashion & Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      rating: 5,
      client: "Bella Fashion",
      deliveryTime: "20 hours"
    },
    {
      id: 3,
      title: "Real Estate Agency",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      rating: 5,
      client: "Dream Homes",
      deliveryTime: "22 hours"
    },
    {
      id: 4,
      title: "Fitness Gym Website",
      category: "Health & Fitness",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      rating: 5,
      client: "PowerFit Gym",
      deliveryTime: "16 hours"
    },
    {
      id: 5,
      title: "Medical Clinic",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      rating: 5,
      client: "Health Plus Clinic",
      deliveryTime: "24 hours"
    },
    {
      id: 6,
      title: "Tech Startup",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      rating: 5,
      client: "InnovateTech",
      deliveryTime: "19 hours"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(works.length / 3));
    }, 4000);

    return () => clearInterval(timer);
  }, [works.length]);

  return (
    <section id="works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Recent
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across different industries establish their online presence
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(works.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {works.slice(slideIndex * 3, slideIndex * 3 + 3).map((work, index) => (
                    <div
                      key={work.id}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white cursor-pointer">
                          <ExternalLink className="w-4 h-4 text-gray-700" />
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                            {work.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            {[...Array(work.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {work.title}
                        </h3>
                        
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span className="font-medium">{work.client}</span>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            ✓ {work.deliveryTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(works.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-100">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">24hrs</div>
            <div className="text-gray-600">Average Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600">Industries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
