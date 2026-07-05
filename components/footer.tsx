'use client';

import { Heart, Mail } from 'lucide-react';
import type { SVGProps } from 'react';

// lucide-react removeu os ícones de marcas (GitHub, LinkedIn, Twitter/X) das
// versões recentes por serem logótipos de terceiros. Usamos SVGs próprios,
// no mesmo padrão dos ícones lucide (viewBox 24x24, currentColor).
function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.19-1.18 3.19-1.18.63 1.59.23 2.77.11 3.06.75.81 1.2 1.83 1.2 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.2 8.23L23.3 22h-6.62l-5.18-6.77L5.5 22H2.37l7.7-8.8L1 2h6.78l4.68 6.2L18.9 2Zm-1.16 18.06h1.83L7.34 3.84H5.38l12.36 16.22Z" />
    </svg>
  );
}

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contato' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/lemos-pedro', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ariclene-lemos', icon: LinkedinIcon },
  { label: 'Twitter', href: 'https://twitter.com/seu-usuario', icon: TwitterIcon },
  { label: 'Email', href: 'ariclene.lemos@outlook.com', icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neon/20 bg-background/50 backdrop-blur py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-neon mb-2">a-lemos.dev</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Full Stack Developer focado em infraestrutura, backend escalável e
              soluções de impacto real.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase text-sm tracking-widest">
              Links Rápidos
            </h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-muted-foreground hover:text-neon transition-colors w-fit"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase text-sm tracking-widest">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded border border-neon/30 flex items-center justify-center text-muted-foreground hover:text-neon hover:border-neon transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neon/20 pt-8">
          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground text-center md:text-left">
            <p>© {currentYear} Ariclene Lemos. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1.5">
              Feito com <Heart size={14} className="text-primary fill-primary" /> por Zentury Tech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}