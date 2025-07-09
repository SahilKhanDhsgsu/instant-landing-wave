
import { Check, Star, Zap, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const features = [
    'Complete Website Design',
    '24-Hour Express Delivery',
    'About Us Page',
    'Services Showcase',
    'Customer Reviews Section',
    'Contact Forms',
    'Social Media Integration',
    'WhatsApp Chat Integration',
    'Responsive Mobile Design',
    'Free .in Domain',
    'Free Hosting (1 Year)',
    'Easy Content Management',
    'SEO Optimized',
    'SSL Certificate Included'
  ];

  const bonuses = [
    { icon: Gift, text: 'Free Domain (.in)', value: '₹800' },
    { icon: Gift, text: 'Free Hosting (1 Year)', value: '₹1500' },
    { icon: Zap, text: '24-Hour Delivery', value: 'Priceless' }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Simple, Transparent
            <span className="block text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to get your business online, included in one affordable package
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-gradient-to-r from-yellow-400 to-orange-500 p-8 lg:p-12 relative overflow-hidden group hover:scale-105 transition-all duration-500">
            {/* Popular Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full p-4 animate-bounce shadow-lg">
              <Star className="w-6 h-6" />
            </div>
            
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Complete Website Package</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-gray-500 text-2xl line-through mr-4">₹5000</span>
                  <span className="text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text">
                    ₹1999
                  </span>
                </div>
                <p className="text-lg text-gray-600">One-time payment • No hidden fees</p>
              </div>
              
              {/* Bonus Highlights */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 mb-8 border-2 border-yellow-300">
                <h4 className="text-xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center">
                  <Gift className="w-6 h-6 mr-2 text-orange-500" />
                  Bonus Included (Worth ₹2300+)
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {bonuses.map((bonus, index) => (
                    <div 
                      key={bonus.text}
                      className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <bonus.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <p className="font-semibold text-gray-800">{bonus.text}</p>
                      <p className="text-sm text-green-600 font-bold">{bonus.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Features List */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={feature}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    <div className="bg-green-500 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Order Now - ₹1999
                  <Zap className="ml-3 w-6 h-6 group-hover:animate-bounce" />
                </Button>
                <p className="text-sm text-gray-500 mt-4">🔒 Secure payment • 💯 Satisfaction guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
