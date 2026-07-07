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

      <div className="relative mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-5 text-center">
        <h1
          id="hero-heading"
          className="font-serif font-medium leading-[1.08] text-ivory"
          style={{
            fontSize: "clamp(2.75rem, 7vw, 4rem)",
            textShadow: "0 2px 18px rgba(20,53,32,.55)",
          }}
        >
          Your trusted gardener on Nantucket.
        </h1>
        <p
          className="mt-6 max-w-[600px] text-[19px] leading-relaxed sm:text-[21px]"
          style={{ color: "#FBF8F1", textShadow: "0 1px 12px rgba(20,53,32,.6)" }}
        >
          Reliable garden care for homes, rentals, and seasonal properties.
        </p>
      </div>
    </section>
  );
}
