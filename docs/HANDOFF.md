# Handoff — Site Bandejão Refeições

Estado do front-end entregue e tudo o que falta para pôr o site no ar. Para rodar o projeto e
trocar conteúdo, veja o [`README.md`](../README.md).

Todos os pontos pendentes estão marcados no código com um destes prefixos:

```bash
grep -rn "TODO(" --include=*.ts --include=*.tsx . --exclude-dir=node_modules --exclude-dir=legacy
```

`TODO(back-end)` · `TODO(link)` · `TODO(conteúdo)` · `TODO(imagem)`

---

## 1. Pendências por tipo

Linhas conferidas no commit da Fase 7.

### TODO(back-end) — 6

| Arquivo | Linha | O que falta |
|---|---|---|
| `lib/api/quote.ts` | 12 | Integrar `submitQuote()` com o serviço real (e-mail, CRM, banco) |
| `pages/api/orcamento.ts` | 6 | Implementar o envio real (hoje valida e responde 501) — ver §3 |
| `pages/index.tsx` | 48 | Trocar o conteúdo estático por busca em API/CMS no `getStaticProps` — ver §4 |
| `content/gallery.ts` | 10 | Galeria pode vir de API/CMS |
| `content/partners.ts` | 7 | Parceiros podem vir de API/CMS |
| `content/testimonials.ts` | 8 | Avaliações podem vir de API/CMS |

### TODO(link) — 6

Links sem endereço ficam como `"#"`: não abrem nova aba nem quebram. Ao preencher, os externos
passam a abrir em nova aba sozinhos.

| Arquivo | Linha | O que falta |
|---|---|---|
| `config/site.ts` | 9 | URL do Google Maps de cada unidade (`mapsUrl`, hoje `"#"`; ainda não exibida no layout) |
| `config/site.ts` | 18 | Domínio de produção em `NEXT_PUBLIC_SITE_URL` (usado em `og:url`, `og:image` absoluto e `canonical`) |
| `config/site.ts` | 47 | Perfil do Instagram |
| `config/site.ts` | 48 | Página do Facebook |
| `config/site.ts` | 49 | Link `wa.me` do WhatsApp |
| `config/site.ts` | 50 | Página do iFood (ainda não exibida no layout; o Figma não tem esse botão) |

### TODO(conteúdo) — 4 (textos provisórios mantidos por decisão da cliente)

| Arquivo | Linha | Texto |
|---|---|---|
| `content/home.ts` | 102 | "Refeições industriais": texto entre parênteses "(insira aqui um texto…)" |
| `components/sections/home/RefeicoesIndustriais.tsx` | 17 | Marcação do mesmo texto no componente |
| `content/testimonials.ts` | 10 | Avaliações em lorem ipsum (3 cards, todos com o logo do Mercado Livre) |
| `content/services.ts` | 164 | Subtítulo do Buffet repetido do bloco Empresas |

### TODO(imagem) — 3

| Arquivo | Linha | O que falta |
|---|---|---|
| `content/home.ts` | 18 | Foto do hero em alta resolução (ver §2) |
| `content/services.ts` | 62 | Foto larga de Serviços › Empresas em alta resolução (ver §2) |
| `components/layout/SeoHead.tsx` | 63 | Favicon/ícones foram gerados a partir do "b" do logo; trocar se houver ícone oficial |

---

## 2. Imagens de baixa resolução

Todas as fotos foram exportadas do Figma. As que ficam abaixo do ideal (cerca de 2× a largura exibida):

| Arquivo | Tamanho | Onde aparece | Situação |
|---|---|---|---|
| `public/assets/images/home/hero.webp` | 1024×681 | Topo da Home (ocupa ~1800px no desktop) | **Baixa** — fica suave em telas grandes. `TODO(imagem)`. Ideal ≥ 2560px. Tem faixas transparentes nas laterais (o layout as esconde) |
| `public/assets/images/services/empresas-marmitas.webp` | 1083×239 | Serviços › Empresas, foto larga | **Baixa** — ok em tela comum, suave em telas retina e muito recortada no mobile (exibida em 2:1). `TODO(imagem)`. Ideal ≥ 1600px e mais alta |
| `public/assets/partners/*.png` (18 de 25) | 221–350px | Grade "Nossos parceiros" (184px no desktop) | Aceitável em tela comum; levemente suave em retina. Ideal: SVG ou PNG ≥ 368px |

Não há fotos com placeholder: todas as imagens do layout existem.

---

## 3. Contrato da API de orçamento

O formulário "Solicite um orçamento" (rodapé de Home, Serviços e Quem Somos, e a página Contato)
já está pronto: valida, aplica máscara no telefone, mostra os estados "Enviando", sucesso e erro, e
chama `submitQuote()`.

**Para onde envia:** `process.env.NEXT_PUBLIC_QUOTE_ENDPOINT` ou, se vazio, a rota local
`/api/orcamento` (`pages/api/orcamento.ts`). Pode ser implementado de dois jeitos:
1. preencher a rota local `pages/api/orcamento.ts` (ex.: enviar e-mail, gravar no banco); ou
2. apontar `NEXT_PUBLIC_QUOTE_ENDPOINT` para um serviço externo que siga o mesmo contrato.

### Requisição

