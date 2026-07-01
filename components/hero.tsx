'use client';

import { ArrowRight, GitBranch, Share2, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 fade-in">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Ariclene Pedro de Lemos
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-balance leading-tight">
              Full Stack Developer
            </h1>
            <p className="text-xl text-neon font-semibold">
              Soluções que{' '}
              <span className="text-accent drop-shadow-lg">resolvem</span> problemas
              reais
            </p>
            <p className="text-lg text-muted-foreground max-w-xl pt-4">
              Full Stack Developer focado em infraestrutura, backend escalável e
              soluções de impacto real. Transformo ideias complexas em sistemas
              robustos, inteligentes e eficientes.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-3 bg-neon text-background font-bold rounded text-sm uppercase tracking-widest glow-neon-hover group">
              VER PROJETOS
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button className="px-8 py-3 border border-neon text-neon font-bold rounded text-sm uppercase tracking-widest border-neon-hover">
              CONTATAR
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-8">
            <a
              href="#"
              className="w-10 h-10 rounded border border-neon/50 flex items-center justify-center text-neon hover:bg-neon hover:text-background transition-all duration-300 glow-neon-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded border border-neon/50 flex items-center justify-center text-neon hover:bg-neon hover:text-background transition-all duration-300 glow-neon-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Share2 size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded border border-neon/50 flex items-center justify-center text-neon hover:bg-neon hover:text-background transition-all duration-300 glow-neon-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image Placeholder */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-80 h-80">
            {/* Neon border effect */}
            <div className="absolute inset-0 border-2 border-neon/30 rounded-2xl glow-neon" />
            <div className="absolute inset-2 border border-neon/20 rounded-2xl" />

            {/* Profile image area */}
            <img 
                src="/lee.png" 
                alt="Seu Nome" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
