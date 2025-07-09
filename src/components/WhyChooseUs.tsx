
import { useEffect, useState, useRef } from 'react';
import { Clock, Award, Settings, Users } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000, isVisible }: { end: number; duration?: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const startTime = Date.now();
    const startCount = 0;
    
    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(startCount + progress * (end - startCount));
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    updateCount();
  }, [end, duration, isVisible]);

  return <span>{count}+</span>;
};

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Clock,
      title: 'Fast',
      subtitle: '24-Hour Delivery',
      description: 'Get your website live in just 24 hours with our express delivery guarantee',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Best',
      subtitle: 'Professional Quality',
      description: 'Premium designs that make your business stand out from the competition',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'Manageable',
      subtitle: 'Easy Updates',
      description: 'Simple content management system that you can update anytime',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { number: 500, label: 'Happy Clients' },
    { number: 1000, label: 'Projects Completed' },
    { number: 5, label: 'Years Experience' },
    { number: 24, label: 'Hour Delivery' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose Our
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
              Landing Page Service?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver fast, professional, and manageable websites that help your business grow online
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group hover:scale-105 transition-all duration-500"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`bg-gradient-to-br ${feature.color} rounded-full p-6 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-lg text-yellow-400 mb-4 font-semibold">{feature.subtitle}</p>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats Counter */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text mb-2">
                  <AnimatedCounter end={stat.number} isVisible={isVisible} />
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
