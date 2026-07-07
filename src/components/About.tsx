export function About() {
  return (
    <section
      id="about"
      className="-mt-[88px] scroll-mt-0 bg-ivory px-5 pb-20 pt-[108px] sm:px-8 sm:pb-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[1080px] items-center gap-12 md:grid-cols-2">
        <div>
          <p
            className="text-[13px] uppercase tracking-[0.3em]"
            style={{ color: "#7A8770" }}
          >
            About
          </p>

          <div className="mt-6 flex items-baseline gap-4">
            <span
              className="font-serif font-medium leading-none"
              style={{ fontSize: "56px", color: "#1E4A2C" }}
            >
              20+
            </span>
            <span className="text-[16px]" style={{ color: "#4C5A47" }}>
              years gardening on-island
            </span>
          </div>

          <p className="mt-6 text-[16px] leading-relaxed" style={{ color: "#4C5A47" }}>
            A small Nantucket garden-care business — professional, efficient,
            reliable, and trustworthy. Caring for homes, rentals, and seasonal
            properties, from window boxes and containers to established gardens, with
            steady attention to detail.
          </p>
        </div>

        {/* Image placeholder on the RIGHT */}
        <div
          className="img-placeholder w-full"
          style={{ height: "404px", borderRadius: "14px" }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
