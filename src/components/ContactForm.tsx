
import { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll contact you within 24 hours to discuss your project.",
      });
      setFormData({ name: '', businessName: '', phone: '', requirements: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const openWhatsApp = () => {
    const message = `Hi! I'm interested in getting a website for my business. My details:
Name: ${formData.name || '[Your Name]'}
Business: ${formData.businessName || '[Your Business]'}
Phone: ${formData.phone || '[Your Phone]'}
Requirements: ${formData.requirements || '[Your Requirements]'}`;
    
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400/10 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
              Contact Us Now
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get your professional website in just 24 hours. Fill the form below or contact us directly
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Send className="w-6 h-6 mr-3 text-yellow-400" />
              Get Your Quote
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-medium">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:bg-white/30 focus:border-yellow-400 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-white font-medium">Business Name *</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:bg-white/30 focus:border-yellow-400 transition-all duration-300"
                    placeholder="Your business name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white font-medium">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:bg-white/30 focus:border-yellow-400 transition-all duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="requirements" className="text-white font-medium">Your Requirements</Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:bg-white/30 focus:border-yellow-400 transition-all duration-300 resize-none"
                  placeholder="Tell us about your business and website requirements..."
                />
              </div>
              
              <div className="space-y-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                  type="button"
                  onClick={openWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <div className="bg-blue-500 rounded-full p-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Call us directly</p>
                    <p className="text-white font-semibold text-lg">+91 99999 99999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <div className="bg-purple-500 rounded-full p-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email us</p>
                    <p className="text-white font-semibold text-lg">info@webdesign.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <div className="bg-green-500 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Visit us</p>
                    <p className="text-white font-semibold text-lg">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 border border-yellow-400/30">
              <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-white">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Sunday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="mt-4 p-4 bg-green-500/20 rounded-lg border border-green-400/30">
                  <p className="text-green-300 font-semibold">✨ 24/7 WhatsApp Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
