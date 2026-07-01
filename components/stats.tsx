'use client';

import { Code2, Package, Zap, Target } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Code2,
      number: '10+',
      label: 'Projetos',
      sublabel: 'Concluídos',
    },
    {
      icon: Package,
      number: '5+',
      label: 'Tecnologias',
      sublabel: 'Dominadas',
    },
    {
      icon: Zap,
      number: '95%',
      label: 'Precisão',
      sublabel: 'em IA',
    },
    {
      icon: Target,
      number: '100%',
      label: 'Focado em',
      sublabel: 'Impacto Real',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg bg-card border border-neon/20 hover:border-neon transition-all duration-300 glow-neon-hover"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-3xl md:text-4xl font-black text-neon">
                      {stat.number}
                    </p>
                    <p className="text-sm uppercase tracking-widest font-bold text-foreground">
                      {stat.label}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase">
                      {stat.sublabel}
                    </p>
                  </div>
                  <Icon className="text-neon/40 group-hover:text-neon transition-colors" size={32} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
