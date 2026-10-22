import clsx from "clsx";

type ImagePlaceholderProps = {
  alt: string;
  hint?: string;
  aspect?: string;
  className?: string;
};

// Ocupa exatamente o espaço da foto que ainda não existe (ver CLAUDE.md §4).
// O tamanho vem do container/className; o placeholder só preenche.
export const ImagePlaceholder = ({
  alt,
  hint,
  aspect,
  className,
}: ImagePlaceholderProps) => (
  <div
    aria-label={alt}
    className={clsx(
      "flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 bg-gray-100 p-4 text-center text-xs text-gray-500",
      className,
    )}
    role="img"
  >
    <svg
      aria-hidden="true"
      className="h-8 w-8 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <rect height="16" rx="2" width="18" x="3" y="4" />
      <circle cx="9" cy="10" r="2" />
      <path d="m21 16-5-5-9 9" />
    </svg>
    <span>{hint ?? alt}</span>
    {aspect && <span className="text-[10px] opacity-70">{aspect}</span>}
  </div>
);
