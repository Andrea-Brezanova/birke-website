import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative" aria-labelledby="hero-heading">
      {/* Background photo */}
      <Image
        src="/img-heroJPG.JPG"
        alt="Nantucket hydrangeas in bloom"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative flex min-h-[100svh] flex-col items-center justify-end px-5 pb-14 text-center sm:pb-20">
        <h1
          id="hero-heading"
          className="inline-block max-w-[92vw] rounded-xl px-6 py-4 font-serif font-medium text-ivory sm:whitespace-nowrap"
          style={{
            fontSize: "clamp(1.15rem, 3.4vw, 1.9rem)",
            background: "rgba(20,53,32,.55)",
            backdropFilter: "blur(2px)",
          }}
        >
          Reliable garden care for homes, rentals, and seasonal properties.
        </h1>
      </div>
    </section>
  );
}
