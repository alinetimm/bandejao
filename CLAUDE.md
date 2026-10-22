# CLAUDE.md — Site Bandejão Refeições

Site institucional da **Bandejão Refeições** (alimentação coletiva, Pelotas e Rio Grande/RS).
Escopo deste trabalho: **front-end completo e navegável**, fiel ao Figma, com **ganchos prontos para o back-end**
(que será feito por outro programador). Não implementar back-end real.

- Figma (fonte da verdade para layout, cores, espaçamentos e assets): `FIGMA_URL_AQUI`  ← Aline: cole o link do arquivo
- Conteúdo textual de todas as páginas: `docs/CONTEUDO.md` (transcrito do Figma; se divergir, o Figma vence)
- Idioma do site e dos comentários: **português (pt-BR)**

---

## 1. Stack (manter)

- Next.js 15 **Pages Router** (`pages/`), React 18, TypeScript strict
- Tailwind CSS 3 (estilização principal)
- HeroUI: usar **apenas** onde já ajuda (Navbar mobile). Não introduzir novos componentes HeroUI sem necessidade.
- Fonte: **Poppins** via `next/font/google` (já em `config/fonts.ts`)
- Imagens: **`next/image`** (não usar `Image` do HeroUI)

Adicionar:
- `embla-carousel-react` — carrosséis (Nossos Serviços, Avaliações)
- `react-hook-form` + `zod` + `@hookform/resolvers` — formulário de orçamento

Remover (Fase 0):
- `next-themes`, `components/theme-switch.tsx` e qualquer lógica de dark mode (o site não tem tema escuro)
- Pacotes HeroUI não usados (`@heroui/code`, `kbd`, `snippet`, `switch`, `input`, `listbox`, `image` se ficarem sem uso)
- `components/primitives.ts` (gradientes do template) → substituído por `SectionTitle`
- Links do template em `config/site.ts` (github, twitter, discord…)

**Não apagar** a pasta `legacy/` — apenas ignorá-la (é a versão antiga, CRA). Ela está desatualizada: **não copiar textos de lá**.

---

## 2. Regras de ouro

1. **Figma primeiro.** Antes de implementar cada seção, consultar o nó correspondente pelo Figma MCP
   (ex.: `get_design_context`/`get_code`, `get_screenshot`, `get_variable_defs`, `get_metadata` — use as ferramentas
   que o servidor expuser). Depois de implementar, comparar visualmente com o screenshot do Figma.
2. **Conteúdo fora do JSX.** Todo texto, lista e referência de imagem fica em `content/*.ts`, tipado.
   Componentes só recebem dados. Assim o próximo programador troca conteúdo (ou liga um CMS) sem mexer em layout.
3. **Nunca usar exportações de seção inteira como imagem.** Vários PNGs em `public/assets/images/`
   (`História.png`, `nossa história.png`, `Group 121.png`, `Group 122.png`, `PARMEGIANA.png`, `Imagem (1).png`,
   `background_placeholder2.png`, `partners_gallery.png`, `carousel1.png`) têm **texto embutido** — são prints do
   layout. Textos devem ser HTML real. Exportar do Figma **apenas as fotos/ícones/logos individuais**.
   Depois de migrar, mover esses PNGs antigos para `public/assets/_referencia/` (não apagar).
4. **Imagem que não existir → placeholder, nunca imagem inventada.** Usar `<SmartImage>` (ver §4). Se a foto
   individual não puder ser exportada do Figma, deixar `src` vazio no conteúdo com um `hint` descritivo.
5. **Textos provisórios ficam como estão** (decisão da cliente): "Refeições industriais" (texto entre parênteses),
   "Avaliações" (lorem ipsum) e o subtítulo repetido do Buffet. Marcar no código com `// TODO(conteúdo):`.
6. **Links externos inexistentes → placeholder** em `config/site.ts` com valor `"#"` e `// TODO(link):`
   (Instagram, Facebook, WhatsApp, iFood, Google Maps). Links `"#"` não devem abrir nova aba nem quebrar.
7. **Back-end só como interface.** Ver §5. Nenhuma chave, banco ou serviço real.
8. Nada de `console.log` no código final; nada de `any` sem justificativa.
9. Ao terminar cada fase: `npm run lint` e `npm run build` sem erros, e um commit por fase.

---

## 3. Design tokens

Confirmar os valores com `get_variable_defs` / inspeção do Figma e ajustar aqui se diferir.

