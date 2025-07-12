
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useDraggable } from '@/hooks/useDraggable';

const Testimonials = () => {
  useDraggable();

  const testimonials = [
    {
      quote: "We used the ORYVO framework to replan our entire project portfolio. Results were immediate. The team was responsive, and everything worked via email only.",
      author: "COO, ConstructPro Australia",
      rating: 5
    },
    {
      quote: "Highly professional templates. Saved us weeks of setup time.",
      author: "PMO Director, BerlinTech GmbH",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-lightgray-200 relative overflow-hidden container">
      {/* Draggable Flair Elements */}
      <div className="flair--1 absolute top-20 left-16 w-12 h-12 bg-blue-500/20 rounded-full cursor-grab active:cursor-grabbing"></div>
      <div className="flair--3b absolute bottom-32 right-20 w-18 h-18 bg-navy/10 rounded-lg cursor-grab active:cursor-grabbing"></div>
      <div className="flair--4b absolute top-48 right-32 w-16 h-8 bg-green-500/25 rounded-full cursor-grab active:cursor-grabbing"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Client Feedback
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our clients say about ORYVO Projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-l-4 border-l-navy">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="h-8 w-8 text-navy flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <cite className="text-navy font-semibold not-italic">
                      — {testimonial.author}
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
