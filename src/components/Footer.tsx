
import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="about" className="bg-navy dark:bg-card text-white dark:text-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white dark:text-foreground">ORYVO PROJECTS</h3>
            <p className="text-gray-300 dark:text-muted-foreground mb-4">
              Enterprise-grade project management solutions delivered 100% digitally. 
              No meetings, no phone calls, just results.
            </p>
            <div className="flex items-center gap-2 text-gray-300 dark:text-muted-foreground">
              <Mail className="h-5 w-5" />
<<<<<<< HEAD
              <a href="mailto:oryvoprojects1@gmail.com" className="hover:text-white transition-colors">
                oryvoprojects1@gmail.com
=======
              <a href="mailto:projects@oryvo.com" className="hover:text-white dark:hover:text-foreground transition-colors">
                projects@oryvo.com
>>>>>>> 0b398c50e2fa2dcfabbdcfd068f097d78a5445cd
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 dark:text-muted-foreground">
              <li>
                <Link to="/privacy-policy" className="hover:text-white dark:hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-white dark:hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="hover:text-white dark:hover:text-foreground transition-colors text-left"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="hover:text-white dark:hover:text-foreground transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-foreground">Connect With Us</h4>
            <div className="space-y-3">
              <div className="text-gray-300 dark:text-muted-foreground">
                <strong className="text-white dark:text-foreground">Email Only Support</strong>
                <p className="text-sm">We respond within 24 hours</p>
              </div>
              <div className="flex gap-4">
                {/* <a 
                  href="#" 
                  className="text-gray-300 dark:text-muted-foreground hover:text-white dark:hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-border pt-8 text-center text-gray-300 dark:text-muted-foreground">
          <p>&copy; ORYVO PROJECTS FZCO – Dubai, UAE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
