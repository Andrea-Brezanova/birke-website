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

      <div className="relative mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-end px-5 pb-[14vh] text-center">
        <h1
          id="hero-heading"
          className="font-serif font-medium leading-[1.02] text-ivory"
          style={{
            fontSize: "clamp(2.2rem, 8vw, 6rem)",
            textShadow: "0 2px 12px rgba(20,53,32,.75), 0 1px 30px rgba(20,53,32,.5)",
          }}
        >
          <span className="block whitespace-nowrap">Gardens made beautiful,</span>
          <span className="block whitespace-nowrap">season after season.</span>
        </h1>

        <p
          className="mt-6 max-w-[620px] text-[18px] leading-relaxed sm:text-[21px]"
          style={{ color: "#F1EBDD", textShadow: "0 1px 14px rgba(20,53,32,.65)" }}
        >
          Thoughtful gardening for Nantucket homes and rentals.
        </p>

        <div className="mt-11 flex justify-center">
          <a href="#contact" className="btn-hero">
            Schedule a Meeting
          </a>
        </div>
      </div>
    </section>
  );
}
