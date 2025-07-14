import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Send } from 'lucide-react';
import ConfirmationDialog from './ConfirmationDialog';

const ContactForm = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    package: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show confirmation dialog
    setShowConfirmation(true);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      company: '',
      package: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <section id="contact" className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground mb-4">
                Start Your Project Smarter – Reach Out Today
              </h2>
              <p className="text-xl text-gray-600 dark:text-muted-foreground mb-6">
                Submit your request below. We'll respond via email within 24 hours.
              </p>
              <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-medium">We do not offer phone support.</span>
              </div>
            </div>

            <Card className="border-2 border-navy-100 dark:border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-navy dark:text-foreground text-center">
                  Contact Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="border-gray-300 dark:border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-gray-300 dark:border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name (optional)</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="border-gray-300 dark:border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="package">Choose Package *</Label>
                    <Select value={formData.package} onValueChange={(value) => handleInputChange('package', value)}>
                      <SelectTrigger className="border-gray-300 dark:border-border">
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic Toolkit</SelectItem>
                        <SelectItem value="pro">Pro Advisory Pack</SelectItem>
                        <SelectItem value="enterprise">Enterprise Bundle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Project Brief *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-gray-300 dark:border-border"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-navy hover:bg-navy-600 text-white py-3 text-lg font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Request
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <div className="flex items-center gap-2 text-amber-800 dark:text-amber-500">
                    <AlertTriangle className="h-5 w-5" />
                    <span className="font-medium">
                      ORYVO communicates via email only. No phone or video calls are required.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ConfirmationDialog 
        open={showConfirmation} 
        onOpenChange={setShowConfirmation} 
      />
    </>
  );
};

export default ContactForm;
