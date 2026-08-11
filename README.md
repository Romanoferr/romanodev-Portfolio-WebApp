# Romanodev Portfolio

Portfólio profissional de serviços de tecnologia construído com **Vite**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion** e **Lucide React**.

## Visão geral

Esta landing page é uma base de portfólio focada em apresentar serviços de desenvolvimento, automação e sistemas personalizados para pequenas e médias empresas, startups e profissionais autônomos.

## Recursos incluídos

- Layout responsivo com navegação desktop e mobile
- Hero com padrão vetorial e animação de entrada
- Seções de serviços, diferenciais, projetos, processo, sobre e contato
- Ilustrações vetoriais personalizadas para projetos
- SEO com JSON-LD para `LocalBusiness` / `Service`
- Imagem de perfil otimizada com AVIF/WebP/JPEG
- Configuração Tailwind + PostCSS + Vite

## Scripts úteis

```bash
npm install
npm run dev
npm run build
npm run preview
npm run typecheck
npm run image-optimize
```

## Estrutura do projeto

- `src/`
  - `components/` — componentes UI e layout reutilizáveis
  - `sections/` — blocos de página como Hero, Services, Projects, About, Contact
  - `data/` — conteúdo reutilizável para textos, serviços e contatos
  - `utils/` — utilitários como o wrapper de motion
- `public/images/` — imagens otimizadas geradas para produção
- `scripts/image-optimize.js` — pipeline de geração de AVIF/WebP/JPEG

## Otimização de imagens

A imagem de perfil é processada pelo script `scripts/image-optimize.js` usando **Sharp**. Ele gera versões em:

- AVIF
- WebP
- JPEG

Execute:

```bash
npm run image-optimize
```

## Personalização

Para adaptar o portfolio ao seu perfil, atualize:

- `src/data/personal.ts` — nome, cargo e apresentação
- `src/data/contact.ts` — email, WhatsApp e redes sociais
- `src/data/services.ts` — lista de serviços oferecidos
- `src/sections/About.tsx` — texto e estrutura da seção sobre
- `src/components/SeoJsonLd.tsx` — dados estruturados e SEO

## Desenvolvimento

1. Instale dependências:

```bash
npm install
```

2. Rode o servidor local:

```bash
npm run dev
```

3. Faça o build de produção:

```bash
npm run build
```

4. Verifique tipos TypeScript:

```bash
npm run typecheck
```

## Observações

- O projeto usa `max-w-7xl` em vários containers para manter alinhamento visual.
- Use `public/images/` para os assets finais de imagem e mantenha `src/public/images/` como fonte de origem de otimização, se preferir.
- Se desejar, adicione `og:image` e `twitter:image` manualmente em `index.html` para melhorar compartilhamento.

---

Desenvolvido para apresentar serviços de tecnologia de forma sóbria, moderna e com foco em conversão.