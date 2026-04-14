/**
 * Ícone de garrafa de vinho na horizontal.
 * Usado como substituto de travessões decorativos em toda a página.
 */
export default function WineBottleIcon({ className, color = 'currentColor', width = 48 }) {
  const height = Math.round(width * 0.375);
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 48 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Rolha */}
      <rect x="0" y="7" width="4" height="4" rx="0.5" />
      {/* Gargalo */}
      <rect x="4" y="7" width="10" height="4" />
      {/* Ombro (transição gargalo → corpo) */}
      <path d="M14 7 L20 3 L20 15 L14 11 Z" />
      {/* Corpo com fundo arredondado */}
      <path d="M20 3 L43 3 Q48 3 48 9 Q48 15 43 15 L20 15 Z" />
    </svg>
  );
}
