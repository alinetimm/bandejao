import type { QuoteRequest } from "@/lib/api/types";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import { submitQuote } from "@/lib/api/quote";
import { quoteSchema } from "@/lib/api/schemas";
import { maskTelefone } from "@/lib/masks";

type Status =
  | { tipo: "ocioso" }
  | { tipo: "sucesso"; mensagem: string }
  | { tipo: "erro"; mensagem: string };

const campos = [
  { name: "empresa", label: "Empresa", autoComplete: "organization" },
  { name: "municipio", label: "Município", autoComplete: "address-level2" },
  { name: "telefone", label: "Telefone", autoComplete: "tel" },
] as const;

const inputBase =
  "w-full bg-white px-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark";

// Formulário "Solicite um orçamento" (Figma 453:811). Envia via submitQuote — ver lib/api/quote.ts.
export const QuoteForm = ({ className }: { className?: string }) => {
  const [status, setStatus] = useState<Status>({ tipo: "ocioso" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteRequest>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { empresa: "", municipio: "", telefone: "", descricao: "" },
  });

  const onSubmit = async (data: QuoteRequest) => {
    setStatus({ tipo: "ocioso" });
    const res = await submitQuote(data);

    if (res.ok) {
      reset();
      setStatus({
        tipo: "sucesso",
        mensagem:
          res.message ?? "Solicitação enviada! Em breve entraremos em contato.",
      });
    } else {
      setStatus({
        tipo: "erro",
        mensagem: res.message ?? "Não foi possível enviar sua solicitação.",
      });
    }
  };

  const telefone = register("telefone");

  return (
    <form
      noValidate
      aria-labelledby="orcamento-titulo"
      className={clsx("w-full", className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2
        className="mb-4 text-xl leading-[22px] text-white/50"
        id="orcamento-titulo"
      >
        Solicite um orçamento
      </h2>

      <div className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-3">
        {campos.map((campo) => {
          const erro = errors[campo.name]?.message;
          const id = `orcamento-${campo.name}`;
          const reg =
            campo.name === "telefone" ? telefone : register(campo.name);

          return (
            <div key={campo.name}>
              <label
                className="mb-[6px] block text-lg font-medium leading-[27px] tracking-[-0.01em] text-white"
                htmlFor={id}
              >
                {campo.label}
              </label>
              <input
                {...reg}
                aria-describedby={erro ? `${id}-erro` : undefined}
                aria-invalid={!!erro}
                autoComplete={campo.autoComplete}
                className={clsx(inputBase, "h-12")}
                id={id}
                inputMode={campo.name === "telefone" ? "tel" : undefined}
                placeholder={
                  campo.name === "telefone" ? "(53) 99999-9999" : undefined
                }
                type={campo.name === "telefone" ? "tel" : "text"}
                onChange={
                  campo.name === "telefone"
                    ? (e) => {
                        e.target.value = maskTelefone(e.target.value);
                        telefone.onChange(e);
                      }
                    : reg.onChange
                }
              />
              {erro && (
                <p className="mt-1 text-sm text-red-300" id={`${id}-erro`}>
                  {erro}
                </p>
              )}
            </div>
          );
        })}

        <div className="sm:col-span-3">
          <label
            className="mb-[6px] block text-lg font-medium leading-[27px] tracking-[-0.01em] text-white"
            htmlFor="orcamento-descricao"
          >
            Descrição
          </label>
          <textarea
            {...register("descricao")}
            aria-describedby={
              errors.descricao ? "orcamento-descricao-erro" : undefined
            }
            aria-invalid={!!errors.descricao}
            className={clsx(inputBase, "h-[152px] resize-none py-2")}
            id="orcamento-descricao"
          />
          {errors.descricao && (
            <p
              className="mt-1 text-sm text-red-300"
              id="orcamento-descricao-erro"
            >
              {errors.descricao.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-[18px] flex flex-col items-center gap-3">
        <Button aria-busy={isSubmitting} disabled={isSubmitting} type="submit">
          {isSubmitting && (
            <span
              aria-hidden="true"
              className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
            />
          )}
          {isSubmitting ? "Enviando" : "Enviar"}
        </Button>

        <p
          aria-live="polite"
          className={clsx(
            "min-h-5 text-center text-sm",
            status.tipo === "sucesso" && "text-green-300",
            status.tipo === "erro" && "text-red-300",
          )}
          role="status"
        >
          {status.tipo !== "ocioso" && status.mensagem}
        </p>
      </div>
    </form>
  );
};
