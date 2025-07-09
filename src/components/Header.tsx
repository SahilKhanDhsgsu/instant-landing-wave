
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">WD</span>
            </div>
            <span className="text-xl font-bold text-gray-800">WebDesign Pro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('works')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Our Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('works')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Our Works
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 w-fit"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