| Token | Valor (aprox.) | Uso |
|---|---|---|
| `brand` | `#F66922` | navbar, títulos em laranja, botões, ícones dos diferenciais |
| `ink` | `#1E1E1E` | títulos em preto, texto forte |
| `body` | `#4A4A4A` | texto corrido |
| `surface-dark` | `#2D2D2F` | rodapé / bloco de contato, faixa do delivery (`#1E1E1E`) |
| `white` | `#FFFFFF` | fundo das páginas |

- No `tailwind.config.js`: **remover** `orange: "#FFC6B3"` (sobrescreve a paleta laranja inteira do Tailwind)
  e criar `colors.brand`, `colors.ink`, `colors.body`, `colors.surface-dark`. Manter `primary` = `#F66922`
  para o HeroUI.
- `_document.tsx`: `lang="pt-BR"`, remover `bg-orange` do body (fundo branco).
- Tipografia (Poppins): títulos de seção em peso 700–800; títulos da página Serviços em caixa alta peso 800–900;
  texto corrido 400; trechos em itálico em "Conheça o Bandejão" e "Refeições industriais" (conforme Figma).
- Cantos arredondados nas fotos (~16–20px) onde o Figma usa.
- Largura de referência do Figma: 1440px. Conteúdo centralizado com `max-w` (verificar no Figma, ~1100–1200px).

### Padrão de título (`SectionTitle`)
Duas linhas: primeira em `brand`, segunda em `ink` (ex.: "Nossos" / "Serviços", "Conheça o" / "Bandejão").
Variantes necessárias: `stacked` (duas linhas, padrão Home), `single` (uma cor só, ex.: "Quem Somos",
"Galeria dos parceiros", "Vamos conversar?"), `uppercase` (Serviços: "REFEIÇÕES PARA" / "EMPRESAS:").

---

## 4. Arquitetura de pastas

```
components/
  layout/      Navbar.tsx, Footer.tsx, ContactBlock.tsx (logo + endereços + form), PageLayout.tsx, SeoHead.tsx
  ui/          SectionTitle.tsx, SmartImage.tsx, ImagePlaceholder.tsx, Button.tsx, Carousel.tsx, SocialLinks.tsx
  forms/       QuoteForm.tsx
  sections/
    home/      Hero, ServicesCarousel, PreparoBanner, ConhecaBandejao, RefeicoesIndustriais,
               Diferenciais, GaleriaParceiros, DeliveryBanner, Parceiros, Avaliacoes
    services/  ServiceBlock.tsx (um componente, várias variantes de layout)
    about/     NossaHistoria, OQueFazemos, NossaFilosofia, NossoDiferencial, VamosConversar
content/       home.ts, services.ts, about.ts, partners.ts, testimonials.ts, gallery.ts, diferenciais.ts
config/        site.ts (nav, endereços, telefones, links sociais), fonts.ts
lib/api/       quote.ts (submitQuote), types.ts
pages/         index.tsx, services/index.tsx, about/index.tsx, contact/index.tsx, api/orcamento.ts, 404.tsx
public/assets/
  brand/       logo.svg (branco), logo-color.svg, favicon
  images/home/ images/services/ images/about/ images/gallery/
  partners/    logos dos parceiros (svg/png)
  icons/       ícones dos diferenciais e redes sociais (svg exportado do Figma)
docs/          CONTEUDO.md, HANDOFF.md
```

Rotas: manter as atuais em inglês (`/services`, `/about`, `/contact`) — rótulos da navbar em português.

### Tipo de imagem no conteúdo
```ts
export type ContentImage = {
  src?: string;   // vazio/undefined => renderiza ImagePlaceholder
  alt: string;    // obrigatório, descritivo, pt-BR
  hint?: string;  // o que deve ir aqui (aparece no placeholder) ex.: "Foto: equipe servindo buffet"
};
```
`<SmartImage image={...} aspect="4/3" rounded />` → usa `next/image` se houver `src`, senão `<ImagePlaceholder>`:
bloco com borda tracejada, fundo cinza claro, ícone de imagem e o `hint` + proporção, **mantendo exatamente o
tamanho/proporção do Figma** para o layout não quebrar quando a foto real entrar.

### Âncoras dos serviços
Cada bloco de `/services` tem `id`: `empresas`, `hospitalares`, `delivery`, `cantinas`, `buffet`.
No carrossel "Nossos Serviços" da Home, **clicar na imagem leva para `/services#<id>`** (decisão confirmada).
Adicionar `scroll-margin-top` igual à altura da navbar sticky.

---

## 5. Ganchos de back-end (somente interface)

