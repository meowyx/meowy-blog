interface Props {
  label?: string
}

export function YouTubeLink({ label = "MeowyTheDev" }: Props) {
  return (
    <a
      href="https://www.youtube.com/@MeowyTheDev"
      target="_blank"
      rel="noopener noreferrer"
      className="youtube-link"
      aria-label={`YouTube ${label}`}
    >
      <svg
        width="32"
        height="22"
        viewBox="0 0 32 22"
        aria-hidden="true"
      >
        <rect x="0" y="0" width="32" height="22" rx="5" fill="#FF0000" />
        <path d="M13 6.5 L 13 15.5 L 20.5 11 Z" fill="#ffffff" />
      </svg>
      <span>{label}</span>
    </a>
  )
}
