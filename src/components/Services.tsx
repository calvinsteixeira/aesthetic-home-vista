
import { Home, Building, Palette, Lightbulb, Sofa, TreePine } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Design Residencial',
      description: 'Projetos completos para residências, desde a concepção até a execução final.',
      features: ['Plantas de ambientes', 'Seleção de materiais', 'Acompanhamento de obra']
    },
    {
      icon: Building,
      title: 'Design Comercial',
      description: 'Espaços comerciais que transmitem a identidade da sua marca.',
      features: ['Restaurantes', 'Lojas', 'Clínicas e consultórios']
    },
    {
      icon: Palette,
      title: 'Consultoria de Cores',
      description: 'Harmonização de cores para criar a atmosfera perfeita.',
      features: ['Paleta de cores', 'Psicologia das cores', 'Tendências atuais']
    },
    {
      icon: Lightbulb,
      title: 'Projeto Luminotécnico',
      description: 'Iluminação estratégica para valorizar cada ambiente.',
      features: ['Iluminação funcional', 'Iluminação decorativa', 'Automação']
    },
    {
      icon: Sofa,
      title: 'Seleção de Mobiliário',
      description: 'Curadoria de móveis e acessórios para compor o ambiente ideal.',
      features: ['Móveis sob medida', 'Peças de design', 'Acessórios decorativos']
    },
    {
      icon: TreePine,
      title: 'Paisagismo Interior',
      description: 'Integração da natureza aos ambientes internos.',
      features: ['Jardins verticais', 'Plantas ornamentais', 'Vasos e jardineiras']
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em design de interiores para transformar seus espaços
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-cream-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold-200"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                  <service.icon className="text-gold-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
