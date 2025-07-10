
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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
    <section className="py-20 bg-lightgray-200">
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
