
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 hover:bg-secondary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="bg-card p-6 rounded-lg border mb-8">
            <p className="text-muted-foreground mb-4">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-muted-foreground">
              These Terms of Service govern your use of ORYVO PROJECTS services.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Service Description</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">
                ORYVO PROJECTS provides enterprise-grade project management solutions delivered 100% digitally. Our services include:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Digital project management toolkits</li>
                <li>• Remote advisory services from certified experts</li>
                <li>• Email-only communication and support</li>
                <li>• Custom project solutions</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Communication Policy</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">
                <strong>Email-Only Communication:</strong> ORYVO PROJECTS operates exclusively through email communication. We do not provide:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Phone support or consultations</li>
                <li>• Video calls or meetings</li>
                <li>• In-person meetings</li>
                <li>• Chat or instant messaging support</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Service Packages</h2>
            <div className="bg-card p-6 rounded-lg border">
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground">Basic Toolkit ($199)</h3>
                  <p>Essential project management tools and templates</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Pro Advisory Pack ($699)</h3>
                  <p>Advanced tools plus expert guidance via email</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Enterprise Bundle ($1,899)</h3>
                  <p>Complete solution with ongoing advisory support</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
            <div className="bg-card p-6 rounded-lg border">
              <ul className="space-y-2 text-muted-foreground">
                <li>• All prices are in USD</li>
                <li>• Payment is required before service delivery</li>
                <li>• We respond to all inquiries within 24 hours</li>
                <li>• Refunds are handled on a case-by-case basis</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground">
                ORYVO PROJECTS FZCO shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground">
                For questions about these Terms of Service:
              </p>
              <p className="text-foreground font-medium mt-2">
                ORYVO PROJECTS FZCO<br />
                Dubai, UAE<br />
                Email: projects@oryvo.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
