
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Mail, Clock, Shield } from 'lucide-react';
import { useStaggerAnimation } from '@/hooks/useGSAP';
import { gsap } from 'gsap';

const PricingSection = () => {
  const cardsRef = useStaggerAnimation('.pricing-card', 0.2);

  const packages = [
    {
      name: "Basic Toolkit",
      price: "$990",
      description: "All digital documents & templates only",
      features: [
        "Complete digital toolkit",
        "All templates included",
        "Instant download",
        "Lifetime access"
      ],
      popular: false
    },
    {
      name: "Pro Advisory Pack",
      price: "$2,990",
      description: "Toolkit + 5 hours email-based remote consulting",
      features: [
        "Everything in Basic",
        "5 hours email consulting",
        "Strategic feedback",
        "Milestone reviews",
        "Project optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise Bundle",
      price: "$7,500 – $14,900",
      description: "Toolkit + 10 hours strategic advisory + reporting templates",
      features: [
        "Everything in Pro",
        "10 hours strategic advisory",
        "Custom reporting templates",
        "Budget optimization",
        "Scope refinement",
        "Priority email support"
      ],
      popular: false
    }
  ];

  const benefits = [
    { icon: <Mail className="h-5 w-5" />, text: "All deliveries are via email" },
    { icon: <Clock className="h-5 w-5" />, text: "100% remote" },
    { icon: <Shield className="h-5 w-5" />, text: "No recurring fees" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut"
      });
    }
  };

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -10,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Pricing Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the package that fits your project needs
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-green-600 hover:scale-110 transition-transform duration-200">
                {benefit.icon}
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative pricing-card cursor-pointer ${pkg.popular ? 'border-2 border-navy shadow-xl scale-105' : 'border border-gray-200'}`}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-navy text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-navy mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="text-4xl font-bold text-navy mb-2">
                  {pkg.price}
                </div>
                <p className="text-gray-600 text-sm">
                  {pkg.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${pkg.popular ? 'bg-navy hover:bg-navy-600' : 'bg-gray-900 hover:bg-gray-800'} text-white hover:scale-105 transition-transform duration-200`}
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
