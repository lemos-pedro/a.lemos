'use client';

import { CheckCircle, Clock, FileText, MessageSquare } from 'lucide-react';

export function Hiring() {
  const hiringOptions = [
    {
      title: 'Consultoria Técnica',
      icon: MessageSquare,
      description:
        'Code reviews, arquitetura de sistemas, mentoria para equipes e análise de performance.',
      rate: 'Sob demanda',
      availability: 'Flex',
    },
    {
      title: 'Desenvolvimento Full Stack',
      icon: FileText,
      description:
        'Projetos customizados, APIs, aplicações web, integração com serviços, deployment.',
      rate: 'Por projeto',
      availability: 'Imediata',
    },
    {
      title: 'Otimização & Performance',
      icon: CheckCircle,
      description:
        'Análise de performance, otimização de banco de dados, escalabilidade, refatoração.',
      rate: 'Por sprint',
      availability: 'Flex',
    },
    {
      title: 'Suporte & Manutenção',
      icon: Clock,
      description:
        'Suporte técnico, manutenção de sistemas, bug fixes, updates de dependências.',
      rate: 'Contrato',
      availability: 'Contínua',
    },
  ];

  return (
    <section id="contratacoes" className="py-20 bg-surface/50 border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-4">
            Disponível para<span className="text-neon"> Contratação</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Ofereço soluções customizadas e suporte técnico para seus projetos.
            Vamos discutir como posso ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {hiringOptions.map((option, idx) => {
            const Icon = option.icon;
            return (
              <div
                key={idx}
                className="border border-neon/20 rounded-lg p-8 bg-background/50 hover:bg-surface/50 hover:border-neon transition-all duration-300 group"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-neon group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-foreground/70 mb-6">{option.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Taxa</p>
                    <p className="font-bold text-neon">{option.rate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Disponibilidade</p>
                    <p className="font-bold text-foreground">{option.availability}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="border border-neon/20 rounded-lg p-8 md:p-12 bg-gradient-to-r from-primary/10 to-primary/5 text-center">
          <h3 className="text-3xl font-bold mb-4">Interessado em trabalhar juntos?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre seu projeto e como posso contribuir para seu
            sucesso. Envie uma mensagem com detalhes do seu projeto.
          </p>
          <button className="px-8 py-3 bg-neon text-background font-bold rounded text-base uppercase tracking-widest glow-neon-hover hover:scale-105 transition-all duration-300">
            Enviar Proposta de Projeto
          </button>
        </div>

        {/* Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Como Funciona</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Discussão', desc: 'Entenda seus requisitos' },
              { step: '2', title: 'Proposta', desc: 'Apresento uma solução' },
              { step: '3', title: 'Acordo', desc: 'Definimos timeline' },
              { step: '4', title: 'Execução', desc: 'Entrego com qualidade' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-neon text-background rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
