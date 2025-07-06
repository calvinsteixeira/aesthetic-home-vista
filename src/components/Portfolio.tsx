
import { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'residencial', label: 'Residencial' },
    { id: 'comercial', label: 'Comercial' },
    { id: 'corporativo', label: 'Corporativo' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Apartamento Moderno',
      category: 'residencial',
      description: 'Design contemporâneo com tons neutros e acabamentos de luxo',
      image: '🏡'
    },
    {
      id: 2,
      title: 'Loft Industrial',
      category: 'residencial',
      description: 'Conceito industrial com elementos rústicos e modernos',
      image: '🏭'
    },
    {
      id: 3,
      title: 'Restaurante Gourmet',
      category: 'comercial',
      description: 'Ambiente acolhedor com iluminação estratégica',
      image: '🍽️'
    },
    {
      id: 4,
      title: 'Escritório Corporativo',
      category: 'corporativo',
      description: 'Espaço produtivo e inspirador para equipes',
      image: '🏢'
    },
    {
      id: 5,
      title: 'Casa de Campo',
      category: 'residencial',
      description: 'Design rústico-chique com elementos naturais',
      image: '🏘️'
    },
    {
      id: 6,
      title: 'Clínica Médica',
      category: 'comercial',
      description: 'Ambiente tranquilo e profissional',
      image: '🏥'
    },
  ];

  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-crimson font-bold text-primary mb-6">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformaram sonhos em realidade
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gold-500 text-white shadow-lg'
                  : 'bg-white text-muted-foreground hover:bg-gold-50 hover:text-gold-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-cream-100 to-cream-200 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-crimson font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 pt-4 border-t border-cream-200">
                  <span className="inline-block px-3 py-1 bg-gold-100 text-gold-600 text-sm font-medium rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
