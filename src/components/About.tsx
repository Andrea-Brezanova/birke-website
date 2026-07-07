const features = [
  {
    label: "Experience",
    value: "20+ years on island",
    description: "Two decades of hands-on gardening across Nantucket.",
  },
  {
    label: "Approach",
    value: "Professional & reliable",
    description: "Efficient work, honest communication, and care you can trust.",
  },
  {
    label: "Focus",
    value: "Gardens, containers, seasonal properties",
    description: "Window boxes, containers, gardens, and seasonal makeovers.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="section-padding bg-ivory"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 id="about-heading" className="section-heading">
            About
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-text-muted sm:text-lg">
            <p>
              Birke Garden Care is a small Nantucket garden-care business built on
              more than 20 years of on-island gardening experience.
            </p>
            <p>
              The work is professional, efficient, and reliable — with honest
              communication about what your garden needs and when. Whether you own a
              year-round home, a seasonal property, or a rental, the goal is the
              same: outdoor spaces that look cared for and feel welcoming.
            </p>
            <p>
              Services include gardens, window boxes, containers, design refreshes,
              makeovers, and ongoing maintenance — the kind of thoughtful, hands-on
              care that Nantucket properties deserve.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.label} className="card p-6">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-sage">
                {feature.label}
              </p>
              <p className="mt-3 font-serif text-xl text-forest">{feature.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
