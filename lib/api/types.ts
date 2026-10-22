import type { z } from "zod";

import { quoteSchema } from "./schemas";

// { empresa: string; municipio: string; telefone: string; descricao: string }
export type QuoteRequest = z.infer<typeof quoteSchema>;

export type QuoteResponse = { ok: boolean; message?: string };
