'use client';

import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      location: 'Remoto / Angola',
      period: '2022 - Presente',
      description:
        'Arquitetura e desenvolvimento de sistemas backend escaláveis. Infraestrutura com Kubernetes, CI/CD pipelines, e otimização de performance.',
      skills: ['Node.js', 'React', 'AWS', 'Docker', 'PostgreSQL'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Innovation',
      location: 'Remoto',
      period: '2020 - 2022',
      description:
        'Desenvolvimento fullstack de aplicações web. RESTful APIs, autenticação, integração com third-party services.',
      skills: ['React', 'Express', 'MongoDB', 'Azure', 'Redis'],
    },
    {
      title: 'Backend Developer',
      company: 'Digital Solutions',
      location: 'Luanda, Angola',
      period: '2019 - 2020',
      description:
        'Desenvolvimento de APIs robustas. Banco de dados, otimização de queries, e implementação de cache.',
      skills: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    },
  ];

  return (
    <section
      id="experiencia"
      className="py-20 bg-surface/50 border-t border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-4">
            Experiência<span className="text-neon"> Profissional</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Trajetória profissional focada em desenvolvimento fullstack com ênfase em infraestrutura e soluções escaláveis.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border border-border-neon-hover rounded-lg p-6 bg-background/50 hover:bg-surface/50 transition-all duration-300 hover:border-neon"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-lg text-neon font-semibold">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin size={16} />
                <span className="text-sm">{exp.location}</span>
              </div>

              <p className="text-foreground/80 mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/20 text-neon text-xs font-semibold rounded border border-neon/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
