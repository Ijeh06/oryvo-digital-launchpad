
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 hover:scale-105 transition-transform duration-200 cursor-pointer">
            <h1 className="text-2xl font-bold text-navy dark:text-primary">ORYVO PROJECTS</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-navy dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:scale-105 duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-foreground hover:text-navy dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:scale-105 duration-200"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-navy dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:scale-105 duration-200"
              >
                About ORYVO
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-navy dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:scale-105 duration-200"
              >
                Contact
              </button>
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:scale-110 transition-transform duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-navy dark:hover:text-primary transition-colors hover:bg-secondary rounded"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-navy dark:hover:text-primary transition-colors hover:bg-secondary rounded"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-navy dark:hover:text-primary transition-colors hover:bg-secondary rounded"
              >
                About ORYVO
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-navy dark:hover:text-primary transition-colors hover:bg-secondary rounded"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
