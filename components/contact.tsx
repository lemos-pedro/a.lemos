'use client';

import { Mail, MapPin, Share2, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-neon mb-2">
                Vamos Conversar?
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-balance">
                Precisa de alguém que{' '}
                <span className="text-neon drop-shadow-lg">resolva?</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-md">
                Aberto a novas oportunidades, ideias e projetos que geram impacto
                real. Vamos trabalhar juntos?
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:ariclene.lemos@outlook.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-neon/20 hover:border-neon hover:bg-primary/5 transition-all group"
              >
                <div className="w-12 h-12 rounded bg-primary/20 border border-neon/50 flex items-center justify-center">
                  <Mail className="text-neon" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <p className="font-bold text-foreground group-hover:text-neon transition-colors">
                    ariclene.lemos@outlook.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-neon/20">
                <div className="w-12 h-12 rounded bg-primary/20 border border-neon/50 flex items-center justify-center">
                  <MapPin className="text-neon" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Localização
                  </p>
                  <p className="font-bold text-foreground">Luanda,Angola</p>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-neon/20">
                <div className="w-12 h-12 rounded bg-primary/20 border border-neon/50 flex items-center justify-center">
                  <Share2 className="text-neon" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    LinkedIn
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-neon hover:text-primary-light transition-colors"
                  >
                    linkedin.com/in/ariclene-lemos
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA Card */}
          <div className="h-full">
            <div className="p-8 rounded-lg bg-card border border-neon/20 glow-neon space-y-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-foreground">
                  Inicializar Conversa
                </h3>
                <p className="text-muted-foreground">
                  Estou sempre disponível para discutir novos projetos, ideias
                  criativas ou oportunidades para fazer parte da sua visão.
                </p>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full px-4 py-3 bg-background border border-neon/20 rounded text-foreground placeholder:text-muted-foreground focus:border-neon focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-background border border-neon/20 rounded text-foreground placeholder:text-muted-foreground focus:border-neon focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Sua mensagem..."
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-neon/20 rounded text-foreground placeholder:text-muted-foreground focus:border-neon focus:outline-none transition-colors resize-none"
                />
                <button className="w-full px-6 py-3 bg-neon text-background font-bold rounded text-sm uppercase tracking-widest glow-neon-hover group flex items-center justify-center gap-2">
                  Enviar Mensagem
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
