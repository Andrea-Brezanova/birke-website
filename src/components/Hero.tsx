export function Hero() {
  return (
    <section id="home" className="relative" aria-labelledby="hero-heading">
      {/* Background image placeholder — swap for a real photo later */}
      <div className="img-placeholder absolute inset-0 h-full w-full" aria-hidden="true" />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,53,32,.22), rgba(20,53,32,.62))",
        }}
        aria-hidden="true"
      />

      <div
        className="relative mx-auto flex max-w-4xl flex-col items-center justify-center px-5 text-center"
        style={{ minHeight: "640px" }}
      >
        <h1
          id="hero-heading"
          className="font-serif font-medium leading-[1.08] text-ivory"
          style={{ fontSize: "clamp(2.75rem, 7vw, 4rem)" }}
        >
          Your trusted gardener on Nantucket.
        </h1>
        <p
          className="mt-6 max-w-[600px] text-[19px] leading-relaxed sm:text-[21px]"
          style={{ color: "#E9EFE3" }}
        >
          Reliable garden care for homes, rentals, and seasonal properties.
        </p>
      </div>
    </section>
  );
}
