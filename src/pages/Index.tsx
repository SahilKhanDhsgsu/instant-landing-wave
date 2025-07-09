
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurWorks from '@/components/OurWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <OurWorks />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
