'use client';

import { Code, Database, Cloud, Cpu, GitBranch, Shield } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    },
    {
      category: 'Backend',
      icon: Cpu,
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      category: 'Infraestrutura',
      icon: Cloud,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    },
    {
      category: 'Dados',
      icon: Database,
      skills: ['SQL', 'Redis', 'ElasticSearch', 'Data Mining', 'ETL'],
    },
    {
      category: 'DevOps',
      icon: GitBranch,
      skills: ['Git', 'GitHub Actions', 'Terraform', 'Vercel', 'nginx'],
    },
    {
      category: 'Segurança',
      icon: Shield,
      skills: ['OAuth', 'JWT', 'SSL/TLS', 'OWASP', 'Pentesting'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-neon mb-2">
              Skills & Tecnologias
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-balance">
              Ferramentas do meu{' '}
              <span className="text-neon drop-shadow-lg">poder</span>
            </h2>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg bg-card border border-neon/20 hover:border-neon transition-all duration-300 glow-neon-hover"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded flex items-center justify-center bg-primary/20 border border-neon/50 group-hover:bg-primary/40 transition-colors">
                    <Icon className="text-neon" size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-neon transition-colors">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded border border-primary/30 group-hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
