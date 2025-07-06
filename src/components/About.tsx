
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '150+', label: 'Projetos Realizados' },
    { icon: Clock, number: '8+', label: 'Anos de Experiência' },
    { icon: Award, number: '25+', label: 'Prêmios Recebidos' },
    { icon: Heart, number: '100%', label: 'Clientes Satisfeitos' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-crimson font-bold text-primary mb-6">
              Sobre Mim
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Com mais de 8 anos de experiência em design de interiores, dedico-me a criar 
              espaços que não apenas impressionam visualmente, mas também funcionam perfeitamente 
              para o dia a dia dos meus clientes.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Minha abordagem combina funcionalidade, estética e sustentabilidade, sempre 
              respeitando o orçamento e os sonhos de cada cliente. Cada projeto é único e 
              reflete a personalidade de quem irá viver no espaço.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Especializada em residências contemporâneas, comerciais modernos e espaços 
              corporativos, trabalho com uma rede de fornecedores confiáveis para garantir 
              a melhor qualidade em cada detalhe.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-cream-50 rounded-lg">
                  <stat.icon className="mx-auto mb-2 text-gold-500" size={24} />
                  <div className="text-2xl font-crimson font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-cream-100 to-cream-200 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-gold-500/20 to-transparent"></div>
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏠</div>
                  <p className="text-lg font-medium">Foto Profissional</p>
                  <p className="text-sm">Designer de Interiores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
