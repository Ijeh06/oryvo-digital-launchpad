
import { Card, CardContent } from '@/components/ui/card';
import { Users, Rocket, Building2, Briefcase, Cog } from 'lucide-react';
import { useDraggable } from '@/hooks/useDraggable';

const WhoItsFor = () => {
  useDraggable();

  const targetAudiences = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Project Managers",
      description: "Handling multiple teams and complex deliverables"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Startups",
      description: "Launching high-stakes projects with limited resources"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Operations Teams",
      description: "Strategy departments requiring structured frameworks"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Agencies",
      description: "Managing client deliveries and project portfolios"
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Engineering Firms",
      description: "Tech & Industrial companies with complex projects"
    }
  ];

  return (
    <section className="py-20 bg-lightgray-200 relative overflow-hidden container">
      {/* Draggable Flair Elements */}
      <div className="flair--1 absolute top-12 right-12 w-16 h-16 bg-navy/5 rounded-full cursor-grab active:cursor-grabbing"></div>
      <div className="flair--3b absolute bottom-16 left-24 w-14 h-14 bg-blue-500/10 rounded-lg cursor-grab active:cursor-grabbing"></div>
      <div className="flair--4b absolute top-32 left-40 w-20 h-10 bg-green-500/15 rounded-full cursor-grab active:cursor-grabbing"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Who It's For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed for professionals who demand excellence in project delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudiences.map((audience, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-navy mb-4 flex justify-center">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  {audience.title}
                </h3>
                <p className="text-gray-600">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
