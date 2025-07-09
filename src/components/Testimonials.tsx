
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

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

  // Duplicate testimonials for infinite scroll effect
  const infiniteTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        // Reset to 0 when we've shown all original testimonials
        return nextIndex >= testimonials.length ? 0 : nextIndex;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/30 to-indigo-100/30">
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
        
        {/* Linear Sliding Testimonials */}
        <div className="max-w-6xl mx-auto mb-16 overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
              width: `${infiniteTestimonials.length * (100 / testimonials.length)}%`
            }}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
                  
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-lg lg:text-xl text-gray-700 text-center mb-8 leading-relaxed font-medium min-h-[120px] flex items-center justify-center">
                      "{testimonial.text}"
                    </blockquote>
                    
                    {/* Client Info */}
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-gray-800 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600 font-semibold mb-1">
                        {testimonial.business}
                      </p>
                      <p className="text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
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
                className="bg-white rounded-lg px-6 py-3 shadow-md font-semibold text-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
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
