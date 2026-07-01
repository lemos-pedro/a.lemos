'use client';

import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'EpiShield',
      category: 'IA & SAÚDE',
      description:
        'Sistema de vigilância epidemiológica com diagnóstico de malária via CNN (94.83% de precisão no NIH Malaria Dataset), backend FastAPI, PostgreSQL e frontend React com Mapbox. Projecto final (TCC) apresentado na escola e numa feira tecnológica.',
      tags: ['FastAPI', 'PostgreSQL', 'CNN', 'React', 'Mapbox', 'Docker'],
      link: '#',
    },
    {
      id: 2,
      title: 'ANTOSC Monitoring Backend',
      category: 'INFRAESTRUTURA',
      description:
        'Backend de monitorização de torres para a ANTOSC, com schemas dedicados (core, metrics, operations), ingestão em lote, logging estruturado e simulador de 215 sites reais.',
      tags: ['FastAPI', 'PostgreSQL', 'Loguru', 'Docker'],
      link: '#',
    },
    {
      id: 3,
      title: 'Ngola Suite',
      category: 'SAAS PLATFORM',
      description:
        'Plataforma SaaS de gestão de projectos e saúde para o mercado angolano/africano, com Ngola Projects (gestão de equipas) e ED Chat (mensagens em tempo real com vídeo via LiveKit).',
      tags: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
      link: '#',
    },
    {
      id: 4,
      title: 'ED Chat',
      category: 'REAL-TIME',
      description:
        'Plataforma de chat em tempo real com WebSockets e chamadas de vídeo via LiveKit, implementada em AWS EC2 com Nginx e SSL.',
      tags: ['WebSocket', 'LiveKit', 'AWS EC2', 'Nginx', 'NestJS'],
      link: '#',
    },

    {
      id: 5,
      title: 'BancoKZ v1.0',
      category: 'PROJECTO FREELANCE',
      description:
        'Sistema bancário desenvolvido em C, entregue como projecto freelance para outro estudante, incluindo lógica de contas, transacções e gestão de saldo.',
      tags: ['C', 'Sistemas', 'Freelance'],
      link: '#',
    },
  ];

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-neon mb-2">
              Meus Projetos
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-balance">
              Soluções que geram{' '}
              <span className="text-neon drop-shadow-lg">impacto</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm font-bold text-neon hover:text-primary-light transition-colors uppercase tracking-widest"
          >
            VER TODOS
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group p-6 rounded-lg bg-card border border-neon/20 hover:border-neon transition-all duration-300 glow-neon-hover overflow-hidden"
            >
              {/* Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-neon/10 text-neon text-xs font-bold uppercase tracking-widest rounded border border-neon/30">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-neon transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow Icon */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="text-neon" size={20} />
              </div>
            </a>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden flex justify-center">
          <button className="px-8 py-3 border border-neon text-neon font-bold rounded text-sm uppercase tracking-widest border-neon-hover">
            VER TODOS OS PROJETOS
          </button>
        </div>
      </div>
    </section>
  );
}