import { z } from "zod";

// Schema compartilhado entre o formulário (QuoteForm) e a rota /api/orcamento.
// Aceita fixo (8 dígitos) e celular (9 dígitos): (53) 3227-9644 / (53) 98109-0159
export const TELEFONE_REGEX = /^\(\d{2}\) \d{4,5}-\d{4}$/;

export const quoteSchema = z.object({
  empresa: z
    .string({ error: "Informe o nome da empresa." })
    .trim()
    .min(1, "Informe o nome da empresa."),
  municipio: z
    .string({ error: "Informe o município." })
    .trim()
    .min(1, "Informe o município."),
  telefone: z
    .string({ error: "Informe o telefone." })
    .trim()
    .regex(TELEFONE_REGEX, "Telefone inválido. Ex.: (53) 99999-9999"),
  descricao: z
    .string({ error: "Descreva o que precisa." })
    .trim()
    .min(10, "Descreva o que precisa em pelo menos 10 caracteres."),
});
