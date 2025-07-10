
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-gradient-to-b from-white to-lightgray-200 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
            Enterprise-Grade Project Management – Delivered Digitally
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Access a full-scope digital toolkit for managing complex projects — with optional remote advisory from certified experts. No meetings. No phone calls. 100% online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-navy hover:bg-navy-600 text-white px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection('pricing')}
            >
              Buy Digital Toolkit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Request Custom Proposal
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-600" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span>100% Remote Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