```http
POST /api/orcamento
Content-Type: application/json

{
  "empresa":   "Restaurante Exemplo",
  "municipio": "Pelotas",
  "telefone":  "(53) 98109-0159",
  "descricao": "Almoço para 50 funcionários, de segunda a sexta."
}
```

| Campo | Regra (schema compartilhado em `lib/api/schemas.ts`) |
|---|---|
| `empresa` | texto obrigatório (sem espaços nas pontas) |
| `municipio` | texto obrigatório |
| `telefone` | obrigatório, formato `(DD) 9999-9999` ou `(DD) 99999-9999` |
| `descricao` | obrigatório, mínimo 10 caracteres |

O tipo TypeScript é `QuoteRequest` (`lib/api/types.ts`). **Valide no servidor com o mesmo
`quoteSchema`**, como a rota atual já faz.

### Respostas esperadas

O corpo é sempre JSON `{ ok: boolean, message?: string }` (`QuoteResponse`). A `message` aparece
para o usuário, então escreva em português.

| Status | Corpo | O site mostra |
|---|---|---|
| 200 | `{ "ok": true, "message"?: "..." }` | `message` ou "Solicitação enviada! Em breve entraremos em contato." e limpa o formulário |
| 400 | `{ "ok": false, "message": "Telefone inválido…" }` | a `message` |
| 405 | `{ "ok": false, "message": "Método não permitido" }` | a `message` |
| 5xx / outro | `{ "ok": false, "message"?: "..." }` | a `message` ou o texto genérico de erro |
| **501 (hoje)** | `{ "ok": false, "message": "Back-end ainda não configurado" }` | essa mensagem |

Falha de rede ou resposta que não seja JSON → o site mostra "Não foi possível enviar sua
solicitação. Tente novamente ou ligue para nós."

Para testar a rota atual:

```bash
curl -X POST http://localhost:3000/api/orcamento -H "Content-Type: application/json" \
  -d '{"empresa":"X","municipio":"Pelotas","telefone":"(53) 99999-9999","descricao":"teste de envio"}'
# => 501 {"ok":false,"message":"Back-end ainda não configurado"}
```

Sugestões para a implementação: proteção contra spam (honeypot ou captcha), limite de envios por
IP e o destino dos pedidos (e-mail da empresa, planilha ou CRM) — a definir com a cliente.

---

## 4. Ganchos de CMS / API

Galeria, parceiros e avaliações já chegam à Home **via props** a partir do `getStaticProps` de
`pages/index.tsx`. Hoje ele só importa os arquivos de `content/`; para ligar um CMS, troque os
imports por chamadas à API e devolva os mesmos tipos:

```ts
// pages/index.tsx
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const [gallery, partners, testimonials] = await Promise.all([
    buscarGaleria(),      // -> GalleryItem[]
    buscarParceiros(),    // -> Partner[]
    buscarAvaliacoes(),   // -> Testimonial[]
  ]);

  return { props: { gallery, partners, testimonials }, revalidate: 3600 };
};
```

| Tipo | Arquivo | Campos |
|---|---|---|
| `GalleryItem` | `content/gallery.ts` | `id`, `image: { src?, alt, hint? }`, `focus?` (object-position). O mosaico usa as **8 primeiras** na ordem |
| `Partner` | `content/partners.ts` | `id`, `name` (vira o `alt`), `logo` (caminho ou URL) |
| `Testimonial` | `content/testimonials.ts` | `id`, `partnerName`, `partnerLogo`, `text` |

Se as imagens vierem de um domínio externo, libere-o em `images.remotePatterns` no `next.config.js`.

Os demais textos (`content/home.ts`, `services.ts`, `about.ts`, …) são estáticos e tipados; dá
para levá-los ao CMS do mesmo jeito, passando por `getStaticProps` em cada página.

---

## 5. Outras decisões e observações

- **Contraste da cor da marca:** texto branco sobre o laranja `#F66922` dá 3,02:1. Isso atende o
  WCAG AA só para texto grande (≥ 24px, ou ≥ 18,7px em negrito). Por isso o botão "ENVIAR" usa
  19px extrabold. A pílula "conheça o nosso **delivery**" e o "solicite uma proposta" (peso médio)
  ficam abaixo de 4,5:1. Escurecer o laranja só nos botões resolveria — decisão da cliente.
- **Navbar:** o Figma usa laranja com 90% de opacidade; no site ficou 100% para o texto branco
  manter 3:1 sobre fundos claros.
- **Menu mobile:** os frames "Android" mostram os 4 links na barra; usamos menu hambúrguer
  (CLAUDE.md §7), porque em 375px os links ficariam com ~11px.
- **Carrossel "Nossos Serviços" no mobile:** o Figma mostra 3 cards; usamos 2 por legibilidade
  (o Figma mobile também omite o card "Refeições Hospitalares", que mantivemos).
- **Marcadores de Quem Somos:** no desktop, "O Que Fazemos" usa quadrado vazado e "Nosso
  Diferencial" usa check laranja; o Figma mobile inverte. Mantivemos os do desktop nos dois.
- **Imagem de compartilhamento e ícones** (`public/assets/brand/og-image.jpg`, `icon-512.png`,
  `/favicon.ico`, `/apple-touch-icon.png`) não existem no Figma: foram montados com a foto e o logo
  do próprio site.
- **Arquivos antigos** (prints do layout com texto embutido, favicon do template, logos antigos)
  estão em `public/assets/_referencia/` e não são usados pelo site.
