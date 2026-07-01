'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#inicio', label: 'INÍCIO' },
    { href: '#projetos', label: 'PROJETOS' },
    { href: '#experiencia', label: 'EXPERIÊNCIA' },
    { href: '#cursos', label: 'CURSOS' },
    { href: '#contratacoes', label: 'CONTRATAÇÕES' },
    { href: '#contato', label: 'CONTATO' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-neon/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="#inicio"
            className="text-lg font-bold text-neon tracking-wider hover:text-primary-light transition-colors"
          >
            <span className="hidden sm:inline">Ariclene de Lemos</span>
            <span className="sm:hidden">APL</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-neon transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <button className="hidden md:inline-flex px-6 py-2 border border-neon text-neon text-sm font-bold rounded hover:bg-neon hover:text-background transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
            DOWNLOAD CV
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neon hover:text-primary-light transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-neon/20">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-neon transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mx-4 mt-4 px-6 py-2 border border-neon text-neon text-sm font-bold rounded hover:bg-neon hover:text-background transition-all duration-300">
              DOWNLOAD CV
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
