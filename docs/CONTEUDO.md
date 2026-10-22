# Conteúdo do site — transcrito do Figma

Referência de textos e estrutura de cada página. **Se houver divergência, o Figma vence** (ler via Figma MCP).
`**negrito**` e `*itálico*` indicam ênfase usada no design. Trechos marcados `TODO(conteúdo)` são provisórios por
decisão da cliente e devem ser mantidos como estão.

---

## Elementos globais

### Navbar (fundo laranja, sticky)
Logo branco "bandejão" à esquerda · Links: **Home** (`/`) · **Serviços** (`/services`) · **Contato** (`/contact`) · **Quem Somos** (`/about`)

### Rodapé / Bloco de contato (fundo escuro) — `id="orcamento"`
Coluna esquerda:
- Logo branco "bandejão refeições"
- **Pelotas** — Avenida Francisco Caruccio, 777 — (53) 98109-0159 · (53) 3227-9644
- **Rio Grande** — Avenida Rheingantz, 70 — (53) 98111-1405
- Ícones: Facebook, Instagram, WhatsApp → `TODO(link)` placeholders `#`
- Telefones clicáveis (`tel:`); endereços podem virar link do Google Maps → `TODO(link)`

Coluna direita — formulário "Solicite um orçamento":
- Campos: **Empresa**, **Município**, **Telefone** (mesma linha), **Descrição** (textarea)
- Botão: **ENVIAR**

Abaixo do bloco, centralizado, texto pequeno: "Bandejão Refeições".
(O layout atual tem a linha "Produzido por Aline y Ulian" — manter discreta abaixo, sem link para heroui.com.)

---

## Home (`/`)

### 1. Hero
Foto de fundo (mãos cortando abobrinha) com sobreposição laranja (`brand` com opacidade) e logo branco grande
"bandejão REFEIÇÕES" no canto inferior esquerdo.
Foto existente: `public/assets/images/background_placeholder1.png` (foto pura, pode ser usada).

### 2. Nossos Serviços
Título: "Nossos" / "Serviços"
Texto: "Servimos refeições saborosas há mais de **30 anos**. clique na imagem para saber mais."
Carrossel com setas laranja ◀ ▶, 3 cards visíveis (fotos com cantos arredondados), 5 itens no total:
| Item | Link |
|---|---|
| Refeições para Empresas (buffet com massas) | `/services#empresas` |
| Refeições Hospitalares (marmitas "DIETA HIPS") | `/services#hospitalares` |
| Delivery de Marmitas (potes com arroz) | `/services#delivery` |
| Cantinas Escolares | `/services#cantinas` |
| Buffet Corporativo e Eventos | `/services#buffet` |
Cada card precisa de `aria-label` com o nome do serviço.

### 3. Banner "Sabor no preparo"
Foto escura largura total (panela, colher de madeira, avental "bandejão"), texto branco no canto inferior esquerdo:
"**SABOR NO PREPARO**" / "EXCELÊNCIA AO SERVIR"
⚠ Os PNGs atuais desse banner têm o texto embutido — exportar só a foto do Figma, texto em HTML.

### 4. Conheça o Bandejão
Foto vertical arredondada à esquerda (funcionária de costas com camiseta Bandejão, letreiro "bandejão" ao fundo).
Título: "Conheça o" / "Bandejão"
Texto (itálico):
> Desde 1992, o Bandejão Refeições se dedica a fornecer alimentação de qualidade para empresas e instituições. Nossa missão é oferecer refeições equilibradas, preparadas com ingredientes selecionados e seguindo os mais altos padrões de higiene e segurança alimentar.
>
> Pelas mãos de Bruna Peter e Marcelo Oxley, o Bandejão atende dezenas de empresas e serve mais de 1000 refeições diariamente.

### 5. Refeições industriais
Título (laranja): "Refeições industriais"
Subtítulo (preto, negrito itálico): "preparadas para sentir o sabor de casa"
Texto (itálico, alinhado à direita) — `TODO(conteúdo)`, manter:
> (insira aqui um texto que mostre que acompanhando esse trecho terá imagens de refeições produzidas para nossos clientes)

