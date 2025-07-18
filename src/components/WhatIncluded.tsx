
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, BarChart3, Shield, Users, Mail } from 'lucide-react';
import { useStaggerAnimation } from '@/hooks/useGSAP';
import { useDraggable } from '@/hooks/useDraggable';

const WhatIncluded = () => {
  const featuresRef = useStaggerAnimation('.feature-item', 0.1);
  const cardsRef = useStaggerAnimation('.card-item', 0.2);
  
  useDraggable();

  const toolkitFeatures = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Editable Gantt Chart",
      description: "Excel & Google Sheets compatible"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Project Budget Model",
      description: "Complete with cost controls"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk & Mitigation Matrix",
      description: "Comprehensive risk management"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Scope & Milestone Templates",
      description: "Project planning essentials"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Responsibility Tracker",
      description: "Clear accountability framework"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "PM Documentation Bundle",
      description: "PDF & Word templates"
    }
  ];

  const advisoryFeatures = [
    "Asynchronous strategic feedback",
    "Milestone reviews",
    "Project scope refinement",
    "Budget optimization suggestions"
  ];

  return (
    <section id="solutions" className="py-20 bg-white dark:bg-card relative overflow-hidden container">
      {/* Draggable Flair Elements */}
      <div className="flair--1 absolute top-10 right-16 w-14 h-14 bg-blue-500/15 dark:bg-blue-500/30 rounded-full cursor-grab active:cursor-grabbing"></div>
      <div className="flair--3b absolute bottom-20 left-16 w-10 h-10 bg-navy/10 dark:bg-navy/30 rounded-lg cursor-grab active:cursor-grabbing"></div>
      <div className="flair--4b absolute top-40 left-32 w-18 h-6 bg-green-500/20 dark:bg-green-500/40 rounded-full cursor-grab active:cursor-grabbing"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            What's Included
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to manage complex projects professionally
          </p>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* ORYVO Project Delivery Toolkit */}
          <Card className="border-2 border-navy-100 dark:border-primary card-item bg-white dark:bg-card hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-navy dark:text-white flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                ORYVO Project Delivery Toolkit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div ref={featuresRef} className="space-y-4">
                {toolkitFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 feature-item hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded transition-colors duration-200">
                    <div className="text-navy dark:text-white mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Optional: Remote Advisory Support */}
          <Card className="border-2 border-blue-100 dark:border-primary card-item bg-white dark:bg-card hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-navy dark:text-white flex items-center gap-3">
                <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                Optional: Remote Advisory Support
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">Delivered via email only (no Zoom or phone calls):</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {advisoryFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 feature-item hover:bg-blue-50 dark:hover:bg-blue-900 p-2 rounded transition-colors duration-200">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatIncluded;
