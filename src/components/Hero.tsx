
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-cream-100 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary mb-6 text-balance">
            Transformando
            <span className="text-gold-500"> Espaços</span>
            <br />
            em Experiências
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Designer de interiores especializada em criar ambientes únicos e funcionais 
            que refletem a personalidade e o estilo de vida de cada cliente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToPortfolio}
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Ver Portfolio
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-gold-500 text-gold-600 hover:bg-gold-50 px-8 py-4 text-lg font-medium transition-all duration-300"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
