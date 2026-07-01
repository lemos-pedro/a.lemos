'use client';

import { Award } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  icon: string;
}

export function Certifications() {
  const certifications: Certification[] = [
    {
      id: 1,
      title: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: '☁️',
    },
    {
      id: 2,
      title: 'Kubernetes Administrator',
      issuer: 'Linux Foundation',
      date: '2024',
      icon: '⚙️',
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      issuer: 'Meta & Google',
      date: '2023',
      icon: '💻',
    },
    {
      id: 4,
      title: 'Data Science Professional',
      issuer: 'Coursera',
      date: '2023',
      icon: '📊',
    },
  ];

  return (
    <section id="certificacoes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-neon mb-2">
            Credenciais
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-balance">
            Conhecimento <span className="text-neon drop-shadow-lg">validado</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group p-6 rounded-lg bg-card border border-neon/20 hover:border-neon transition-all duration-300 glow-neon-hover flex items-start gap-4"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-neon/50 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary/40 transition-colors">
                {cert.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground group-hover:text-neon transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-primary mt-2">{cert.date}</p>
              </div>

              {/* Badge */}
              <Award className="text-neon/40 group-hover:text-neon transition-colors flex-shrink-0 mt-1" size={20} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
