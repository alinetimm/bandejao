import type { NextApiRequest, NextApiResponse } from "next";
import type { QuoteResponse } from "@/lib/api/types";

import { quoteSchema } from "@/lib/api/schemas";

// TODO(back-end): implementar o envio real do orçamento.
// Contrato:
//   POST /api/orcamento
//   Body (JSON): { empresa, municipio, telefone: "(53) 99999-9999", descricao (>= 10 caracteres) }
//   Respostas: 200 { ok: true, message? } | 400 { ok: false, message } | 405 | 5xx { ok: false, message }
// Hoje o corpo é validado com o mesmo schema do formulário e a rota responde 501.
// Para usar outro serviço, defina NEXT_PUBLIC_QUOTE_ENDPOINT (ver .env.example).
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuoteResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({ ok: false, message: "Método não permitido" });
  }

  const parsed = quoteSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      message: parsed.error.issues[0]?.message ?? "Dados inválidos",
    });
  }

  return res
    .status(501)
    .json({ ok: false, message: "Back-end ainda não configurado" });
}
