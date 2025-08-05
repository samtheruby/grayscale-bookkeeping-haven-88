import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide header on desktop (window width > 768px) and when scrolling down
      if (window.innerWidth > 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/e9d055b4-a68c-4039-ae12-cd44bddf2a1a.png" 
              alt="Grayscale Books Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-brand-navy transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-brand-navy transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-brand-navy transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-brand-navy transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="professional" 
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex"
            >
              Get Started
            </Button>

            {/* Mobile hamburger menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-6">
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-left text-lg text-gray-600 hover:text-brand-navy transition-colors duration-300"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-left text-lg text-gray-600 hover:text-brand-navy transition-colors duration-300"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-left text-lg text-gray-600 hover:text-brand-navy transition-colors duration-300"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-left text-lg text-gray-600 hover:text-brand-navy transition-colors duration-300"
                  >
                    Contact
                  </button>
                  <Button 
                    variant="professional" 
                    onClick={() => scrollToSection('contact')}
                    className="mt-4 w-full"
                  >
                    Get Started
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;