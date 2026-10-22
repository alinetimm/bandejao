import type { ContentIcon } from "@/types";

export type Diferencial = {
  id: string;
  // "\n" = quebra de linha do Figma (aplicada a partir do desktop)
  texto: string;
  icon: ContentIcon;
};

const icone = (nome: string, size: number): ContentIcon => ({
  src: `/assets/icons/diferenciais/${nome}.svg`,
  width: size,
  height: size,
});

// Ordem de leitura: esquerda→direita, linha a linha (2 colunas no desktop)
export const diferenciais: Diferencial[] = [
  {
    id: "atendimento",
    texto: "Atendimento individualizado\ne acesso direto aos donos.",
    icon: icone("atendimento", 54),
  },
  {
    id: "agilidade",
    texto: "Agilidade na resolução\nde problemas.",
    icon: icone("agilidade", 56),
  },
  {
    id: "processos",
    texto: "Processos flexíveis atendendo\nvariabilidades e incertezas.",
    icon: icone("processos", 58),
  },
  {
    id: "negociacao",
    texto: "Facilidade de negociação",
    icon: icone("negociacao", 64),
  },
  {
    id: "garantia",
    texto: "Garantia de prazo e exatidão.",
    icon: icone("garantia", 70),
  },
  {
    id: "servico",
    texto: "Serviço customizável com as\nnecessidades do cliente.",
    icon: icone("servico", 64),
  },
  {
    id: "alimentacao",
    texto: "Alimentação saborosa,\nsaudável e segura.",
    icon: icone("alimentacao", 71),
  },
  {
    id: "qualidade",
    texto: "Qualidade e controle\nrigoroso de fornecedores.",
    icon: icone("qualidade", 56),
  },
];
