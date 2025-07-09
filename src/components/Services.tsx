
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
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 group hover:scale-105"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