Fotos: 1 grande à esquerda (prateleira com saladas e potes de frutas, cubas abaixo) + 3 menores arredondadas à
direita (cubas com bife e massa; mão com croquete; mãos montando marmitas).

### 6. Nossos Diferenciais
Título: "Nossos" / "Diferenciais"
Texto:
> No Bandejão Refeições, oferecemos uma grande variedade de serviços de alimentação adequados a cada necessidade de maneira personalizada. Cada parceiro é pensado individualmente para garantir uma refeição mais saborosa e saudável.

8 itens em 2 colunas — cada um: círculo laranja com ícone branco + "pílula" com borda e texto em negrito.
Ícones: exportar SVG do Figma.
| # | Texto | Ícone (referência) |
|---|---|---|
| 1 | Atendimento individualizado e acesso direto aos donos. | grade com "+" |
| 2 | Agilidade na resolução de problemas. | relógio com seta |
| 3 | Processos flexíveis atendendo variabilidades e incertezas. | fluxograma |
| 4 | Facilidade de negociação. | rosto sorrindo |
| 5 | Garantia de prazo e exatidão. | moto de entrega |
| 6 | Serviço customizável com as necessidades do cliente. | casa com garfo e faca |
| 7 | Alimentação saborosa, saudável e segura. | fruta |
| 8 | Qualidade e controle rigoroso de fornecedores. | selo com check |

### 7. Galeria dos parceiros
Título laranja alinhado à direita: "Galeria dos parceiros"
Grade em mosaico com 9 fotos (festival de Ano Novo com doces; prato sendo servido; cubas de buffet; balcão;
buffet decorado de carnaval; cubas variadas; refeitório com balões laranja Bandejão…).
Fotos individuais do Figma → `public/assets/images/gallery/`. Dados em `content/gallery.ts`.

### 8. Banner de delivery
Faixa escura horizontal; à esquerda texto branco em negrito:
"O Bandejão também pode ir" / "até a porta da sua casa."
Botão laranja (pílula): "conheça o nosso **delivery**" → `/services#delivery`
À direita, prato de parmegiana com batata frita (PNG recortado com fundo transparente, extrapolando a faixa).
⚠ `PARMEGIANA.png` atual tem o texto embutido — exportar só o prato do Figma.

### 9. Nossos parceiros
Título centralizado: "Nossos parceiros"
Grade 5 × 5 de logos (exportar do Figma → `public/assets/partners/`; nomes conferir no Figma):
Mercado Livre · Freedom · FURG · Savarauto · Olé · Guanabara · Tanac · ACPO · Colégio Gonzaga · Zimmer ·
Planfer · Hospital Monporto · Polimix Energia · Ser e Aprender · Frigorífico (Klug?) · Boreal ·
Irmãos Jouglard · Peil · Leal Santos · Roloff · UPA 24h · MAC · São Bento · Hospital (nome a conferir) ·
último logo (nome a conferir)
Cada logo com `alt` = nome do parceiro.

### 10. Avaliações
Título centralizado: "Avaliações"
Carrossel com setas laranja; card com borda laranja arredondada, logo do parceiro à esquerda e texto à direita.
Texto `TODO(conteúdo)` — manter lorem ipsum:
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.

Dados em `content/testimonials.ts` (interface `Testimonial { id, partnerName, partnerLogo, text }`).

### 11. Rodapé (global)

---

## Serviços (`/services`)

Título centralizado, preto, caixa alta, peso alto: "SERVIÇOS"

Cada bloco: título em duas linhas caixa alta (1ª laranja, 2ª preta, termina com ":"), subtítulo com trecho em negrito,
corpo em parágrafos. Layout alterna conforme abaixo.

