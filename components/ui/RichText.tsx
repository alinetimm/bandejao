import type { RichText as RichTextData } from "@/types";

// Renderiza trechos com negrito (e itálico); use whitespace-pre-line no pai para respeitar "\n".
export const RichText = ({ value }: { value: RichTextData }) => (
  <>
    {value.map((trecho, i) =>
      typeof trecho === "string" ? (
        trecho
      ) : (
        <strong
          key={i}
          className={trecho.italico ? "font-bold italic" : "font-bold"}
        >
          {trecho.forte}
        </strong>
      ),
    )}
  </>
);