**Formulário "Solicite um orçamento"** (rodapé de todas as páginas e página Contato):
- Campos exatamente como no Figma: `empresa`, `municipio`, `telefone`, `descricao` (decisão da cliente: manter assim).
- Validação com zod: todos obrigatórios; telefone BR com máscara `(53) 99999-9999`; descrição mínimo 10 caracteres.
- Estados de UI: enviando (botão desabilitado + spinner), sucesso, erro. Mensagens em pt-BR.
- `lib/api/quote.ts`:
  ```ts
  export type QuoteRequest = { empresa: string; municipio: string; telefone: string; descricao: string };
  export async function submitQuote(data: QuoteRequest): Promise<{ ok: boolean; message?: string }>
  // POST para process.env.NEXT_PUBLIC_QUOTE_ENDPOINT ?? "/api/orcamento"
  // TODO(back-end): integrar com serviço real (e-mail, CRM, banco)
  ```
- `pages/api/orcamento.ts`: stub que valida o corpo com o mesmo schema zod e responde `501 Not Implemented`
  com `{ ok: false, message: "Back-end ainda não configurado" }`. Comentário `// TODO(back-end)` explicando o contrato.
- Criar `.env.example` com `NEXT_PUBLIC_QUOTE_ENDPOINT=`.
- Schema zod compartilhado em `lib/api/schemas.ts` (usado pelo form e pela rota).

**Dados que podem vir de API/CMS no futuro** (hoje estáticos em `content/`): avaliações, parceiros, galeria.
Exportar interfaces (`Testimonial`, `Partner`, `GalleryItem`) e comentar onde trocar por fetch
(`getStaticProps` com revalidate é o caminho sugerido).

Todos os pontos pendentes devem usar um destes prefixos para serem encontrados com grep:
`TODO(back-end)`, `TODO(conteúdo)`, `TODO(link)`, `TODO(imagem)`.

---

## 6. Plano por fases

Executar **uma fase por vez**; ao final de cada uma: lint + build + commit + resumo curto do que ficou pendente.

**Fase 0 — Limpeza e setup**
Criar branch `feat/frontend`. Remover dark mode/next-themes/primitives/pacotes não usados; corrigir tailwind
(tokens), `_document` (`pt-BR`, fundo branco), `config/site.ts` (nav + contatos + links placeholder).
Instalar embla, react-hook-form, zod. Criar estrutura de pastas e `ContentImage`. Atualizar `package.json`
(`name: "bandejao-site"`). Corrigir `next.config.js` se precisar (`images`).

**Fase 1 — Base visual e layout**
Ler tokens no Figma. Implementar `Navbar` (desktop + menu mobile com links corretos — o atual aponta tudo para
`#`), `Footer`/`ContactBlock`, `QuoteForm` + `lib/api` + rota stub, `SectionTitle`, `SmartImage`,
`ImagePlaceholder`, `Button`, `Carousel`, `SocialLinks`, `SeoHead`. Exportar logos e ícones do Figma.

**Fase 2 — Home** (seções na ordem de `docs/CONTEUDO.md`). Exportar fotos individuais do Figma.

**Fase 3 — Serviços** — `ServiceBlock` com variantes de layout (texto à esquerda + 3 fotos; texto + 2 fotos
verticais; foto à esquerda + texto) e âncoras.

**Fase 4 — Quem Somos.** Botão "solicite uma proposta" rola até o formulário (`#orcamento`).

**Fase 5 — Contato.** Página com o `ContactBlock` em destaque; nessa página **não** repetir o bloco no rodapé.

**Fase 6 — Responsivo, acessibilidade e SEO.** Mobile (≤640), tablet, desktop. Alt em todas as imagens, foco
visível, labels no form, contraste, `<title>`/description por página, Open Graph, 404 em pt-BR.

**Fase 7 — Handoff.** Reescrever `README.md` (como rodar, estrutura, como trocar conteúdo e imagens) e criar
`docs/HANDOFF.md` listando **todos** os `TODO(...)` agrupados por tipo, os placeholders de imagem restantes
e o contrato da API de orçamento.

---

## 7. Responsivo (o Figma só tem desktop)

- Mobile: colunas empilham (texto antes das fotos), carrosséis com swipe e 1 item visível, grade de parceiros
  3 colunas, diferenciais 1 coluna, navbar com menu hambúrguer, formulário em coluna única.
- Tablet: 2 colunas onde fizer sentido. Carrossel com 2 itens.
- Nunca scroll horizontal. Testar em 375px, 768px, 1280px, 1440px.

---

## 8. Comandos

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```
