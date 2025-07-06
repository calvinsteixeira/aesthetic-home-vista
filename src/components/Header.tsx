import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-cream-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-playfair text-2xl font-semibold text-primary">
          Design de Interiores
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            Contato
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-cream-200 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-left text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-left text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-left text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
