import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ minHeight: "max(680px, calc(100svh - 88px))" }}
      aria-labelledby="hero-heading"
    >
      <Image
        src="/hero-lilies.jpg"
        alt="Pink and white lilies in a Nantucket garden"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_22%]"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,53,32,0) 0%, rgba(20,53,32,0) 50%, rgba(15,38,23,0.78) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 mx-auto flex w-full items-end justify-center text-center"
        style={{ minHeight: "max(680px, calc(100svh - 88px))", padding: "64px 48px 76px" }}
      >
        <div style={{ maxWidth: "820px", color: "#FBF8F1" }}>
        <h1
          id="hero-heading"
          className="mx-auto max-w-[95%] font-serif md:max-w-none md:whitespace-nowrap"
          style={{
            fontWeight: 500,
            fontSize: "clamp(1.9rem, 5.6vw, 56px)",
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            marginBottom: "16px",
            textShadow: "0 2px 20px rgba(0,0,0,0.25)",
          }}
        >
          <span className="block md:hidden">Gardens made beautiful,</span>
          <span className="block md:hidden">season after season.</span>
          <span className="hidden md:block">
            Gardens made beautiful, season after season.
          </span>
        </h1>

        <p
          className="mx-auto max-w-[95%] md:max-w-none md:whitespace-nowrap"
          style={{
            fontSize: "clamp(1rem, 2.3vw, 19px)",
            lineHeight: 1.5,
            color: "#E9EFE3",
            margin: "0 auto",
          }}
        >
          Taking care of Nantucket gardens since 2005.
        </p>
        </div>
      </div>
    </section>
  );
}
