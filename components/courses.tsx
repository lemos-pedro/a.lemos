'use client';

import { Award, Calendar } from 'lucide-react';

export function Courses() {
  const courses = [
    {
      title: 'PMI Kickoff',
      provider: 'Project Management Institute (PMI)',
      year: '2025',
      description:
        'Introdução aos fundamentos da gestão de projetos, papéis do gestor de projetos e ciclo de vida de projetos.',
      category: 'Project Management',
    },
    {
      title: 'Gestão de Projetos',
      provider: 'Fundação Bradesco',
      year: '2025',
      description:
        'Planeamento, execução, monitoramento e encerramento de projetos utilizando boas práticas de gestão.',
      category: 'Project Management',
    },
    {
      title: 'Gestão e Segurança da Informação',
      provider: 'Fundação Bradesco',
      year: '2025',
      description:
        'Princípios de segurança da informação, gestão de riscos e proteção de ativos digitais.',
      category: 'Cybersecurity',
    },
    {
      title: 'Lei Geral de Proteção de Dados (LGPD)',
      provider: 'Fundação Bradesco',
      year: '2025',
      description:
        'Fundamentos da LGPD, privacidade de dados e boas práticas de proteção de informações.',
      category: 'Security',
    },
    {
      title: 'Programação Web',
      provider: 'Fundação Bradesco',
      year: '2025',
      description:
        'Fundamentos do desenvolvimento web utilizando HTML, CSS e JavaScript.',
      category: 'Web Development',
    },
    {
      title: 'Programação Web',
      provider: 'Microsoft',
      year: '2025',
      description:
        'Introdução ao desenvolvimento de aplicações web modernas e tecnologias da plataforma Microsoft.',
      category: 'Web Development',
    },
  ];

  return (
    <section id="cursos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Cursos & <span className="text-neon">Certificações</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl">
            Formação complementar voltada para desenvolvimento de software,
            gestão de projetos e segurança da informação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="border border-neon/20 rounded-lg p-6 bg-surface/30 hover:border-neon transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-neon">
                  {course.category}
                </span>

                <Award size={20} className="text-neon" />
              </div>

              <h3 className="text-xl font-bold">{course.title}</h3>

              <p className="text-neon font-medium mt-1">
                {course.provider}
              </p>

              <p className="text-sm text-muted-foreground mt-4">
                {course.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground border-t border-border pt-4">
                <Calendar size={16} className="text-neon" />
                {course.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}