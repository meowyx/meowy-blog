interface Props {
  size?: number
  className?: string
}

export function CatGlyph({ size = 220, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 26"
      width={size}
      height={Math.round((size * 26) / 32)}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 23 L 5 12 L 8 8 L 10 11 L 12 9 L 14 11 L 14 14 C 18 12, 22 12, 22 18 L 22 23" />
      <path d="M22 23 C 26 22, 28 16, 26 12" />
    </svg>
  )
}
