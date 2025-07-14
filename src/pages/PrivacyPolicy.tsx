
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="bg-card p-6 rounded-lg border mb-8">
            <p className="text-muted-foreground mb-4">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-muted-foreground">
              This Privacy Policy describes how ORYVO PROJECTS FZCO ("we," "our," or "us") collects, uses, and protects your information.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <div className="bg-card p-6 rounded-lg border">
              <ul className="space-y-2 text-muted-foreground">
                <li>• Contact information (name, email address, company name)</li>
                <li>• Project requirements and communication preferences</li>
                <li>• Usage data to improve our services</li>
                <li>• Technical information for security and optimization</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <div className="bg-card p-6 rounded-lg border">
              <ul className="space-y-2 text-muted-foreground">
                <li>• To provide and improve our project management services</li>
                <li>• To communicate with you about your projects</li>
                <li>• To send important updates and notifications</li>
                <li>• To ensure security and prevent fraud</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Protection</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-muted-foreground">
                Your data is stored securely and we do not share it with third parties except as necessary to provide our services.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
            <div className="bg-card p-6 rounded-lg border">
              <ul className="space-y-2 text-muted-foreground">
                <li>• Right to access your personal data</li>
                <li>• Right to correct inaccurate information</li>
                <li>• Right to delete your data</li>
                <li>• Right to data portability</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-foreground font-medium mt-2">
                projects@oryvo.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
