'use client';

import { Award, Clock, Users } from 'lucide-react';

export function Courses() {
  const courses = [
    {
      title: 'Advanced System Design',
      provider: 'Coursera',
      duration: '6 meses',
      students: '500+',
      description: 'Arquitetura de sistemas escaláveis e design patterns avançados.',
      category: 'Backend',
    },
    {
      title: 'React Performance Optimization',
      provider: 'Udemy',
      duration: '4 meses',
      students: '1.2k',
      description: 'Otimização de aplicações React, memoization, e code splitting.',
      category: 'Frontend',
    },
    {
      title: 'Kubernetes in Production',
      provider: 'Pluralsight',
      duration: '3 meses',
      students: '800+',
      description: 'Deploy, scaling e gerenciamento de clusters Kubernetes.',
      category: 'DevOps',
    },
    {
      title: 'Machine Learning Fundamentals',
      provider: 'Andrew Ng - Coursera',
      duration: '5 meses',
      students: '10k+',
      description: 'Fundamentos de Machine Learning, redes neurais e TensorFlow.',
      category: 'IA',
    },
    {
      title: 'Cloud Architecture AWS',
      provider: 'A Cloud Guru',
      duration: '4 meses',
      students: '2k+',
      description: 'AWS Solutions Architect, lambda, RDS, e EC2.',
      category: 'Cloud',
    },
    {
      title: 'TypeScript Advanced Patterns',
      provider: 'egghead.io',
      duration: '2 meses',
      students: '600+',
      description: 'Padrões avançados de TypeScript e type-safe development.',
      category: 'Frontend',
    },
  ];

  const categories = ['Backend', 'Frontend', 'DevOps', 'IA', 'Cloud'];

  return (
    <section id="cursos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-4">
            Cursos &<span className="text-neon"> Certificações</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Educação contínua em tecnologias atuais e tendências do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="border border-neon/20 rounded-lg p-6 bg-surface/30 hover:bg-surface/60 transition-all duration-300 hover:border-neon hover:glow-neon group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-neon text-xs font-bold rounded-full mb-3">
                  {course.category}
                </span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-neon transition-colors">
                  {course.title}
                </h3>
                <p className="text-neon text-sm font-semibold mt-2">
                  {course.provider}
                </p>
              </div>

              <p className="text-foreground/70 text-sm mb-4">{course.description}</p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={16} className="text-neon" />
                  <span className="text-xs">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users size={16} className="text-neon" />
                  <span className="text-xs">{course.students}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
