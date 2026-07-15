export function AboutTeaser() {
  return (
    <section
      id="about"
      className="bg-ivory px-5 py-16 sm:px-8 sm:py-20"
      aria-labelledby="about-teaser-heading"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.68fr] lg:items-stretch lg:gap-14">
          <div>
            <p
              className="text-[13px] uppercase tracking-[0.32em]"
              style={{ color: "#7A8770" }}
            >
              About
            </p>
            <h2
              id="about-teaser-heading"
              className="mt-5 max-w-[640px] font-serif text-[26px] font-semibold leading-[1.15] tracking-[-0.01em] md:text-[30px]"
              style={{ color: "#1E4A2C" }}
            >
              Rooted in experience, guided by genuine care.
            </h2>
            <p
              className="mt-6 max-w-[600px] text-[18px] leading-[1.45] md:text-[19px]"
              style={{ color: "#4C5A47" }}
            >
              A small Nantucket garden-care business shaped by years of
              hands-on work, local experience, and a lasting connection to the
              island.
            </p>

            <div className="mt-8 flex items-end gap-4" aria-label="Experience highlight">
              <p
                className="font-serif text-[56px] leading-[0.9] sm:text-[64px]"
                style={{ color: "#1E4A2C" }}
              >
                20+
              </p>
              <p
                className="pb-1 text-[14px] leading-[1.45] sm:text-[15px]"
                style={{ color: "#7A8770" }}
              >
                Years of hands-on gardening experience
              </p>
            </div>

            <a
              href="/about"
              className="mt-9 inline-block text-[18px] underline decoration-1 underline-offset-4 transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A8770] focus-visible:ring-offset-2"
              style={{ color: "#1E4A2C" }}
            >
              The Story Behind Birke →
            </a>
          </div>

          <div
            className="h-[320px] w-full overflow-hidden rounded-2xl border sm:h-[380px] lg:h-[440px]"
            style={{
              borderColor: "rgba(122,135,112,.34)",
              backgroundColor: "#F1EBDD",
            }}
          >
            <img
              src="/andrea-roots.png"
              alt="Andrea working in a Nantucket garden"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