### `#empresas` — REFEIÇÕES PARA / EMPRESAS:
Layout: texto à esquerda + 1 foto à direita (cubas de buffet); abaixo, foto larga (potes de marmita) + foto menor
(prato servido com bife à milanesa). 3 fotos, cantos arredondados.
Subtítulo: "Alimentação corporativa para **escritórios, fábricas e indústrias.**"
> Oferecemos alimentação corporativa completa, com refeições balanceadas, saborosas e preparadas com ingredientes frescos e selecionados. Nosso serviço é pensado para atender empresas de todos os portes, com soluções personalizadas que se adaptam à rotina e estrutura de cada cliente. As entregas são feitas com pontualidade, seja em marmitas individuais, buffets ou refeições empratadas. Garantimos segurança alimentar, praticidade e bem-estar aos colaboradores — contribuindo diretamente para um ambiente de trabalho mais saudável e produtivo.

### `#hospitalares` — REFEIÇÕES / HOSPITALARES:
Layout: texto à esquerda + 2 fotos verticais à direita (marmitas empilhadas "DIETA HIPS"; marmita aberta com etiqueta "Dieta P/ Diabético").
Subtítulo: "Dietas balanceadas e adaptadas para **hospitais e clínicas.**"
> Entregamos refeições específicas para o ambiente hospitalar, preparadas de acordo com orientações médicas e necessidades nutricionais dos pacientes. Nossos cardápios são desenvolvidos por nutricionistas e adaptados para diferentes dietas, como restrições de sódio, açúcar, lactose, glúten, entre outras.
>
> Trabalhamos com porções individuais, marmitas ou pratos servidos conforme a estrutura da instituição. Mais que refeições: fornecemos suporte nutricional essencial para o processo de recuperação, com sabor, higiene e responsabilidade.

### `#delivery` — DELIVERY DE / MARMITAS:
Layout: foto à esquerda (potes com arroz, linguiça e croquete) + texto à direita.
Subtítulo: "Opção prática para refeições **individuais e coletivas**."
> Para quem busca praticidade no dia a dia, nosso serviço de delivery de marmitas é a solução ideal. Atendemos tanto empresas quanto consumidores finais, com refeições prontas, equilibradas e entregues no ponto certo. As entregas são feitas por nossa equipe própria ou via iFood, sempre com embalagens seguras que mantêm a temperatura e a qualidade dos alimentos. Perfeito para quem deseja se alimentar bem, com comodidade, sem abrir mão do sabor e da nutrição.

(Opcional, se houver espaço no design: link "Peça pelo iFood" → `TODO(link)`.)

### `#cantinas` — CANTINAS / ESCOLARES:
Layout: texto à esquerda + 2 fotos verticais arredondadas à direita (bandeja com feijão; marmitas com massa e carne).
Subtítulo: "Alimentação saudável e saborosa para **instituições de ensino.**"
> Nossas cantinas escolares são estruturadas para atender alunos com rapidez, organização e qualidade. Oferecemos lanches e refeições saudáveis, com cardápios equilibrados e pensados para contribuir com o desenvolvimento e a saúde das crianças e adolescentes. Trabalhamos com diferentes formas de pagamento, incluindo sistemas pré-pagos, que oferecem mais controle aos pais. Além disso, garantimos um fluxo ágil no atendimento, evitando filas e respeitando o tempo de intervalo escolar. Tudo isso com o cuidado e a segurança alimentar que esse público merece.

### `#buffet` — BUFFET CORPORATIVO / E EVENTOS:
Layout: foto arredondada à esquerda (rechauds de buffet) + texto à direita.
Subtítulo — `TODO(conteúdo)` (repetido de Empresas, manter): "Alimentação corporativa para **escritórios, fábricas e indústrias.**"
> Para confraternizações, reuniões, aniversários ou eventos empresariais, o Bandejão oferece um serviço de buffet completo e sob medida. Trabalhamos com cardápios variados, que vão de coffee breaks e coquetéis a refeições completas, servidas em formato buffet self-service. Tudo com qualidade, pontualidade e alto padrão de higiene, para que seu evento seja uma experiência gastronômica rica em sabor.

