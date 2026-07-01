# Guia de Customização - Portfólio Full Stack Developer

## Visão Geral

Seu portfólio está pronto com um design moderno, dark mode com neon vermelho e todas as seções principais. Este guia explica como customizá-lo com suas informações pessoais.

## Estrutura do Projeto

```
/app
  ├── page.tsx           # Página principal (importa todos os componentes)
  ├── layout.tsx         # Layout raiz com metadados
  └── globals.css        # Estilos globais e tema neon

/components
  ├── navbar.tsx         # Navegação fixa
  ├── hero.tsx           # Hero section com CTA
  ├── stats.tsx          # Grid de 4 cards com estatísticas
  ├── projects.tsx       # Grid 2x2 com projetos
  ├── skills.tsx         # Grid 3x2 com skills por categoria
  ├── certifications.tsx # Cards de certificações
  ├── contact.tsx        # Seção de contato + formulário
  └── footer.tsx         # Rodapé com links
```

## Como Customizar

### 1. Informações Básicas (Hero Section)

Edite `components/hero.tsx`:

```tsx
// Altere o nome/título
<h1 className="text-5xl md:text-6xl font-black text-balance leading-tight">
  Soluções que <span className="text-neon drop-shadow-lg">resolvem</span> problemas reais
</h1>

// Altere a descrição
<p className="text-lg text-muted-foreground max-w-xl pt-4">
  Full Stack Developer focado em infraestrutura, backend escalável e soluções de impacto real...
</p>
```

### 2. Adicionar Sua Foto de Perfil
 
Edite `components/hero.tsx` e substitua o placeholder:

```tsx
<div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center border border-neon/20">
  {/* Remova o placeholder e adicione */}
  <img 
    src="/profile.jpg" 
    alt="Seu Nome" 
    className="w-full h-full object-cover rounded-lg"
  />
</div>
```

Coloque a imagem em `/public/profile.jpg`.

### 3. Atualizar Estatísticas

Edite `components/stats.tsx`, modifique o array `stats`:

```tsx
const stats = [
  {
    icon: Code2,
    number: '15+',      // Seu número
    label: 'Projetos',
    sublabel: 'Concluídos',
  },
  // ... mais stats
];
```

### 4. Adicionar Seus Projetos

Edite `components/projects.tsx`, modifique o array `projects`:

```tsx
const projects: Project[] = [
  {
    id: 1,
    title: 'Nome do Seu Projeto',
    category: 'FULL STACK',
    description: 'Descrição detalhada do projeto...',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://seu-projeto.com',
  },
  // ... mais projetos
];
```

### 5. Customizar Skills

Edite `components/skills.tsx`, modifique `skillCategories`:

```tsx
const skillCategories = [
  {
    category: 'Frontend',
    icon: Code,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  // ... mais categorias
];
```

### 6. Adicionar Certificações

Edite `components/certifications.tsx`, modifique o array `certifications`:

```tsx
const certifications: Certification[] = [
  {
    id: 1,
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    icon: '☁️', // Use emojis ou remova e use ícones
  },
  // ... mais certificações
];
```

### 7. Informações de Contato

Edite `components/contact.tsx`:

```tsx
// Email
<a href="mailto:seu-email@exemplo.com">

// LinkedIn
<a href="https://linkedin.com/in/seu-perfil">

// Localização
<p className="font-bold text-foreground">Sua Cidade, País</p>

// Formulário
// O formulário atualmente é apenas UI - você pode integrar com um serviço
// como Formspree, EmailJS ou sua própria API
```

### 8. Links Sociais (Navbar + Footer)

Edite `components/navbar.tsx` e `components/footer.tsx`:

```tsx
// Atualize os links href
<a href="https://github.com/seu-username" target="_blank" rel="noopener noreferrer">
```

### 9. Atualizar Metadados

Edite `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Seu Nome - Full Stack Developer',
  description: 'Portfólio profissional de Seu Nome. Full Stack Developer...',
};
```

### 10. Cores (Tema Neon)

O tema está em `app/globals.css`. As cores principais são:

- **Background**: `oklch(8% 0 0)` - Preto profundo
- **Primary (Neon Red)**: `oklch(60% 0.2 25)` - Vermelho neon
- **Foreground**: `oklch(95% 0 0)` - Branco

Para mudar a cor neon, edite os valores `oklch(60% 0.2 25)` em:

```css
.dark {
  --primary: oklch(60% 0.2 25);  /* Altere este valor */
}
```

Exemplos de cores alternativas:
- Ciano: `oklch(65% 0.2 200)`
- Verde: `oklch(60% 0.2 150)`
- Roxo: `oklch(60% 0.2 300)`

## Integração do Formulário de Contato

O formulário em `components/contact.tsx` é apenas UI. Para funcionar, você pode usar:

### Opção 1: Formspree (Recomendado)

1. Vá para [formspree.io](https://formspree.io)
2. Crie uma conta e novo form
3. Altere em `components/contact.tsx`:

```tsx
<form action="https://formspree.io/f/SEU_FORM_ID" method="POST" className="space-y-4">
  {/* campos existentes */}
  <input type="email" name="email" placeholder="seu@email.com" required />
</form>
```

### Opção 2: API Própria (Next.js Route Handler)

Crie `app/api/contact/route.ts`:

```ts
export async function POST(req: Request) {
  const data = await req.json();
  // Processe o email (use Resend, SendGrid, etc)
  return Response.json({ success: true });
}
```

## Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub
2. Clique em "Deploy"
3. Configure variáveis de ambiente se necessário

### Outros Hosts

O projeto usa apenas dependências estáticas. Funciona em qualquer host que suporte Next.js.

## Próximos Passos

1. ✅ Adicione sua foto em `/public/profile.jpg`
2. ✅ Atualize seus projetos, skills e certificações
3. ✅ Configure os links sociais
4. ✅ Integre o formulário de contato
5. ✅ Customize as cores se desejar
6. ✅ Deploy na Vercel

## Dúvidas?

- Verifique os comentários nos componentes
- Componentes estão bem estruturados e documentados
- Use o DevTools do navegador para testar estilos

Boa sorte com seu portfólio! 🚀
