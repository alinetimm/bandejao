# Site Bandejão Refeições

Site institucional da **Bandejão Refeições** (alimentação coletiva em Pelotas e Rio Grande/RS).
Front-end completo e navegável, fiel ao Figma, com **ganchos prontos para o back-end** — o envio
real do formulário de orçamento ainda não existe (ver [`docs/HANDOFF.md`](docs/HANDOFF.md)).

- Figma (fonte da verdade do layout): [Site Bandejão](https://www.figma.com/design/bMnVEC9ThQfZwxNVh8iSi2/Site-Bandej%C3%A3o?node-id=0-1)
  — frames desktop "Home", "Serviços", "Quem Somos", "Contatos" e as versões mobile "… Android".
- Textos de todas as páginas: [`docs/CONTEUDO.md`](docs/CONTEUDO.md)
- Pendências e contrato da API: [`docs/HANDOFF.md`](docs/HANDOFF.md)
- Regras do projeto (para quem continuar o trabalho, inclusive com IA): [`CLAUDE.md`](CLAUDE.md)

## Tecnologias

Next.js 15 (Pages Router) · React 18 · TypeScript (strict) · Tailwind CSS 3 · fonte Poppins
(`next/font`) · `next/image` · HeroUI (só a navbar mobile) · Embla Carousel · React Hook Form + Zod.

## Como rodar

Requisitos: Node.js 20 ou mais recente e npm.

```bash
npm install
cp .env.example .env.local   # opcional — ver "Variáveis de ambiente"
npm run dev                  # http://localhost:3000
```

| Comando | O que faz |
|---|---|
| `npm run dev` | servidor de desenvolvimento |
| `npm run lint` | ESLint + Prettier (corrige o que for automático) |
| `npx tsc --noEmit` | checagem de tipos |
| `npm run build` | build de produção |
| `npm start` | serve o build de produção |

### Variáveis de ambiente

| Variável | Para que serve | Vazio |
|---|---|---|
| `NEXT_PUBLIC_QUOTE_ENDPOINT` | URL que recebe o POST do formulário de orçamento | usa a rota local `/api/orcamento` (responde 501) |
| `NEXT_PUBLIC_SITE_URL` | domínio de produção, sem barra final (ex.: `https://www.exemplo.com.br`) | `og:url` e `canonical` ficam de fora; `og:image` usa caminho relativo |

## Estrutura de pastas

```
components/
  layout/      Navbar, Footer, ContactBlock (logo + endereços + formulário), PageLayout, SeoHead
  ui/          SectionTitle, SmartImage, ImagePlaceholder, Button, Carousel, SocialLinks, RichText
  forms/       QuoteForm (formulário "Solicite um orçamento")
  sections/
    home/      uma seção da Home por arquivo (Hero, ServicesCarousel, … Avaliacoes)
    services/  ServiceBlock — um bloco da página Serviços, com 3 variantes de layout
    about/     NossaHistoria, OQueFazemos, NossaFilosofia, NossoDiferencial, VamosConversar
content/       TODO o texto e as referências de imagem, tipados (home, services, about,
               diferenciais, gallery, partners, testimonials, site)
config/        site.ts (menu, unidades, telefones, links sociais, domínio), fonts.ts
lib/api/       quote.ts (submitQuote), schemas.ts (validação Zod), types.ts
lib/masks.ts   máscara de telefone
pages/         index, services, about, contact, 404, api/orcamento (stub)
public/
  favicon.ico, apple-touch-icon.png
  assets/brand/       logos (navbar/rodapé e hero), ícone 512px, imagem de compartilhamento (OG)
  assets/icons/       ícones do Figma (redes sociais, setas, marcadores, diferenciais/)
  assets/images/      fotos por página: home/, services/, about/, gallery/
  assets/partners/    logos dos parceiros
  assets/_referencia/ arquivos antigos e prints do layout — NÃO usados no site, só referência
styles/globals.css    altura da navbar (--header-h), foco visível, rolagem suave
legacy/               versão antiga (CRA), desatualizada — ignorar
```

Rotas: `/` (Home), `/services` (Serviços), `/about` (Quem Somos), `/contact` (Contato).
Cada bloco de Serviços tem âncora: `/services#empresas`, `#hospitalares`, `#delivery`,
`#cantinas`, `#buffet`. O formulário do rodapé tem a âncora `#orcamento`.

## Como trocar conteúdo

**Os componentes não têm texto fixo**: tudo está em `content/*.ts` (e contatos em `config/site.ts`).
Edite o arquivo, salve e o site atualiza — não é preciso mexer em layout.

| Quero mudar… | Arquivo |
|---|---|
| Textos da Home, cards do carrossel, banner do delivery | `content/home.ts` |
| Os 8 diferenciais (texto e ícone) | `content/diferenciais.ts` |
| Fotos da galeria | `content/gallery.ts` |
| Logos dos parceiros | `content/partners.ts` |
| Avaliações | `content/testimonials.ts` |
| Blocos da página Serviços | `content/services.ts` |
| Página Quem Somos | `content/about.ts` |
| Página 404 | `content/site.ts` |
| Menu, endereços, telefones, redes sociais, iFood, Google Maps, domínio | `config/site.ts` |
| Descrição de cada página (Google/compartilhamento) | prop `description` do `PageLayout` em `pages/*.tsx` |

Detalhes úteis:
- **Negrito dentro de uma frase** usa o formato `RichText`:
  `["Servimos há mais de ", { forte: "30 anos" }, "."]` (`{ forte, italico: true }` para negrito itálico).
- **`\n`** em alguns textos reproduz a quebra de linha do Figma a partir do tablet/desktop.
- **Links ainda sem endereço** usam `"#"` e não abrem nova aba; basta trocar pelo endereço real em
  `config/site.ts` (os links externos passam a abrir em nova aba automaticamente).
- A ordem dos itens nos arquivos é a ordem em que aparecem no site.

## Como trocar imagens e logos

1. Coloque o arquivo na pasta certa em `public/assets/` (veja a estrutura acima). Prefira **JPEG**
   para fotos e **PNG ou WebP quando houver transparência** (ex.: o prato do delivery, logos).
   Tamanho recomendado: cerca de **2× a largura em que a imagem aparece** no desktop.
2. Aponte o `src` no `content/*.ts` correspondente para o novo caminho (começando em `/assets/...`)
   e escreva um `alt` descritivo em português.
3. Se a foto ainda não existir, deixe `src` vazio e preencha `hint` — o site mostra um
   **placeholder** com borda tracejada no tamanho exato da foto (componente `SmartImage`).

Campos das fotos em `content/`:
- `aspect` / `aspectMobile`: proporção da área da foto no desktop e no mobile (largura/altura do
  Figma, ex.: `"458/210"`). A foto é recortada para caber (`object-cover`), sem distorcer.
- `focus`: qual parte da foto fica visível no recorte (`object-position`, ex.: `"center 40%"`).

**Logos e ícones da marca** (`public/assets/brand/`):
- `logo.svg` — logo branco da navbar e do rodapé
- `logo-hero.svg` — logo grande do topo da Home
- `og-image.jpg` — imagem que aparece ao compartilhar o link (1200×630)
- `icon-512.png`, `/favicon.ico`, `/apple-touch-icon.png` — ícones gerados a partir do "b" do logo;
  troque os três se a marca tiver um ícone oficial.

Logos de parceiros: adicione o PNG em `public/assets/partners/` e uma linha em `content/partners.ts`
(`p("id-do-arquivo", "Nome do parceiro")`). A grade mostra 5 por linha.

## Responsivo e acessibilidade

- Desktop segue os frames do Figma em 1440px; mobile segue os frames "Android" (proporções e
  ordem), com tamanhos mínimos legíveis. Testado em 375, 768, 1280 e 1440px, sem scroll horizontal.
- Navegação completa por teclado (menu mobile, carrosséis, formulário), foco visível, link
  "Pular para o conteúdo", `alt` em todas as imagens e `label` em todos os campos.

## Back-end

O formulário já valida, mostra os estados de envio/sucesso/erro e chama `submitQuote()`.
Falta só o serviço que recebe os dados — contrato completo em [`docs/HANDOFF.md`](docs/HANDOFF.md).
