
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatIncluded from '@/components/WhatIncluded';
import WhoItsFor from '@/components/WhoItsFor';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatIncluded />
      <WhoItsFor />
      <PricingSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
