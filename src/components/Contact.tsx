
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 99999-9999',
      description: 'Ligue para agendar uma consulta'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@designinteriores.com',
      description: 'Envie sua mensagem'
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'São Paulo, SP',
      description: 'Atendemos toda a região metropolitana'
    },
    {
      icon: Clock,
      title: 'Horário',
      value: 'Seg à Sex: 9h às 18h',
      description: 'Sáb: 9h às 12h'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cream-50 to-cream-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronta para transformar seu espaço? Entre em contato e vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-gold-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                    <p className="text-lg font-medium text-foreground mb-1">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
                Solicite um Orçamento
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tipo de Projeto
                    </label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors">
                      <option>Selecione uma opção</option>
                      <option>Residencial</option>
                      <option>Comercial</option>
                      <option>Corporativo</option>
                      <option>Consultoria</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Descreva seu projeto
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors resize-none"
                    placeholder="Conte-me sobre seu projeto, suas ideias e expectativas..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white font-medium py-4 transition-all duration-300 hover:scale-105"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