Rodapé global.

---

## Quem Somos (`/about`)

Título laranja grande: "Quem Somos"

### Nossa História (fotos à esquerda, texto à direita)
Fotos: 1 grande (funcionária de costas com camiseta Bandejão) + abaixo 3 menores (buffet; duas funcionárias de
uniforme laranja na cozinha; prato sendo servido). À direita, abaixo do texto: 2 fotos (potes de marmita; bandeja
de frango com pimentões).
Subtítulo: "**Nossa História:**"
> O Bandejão Refeições nasceu em 1992 com uma missão clara: transformar a alimentação coletiva em uma experiência prática, saudável e de qualidade. Ao longo dessas décadas, nos tornamos referência no fornecimento de refeições para empresas, escolas, hospitais e eventos em toda a região do sul do Rio Grande do Sul.
>
> Crescemos mantendo um compromisso firme com a excelência em cada etapa: do planejamento ao prato servido. Hoje, com uma estrutura sólida, processos modernos e uma equipe altamente capacitada, seguimos inovando sem abrir mão daquilo que sempre nos guiou: o respeito ao cliente e o prazer em servir bem.

### O Que Fazemos (texto à esquerda)
Subtítulo: "**O Que Fazemos**"
> Oferecemos soluções completas e personalizadas em alimentação coletiva, com serviços que incluem:

Lista com marcador quadrado vazado (estilo checkbox, **não** interativo — usar `<ul>` com marcador CSS):
- Refeições corporativas para empresas de todos os tamanhos
- Buffet para eventos empresariais e sociais
- Cantinas escolares com foco em saúde e praticidade
- Refeições hospitalares adaptadas a cada tipo de dieta
- Delivery de marmitas para empresas e consumidores finais

### Nossa Filosofia (2 fotos verticais à esquerda: montagem de marmitas; prato sendo servido — texto à direita)
Subtítulo: "**Nossa Filosofia**"
> ***Alimentar é** cuidar*.
> Por isso, trabalhamos com três pilares que sustentam todas as nossas ações:
>
> **Qualidade:** ingredientes selecionados, cardápios balanceados e sabor em cada refeição.
>
> **Pontualidade:** respeito ao tempo do cliente com logística eficiente e transporte próprio.
>
> **Compromisso:** ser um parceiro confiável, que entende as necessidades de cada empresa ou instituição.

(Conferir no Figma a ênfase exata de "Alimentar é cuidar".)

### Nosso Diferencial (texto à esquerda, fotos à direita: mão com termômetro e prancheta — vertical; concha com molho; mão com luva montando pimentões)
Subtítulo: "**Nosso Diferencial**"
Lista com check laranja (✓):
- Mais de 30 anos de atuação no setor de alimentação coletiva
- Atendimento personalizado com foco em cada cliente
- Cardápios elaborados por nutricionistas
- Estrutura moderna e equipe treinada
- Rigorosos padrões de higiene e segurança alimentar
- Frota própria com alvará de transporte
- Flexibilidade para atender diferentes formatos e demandas

### Vamos conversar? (centralizado)
Título laranja grande: "Vamos conversar?"
> Se você busca uma empresa de refeições que entrega qualidade, sabor, pontualidade e atenção a cada detalhe, fale com o Bandejão. Estamos prontos para desenvolver a solução ideal para a sua necessidade.

Botão laranja (pílula): "solicite uma proposta" → rola até `#orcamento` (formulário do rodapé)

Rodapé global.

---

## Contato (`/contact`)

Navbar + bloco escuro de contato ocupando a página (logo + endereços à esquerda, formulário à direita, botão
ENVIAR centralizado abaixo), seguido de "Bandejão Refeições". No Figma desta página o bloco **não** tem o rótulo
"Solicite um orçamento" nem os ícones sociais — conferir e seguir o Figma. Não duplicar o bloco no rodapé.
