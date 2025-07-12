
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustSignalsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial state
    gsap.set([headlineRef.current, subheadlineRef.current, buttonsRef.current, trustSignalsRef.current], {
      opacity: 0,
      y: 30
    });

    // Animate in sequence
    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(subheadlineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .to(buttonsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")
    .to(trustSignalsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut"
      });
    }
  };

  return (
    <section ref={heroRef} id="hero" className="bg-gradient-to-b from-background to-secondary py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy dark:text-primary mb-6 leading-tight"
          >
            Enterprise-Grade Project Management – Delivered Digitally
          </h1>
          
          <p 
            ref={subheadlineRef}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
          >
            Access a full-scope digital toolkit for managing complex projects — with optional remote advisory from certified experts. No meetings. No phone calls. 100% online.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-navy hover:bg-navy-600 text-white dark:bg-primary dark:text-navy dark:hover:bg-primary/90 px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-200"
              onClick={() => scrollToSection('pricing')}
            >
              Buy Digital Toolkit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-navy text-navy hover:bg-navy hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-navy px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-200"
              onClick={() => scrollToSection('contact')}
            >
              Request Custom Proposal
            </Button>
          </div>

          {/* Trust Signals */}
          <div ref={trustSignalsRef} className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-200">
              <Shield className="h-5 w-5 text-green-600" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-200">
              <Zap className="h-5 w-5 text-blue-600" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-200">
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
