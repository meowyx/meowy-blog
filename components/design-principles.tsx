const PRINCIPLES = [
  {
    number: "01",
    title: "No guilt",
    description:
      'Unfinished work is "carried forward," never "missed." Celebrate wins first, even tiny ones.',
  },
  {
    number: "02",
    title: "Energy-aware",
    description:
      "Low energy? Process inbox. High energy? Build the next milestone. The system meets you where you are.",
  },
  {
    number: "03",
    title: "Choices, not commands",
    description:
      '"You could start with..." not "you should do..." My brain rebels against commands. Choices feel like freedom.',
  },
  {
    number: "04",
    title: "Tiny first steps",
    description:
      'Not "work on the pipeline." Instead: "open overview.md and check the next unchecked milestone."',
  },
  {
    number: "05",
    title: "No guilt trackers",
    description:
      "No weekly grids with empty boxes staring at you. Just today. It feels like a journal, not a spreadsheet.",
  },
]

export function DesignPrinciples() {
  return (
    <div className="dp">
      <p className="dp-eyebrow">how I designed for my brain</p>
      <div className="dp-list">
        {PRINCIPLES.map((p) => (
          <div key={p.number} className="dp-card">
            <span className="dp-number">{p.number}</span>
            <div>
              <p className="dp-title">{p.title}</p>
              <p className="dp-desc">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
