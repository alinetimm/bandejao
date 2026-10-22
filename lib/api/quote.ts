import type { QuoteRequest, QuoteResponse } from "./types";

export type { QuoteRequest, QuoteResponse } from "./types";

const QUOTE_ENDPOINT =
  process.env.NEXT_PUBLIC_QUOTE_ENDPOINT || "/api/orcamento";

const ERRO_GENERICO =
  "Não foi possível enviar sua solicitação. Tente novamente ou ligue para nós.";

// Envia o pedido de orçamento. Espera do servidor um JSON { ok, message? }.
// TODO(back-end): integrar com serviço real (e-mail, CRM, banco). Hoje a rota
// padrão (pages/api/orcamento.ts) só valida e responde 501.
export async function submitQuote(data: QuoteRequest): Promise<QuoteResponse> {
  try {
    const res = await fetch(QUOTE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const body = (await res.json().catch(() => null)) as QuoteResponse | null;

    if (!res.ok || !body?.ok) {
      return { ok: false, message: body?.message ?? ERRO_GENERICO };
    }

    return body;
  } catch {
    return { ok: false, message: ERRO_GENERICO };
  }
}
