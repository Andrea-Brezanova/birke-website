function HeroImagePlaceholder() {
  return (
    <div className="card relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/6]">
      <div className="absolute inset-0 bg-gradient-to-br from-sage-soft via-ivory-warm to-sage-muted/60" />
      <svg
        className="absolute inset-0 h-full w-full text-forest/10"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M200 420 C160 360 120 300 140 240 C155 195 185 170 200 130 C215 170 245 195 260 240 C280 300 240 360 200 420Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M200 130 C200 90 175 60 155 45 M200 130 C200 90 225 60 245 45"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <ellipse cx="200" cy="400" rx="120" ry="18" stroke="currentColor" strokeWidth="1" />
        <path
          d="M80 280 Q120 250 160 270 M240 270 Q280 250 320 280"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/80 to-transparent p-6 pt-16">
        <p className="font-serif text-lg text-forest">Nantucket gardens</p>
        <p className="mt-1 text-sm text-text-muted">Window boxes, containers &amp; seasonal care</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="section-padding bg-ivory"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sage">
            Nantucket, Massachusetts
          </p>

          <h1
            id="hero-heading"
            className="mt-4 font-serif text-[2rem] font-medium leading-[1.2] tracking-tight text-forest sm:text-[2.75rem] lg:text-5xl"
          >
            Reliable garden care for Nantucket homes and seasonal properties.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            Boutique garden maintenance, window boxes, containers, design refreshes,
            and seasonal makeovers — handled with care, experience, and honest
            communication.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="tel:5083743018" className="btn-primary">
              Call/Text Andrea
            </a>
            <a href="mailto:birkegardencare@gmail.com" className="btn-secondary">
              Email Andrea
            </a>
          </div>
        </div>

        <HeroImagePlaceholder />
      </div>
    </section>
  );
}
