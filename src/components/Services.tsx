
import { CheckCircle, Globe, MessageSquare, Users, Smartphone, Mail, Palette, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: Globe, title: 'About Us Page', description: 'Professional company introduction' },
    { icon: Palette, title: 'Services Showcase', description: 'Highlight your key offerings' },
    { icon: Users, title: 'Customer Reviews', description: 'Build trust with testimonials' },
    { icon: Mail, title: 'Contact Forms', description: 'Easy customer communication' },
    { icon: MessageSquare, title: 'Social Media Integration', description: 'Connect all your platforms' },
    { icon: MessageSquare, title: 'WhatsApp Chat', description: 'Instant customer support' },
    { icon: Smartphone, title: 'Responsive Design', description: 'Perfect on all devices' },
    { icon: Shield, title: 'Free .in Domain', description: 'Professional web address' }
  ];

  return (
    <section id="services" className="py-20 bg-gray-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Complete Website Package
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Includes Everything
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a complete professional website with all essential features included in our ₹1999 package
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-3 w-fit mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                
                {/* Check icon that appears on hover */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-16 h-16 transform translate-x-8 -translate-y-8 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
