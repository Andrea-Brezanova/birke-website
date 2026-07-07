import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh]" aria-labelledby="hero-heading">
      {/* Background photo */}
      <Image
        src="/IMG_5490.JPG"
        alt="Pink garden flowers in bloom on Nantucket"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,53,32,.12) 0%, rgba(20,53,32,.16) 45%, rgba(20,53,32,.40) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-5 text-center">
        <p
          className="text-[13px] font-semibold uppercase tracking-[0.32em]"
          style={{ color: "#C6D3BC", textShadow: "0 1px 10px rgba(20,53,32,.6)" }}
        >
          Birke Garden Care · Nantucket
        </p>

        <h1
          id="hero-heading"
          className="mt-6 font-serif font-medium leading-[1.04] text-ivory"
          style={{
            fontSize: "clamp(2.75rem, 8vw, 5.5rem)",
            textShadow: "0 2px 12px rgba(20,53,32,.75), 0 1px 30px rgba(20,53,32,.5)",
          }}
        >
          Thoughtful garden care on Nantucket.
        </h1>

        <p
          className="mt-6 max-w-[620px] text-[18px] leading-relaxed sm:text-[21px]"
          style={{ color: "#F1EBDD", textShadow: "0 1px 14px rgba(20,53,32,.65)" }}
        >
          Reliable care for homes, rentals, and seasonal properties.
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a href="tel:5083743018" className="btn-hero">
            Call/Text Andrea
          </a>
          <a href="#services" className="btn-hero-outline">
            See Services
          </a>
        </div>
      </div>
    </section>
  );
}
