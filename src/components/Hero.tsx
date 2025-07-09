
import { useEffect, useState } from 'react';
import { ArrowRight, Star, Zap, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Get Your Business Online in 24 Hours';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-bounce" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full animate-bounce" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-yellow-400/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Floating Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium animate-pulse">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              24 Hour Express Delivery
            </div>
            
            {/* Main Headline with Typewriter Effect */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              {text}
              <span className="animate-pulse">|</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-300 font-light">
              Fast, Best & Manageable Landing Pages at{' '}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text font-bold text-3xl">
                ₹1999
              </span>
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Clock, text: 'Fast Delivery' },
                { icon: Award, text: 'Professional Quality' },
                { icon: Star, text: 'Easy Management' }
              ].map((benefit, idx) => (
                <div 
                  key={benefit.text}
                  className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  style={{animationDelay: `${idx * 0.2}s`}}
                >
                  <benefit.icon className="w-5 h-5 mr-2 text-green-400" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Right Content - Mockup */}
          <div className="relative animate-scale-in">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              {/* Laptop Mockup */}
              <div className="bg-gray-800 rounded-t-xl p-2 shadow-2xl">
                <div className="bg-white rounded-lg p-6 h-80 overflow-hidden">
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-400 to-red-400 h-8 rounded w-32"></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-b-xl h-4"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-400 text-white rounded-full p-3 animate-bounce shadow-lg">
                <Star className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-400 text-white rounded-full p-3 animate-bounce shadow-lg" style={{animationDelay: '0.5s'}}>
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
