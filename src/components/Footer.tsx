
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="about" className="bg-navy text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ORYVO PROJECTS</h3>
            <p className="text-gray-300 mb-4">
              Enterprise-grade project management solutions delivered 100% digitally. 
              No meetings, no phone calls, just results.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="h-5 w-5" />
              <a href="mailto:oryvoprojects1@gmail.com" className="hover:text-white transition-colors">
                oryvoprojects1@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <div className="text-gray-300">
                <strong>Email Only Support</strong>
                <p className="text-sm">We respond within 24 hours</p>
              </div>
              <div className="flex gap-4">
                {/* <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; ORYVO PROJECTS FZCO – Dubai, UAE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
