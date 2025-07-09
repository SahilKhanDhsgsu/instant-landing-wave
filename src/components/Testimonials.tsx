
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar Electronics",
      rating: 5,
      text: "Amazing service! Got my electronics store website in just 24 hours. Sales increased by 40% in the first month. Highly recommended!",
      location: "Mumbai"
    },
    {
      name: "Priya Sharma",
      business: "Sharma Beauty Salon",
      rating: 5,
      text: "Professional website with WhatsApp integration. My customers can book appointments directly. The team delivered exactly what they promised.",
      location: "Delhi"
    },
    {
      name: "Amit Patel",
      business: "Patel Restaurant",
      rating: 5,
      text: "Fast delivery and beautiful design. The online menu and contact form helped us get more orders. Great value for ₹1999!",
      location: "Ahmedabad"
    },
    {
      name: "Sunita Gupta",
      business: "Gupta Fashion Store",
      rating: 5,
      text: "Easy to manage website with all social media connected. Customer reviews section builds trust. Excellent work!",
      location: "Jaipur"
    },
    {
      name: "Vikram Singh",
      business: "Singh Automobile",
      rating: 5,
      text: "Responsive design looks great on mobile. WhatsApp chat feature brings direct inquiries. Professional service from start to end.",
      location: "Chandigarh"
    }
  ];

  const clientLogos = [
    "Kumar Electronics", "Sharma Beauty", "Patel Restaurant", 
    "Gupta Fashion", "Singh Auto", "Delhi Sweets"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            What Our Clients
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied business owners who grew their online presence with our websites
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              {/* Client Info */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-600 font-semibold mb-1">
                  {testimonials[currentIndex].business}
                </p>
                <p className="text-gray-500">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
            
            {/* Navigation */}
            <Button
              variant="ghost"
              size="lg"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-3"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-3"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Trusted By Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Trusted by 500+ Businesses</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <div 
                key={logo}
                className="bg-white rounded-lg px-6 py-3 shadow-md font-semibold text-gray-700 hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
